import { AsyncPipe, CommonModule } from '@angular/common';
import {
  Component,
  EnvironmentInjector,
  runInInjectionContext
} from '@angular/core';
import { Observable } from 'rxjs';

// Forms
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

// components
import { ConvertResultCardComponent } from '@components/convert-result-card/convert-result-card.component';

// Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

// services
import { CoinsService } from '@services/coins.service';
import { HistoryService } from '@services/history.service';

// interfaces
import ConvertHistory from '@app/interfaces/history';
import { LoadingService } from '@app/services/loading.service';
import Coin from '@interfaces/coin';
import ConvertResponse from '@interfaces/convert';

@Component({
  selector: 'app-converter-page',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    FontAwesomeModule,
    ConvertResultCardComponent,
  ],
  templateUrl: './converter-page.component.html',
  styleUrl: './converter-page.component.scss',
})
export class ConverterPageComponent {
  /**
   * Constructor for the ConverterPageComponent.
   *
   * @param coinsService The CoinsService instance.
   * @param formBuilder The FormBuilder instance.
   */

  convertForm!: FormGroup;
  coins$!: Observable<Coin[]>;
  convertResponse!: ConvertResponse;
  isSubmitting = false;
  isLoading!: boolean

  // icons const
  loadingIcon = faRotateRight;

  constructor(
    private readonly coinsService: CoinsService,
    private readonly formBuilder: FormBuilder,
    private readonly historyService: HistoryService,
    private readonly environmentInjector: EnvironmentInjector,
    private readonly loadinService: LoadingService
  ) {
    this.convertForm = this.formBuilder.group({
      amount: [null, Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
    });

    loadinService.getLoading().subscribe(data => this.isLoading = data)
    this.coins$ = this.coinsService.getCoins();
  }

  findCoinLabel(coin: string, data: Coin[]): string {
    const labelData = data.find(({ code }) => coin === code);

    return labelData?.value ?? '';
  }

  // Adding the history context
  addHistoryItem(): void {
    const [destinationCoin, result] = Object.entries(
      this.convertResponse.rates
    )[0];
    let originLabel = '';
    let destinationLabel = '';

    this.coins$.subscribe({
      next: (coins) => {
        originLabel = this.findCoinLabel(this.convertResponse.base, coins);
        destinationLabel = this.findCoinLabel(destinationCoin, coins);
      },
      complete: () => {
        runInInjectionContext(this.environmentInjector, () => {
          let historyData: ConvertHistory[] = [];

          this.historyService
            .getHistory()
            .subscribe((data) => (historyData = data));

          const formatedData: ConvertHistory = {
            id: historyData ? historyData.length + 1 : 1,
            amount: this.convertResponse.amount,
            originCoin: `${this.convertResponse.base} (${originLabel})`,
            destinationCoin: `${destinationCoin} (${destinationLabel})`,
            result,
          };

          this.historyService.addItem(formatedData);
        });
      },
    });
  }

  onSubmit(): void {
    // loading Control
    this.isSubmitting = true;

    // Retrieving form values
    const { amount, from, to } = this.convertForm.value;

    // Calling the service to convert the amount
    this.coinsService.convertCoins(amount, from, to).subscribe({
      next: (response) => {
        this.convertResponse = response;
        this.addHistoryItem();
      },
      complete: () => (this.isSubmitting = false),
    });
  }
}
