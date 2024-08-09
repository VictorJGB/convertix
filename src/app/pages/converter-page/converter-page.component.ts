import { CommonModule } from '@angular/common';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CoinsService } from 'services/coins.service';

// services

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
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
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
    this.coinsService
      .convertCoins(10, 'BRL', 'USD')
      .subscribe((response) => console.log('convert response', response));
  }
}
