import { AsyncPipe, CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

// Forms
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Observable } from 'rxjs';

// services
import { Coin, CoinsService } from 'services/coins.service';

interface Animal {
  name: string;
  sound: string;
}

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
    AsyncPipe
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

  formControl = new FormControl<Animal | null>(null, Validators.required);

  convertForm!: FormGroup;
  animals: Animal[] = [
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ];
  coins$!: Observable<Coin[]>

  constructor(
    private readonly coinsService: CoinsService,
    private readonly formBuilder: FormBuilder
  ) {
    this.convertForm = this.formBuilder.group({
      amount: [null, Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
      // Getting coins
      this.coins$ = this.coinsService.getCoins()
  }

  onSubmit(): void {
    // Retrieving form values
    const {amount, from, to } = this.convertForm.value
    
    // Calling the service to convert the amount
    this.coinsService.convertCoins(amount, from, to).subscribe({
      next: (response) => console.log(response)
    })
  }
}
