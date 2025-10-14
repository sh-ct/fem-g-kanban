import { Component, input, model } from '@angular/core';
import { FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-input',
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './input.html',
  styleUrl: './input.scss'
})
export class Input implements FormValueControl<string | null> {

  placeholder = input<string | null>(null);

  value = model<string | null>(null);

  disabled = input(false);
  errors = input<readonly WithOptionalField<ValidationError>[]>([]);
}
