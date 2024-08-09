import { AsyncPipe, CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

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
import { MatSelectModule } from '@angular/material/select';
import { Observable } from 'rxjs';

// Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

// services
import { Coin, CoinsService, ConvertResponse } from 'services/coins.service';
import { ConvertResultCardComponent } from "../../components/convert-result-card/convert-result-card.component";


@Component({
  selector: 'converter-page',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
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

  // icons const
  loadingIcon = faRotateRight

  constructor(
    private readonly coinsService: CoinsService,
    private readonly formBuilder: FormBuilder
  ) {
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

  onSubmit(): void {
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
