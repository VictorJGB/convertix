import { AsyncPipe, CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Observable } from 'rxjs';

// Forms
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

// components
import { ConvertResultCardComponent } from "@components/convert-result-card/convert-result-card.component";

// Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

// services
import { CoinsService } from '@services/coins.service';
import { LoadingService } from '@services/loading.service';

// interfaces
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
    ConvertResultCardComponent
],
  templateUrl: './converter-page.component.html',
  styleUrl: './converter-page.component.scss',
})

export class ConverterPageComponent implements AfterViewInit {
  /**
   * Constructor for the ConverterPageComponent.
   *
   * @param coinsService The CoinsService instance.
   * @param formBuilder The FormBuilder instance.
   */

  convertForm!: FormGroup;
  coins$!: Observable<Coin[]>
  convertResponse!: ConvertResponse
  isSubmitting = false
  isLoading$!: Observable<boolean>

  // icons const
  loadingIcon = faRotateRight

  constructor(
    private readonly coinsService: CoinsService,
    private readonly formBuilder: FormBuilder,
    private readonly loadingService: LoadingService
  ) {
    this.isLoading$ = loadingService.getLoading()

    this.convertForm = this.formBuilder.group({
      amount: [10, Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
      // Getting coins
      this.coins$ = this.coinsService.getCoins()
  }

  findCoinLabel(coin: string, data: Coin[]): string {
    const labelData = data.find(({code}) => coin === code)

    return labelData?.value ?? ''
  }

  onSubmit(): void {
    // loading Control
    this.isSubmitting = true

    // Retrieving form values
    const {amount, from, to } = this.convertForm.value

    // Calling the service to convert the amount
    this.coinsService.convertCoins(amount, from, to).subscribe({
      next: (response) => this.convertResponse = response,
      complete: () => this.isSubmitting = false
    })
  }
}
