import { Component, input, model } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCheckboxControl } from '@angular/forms/signals';

@Component({
  selector: 'app-toggle',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './toggle.html',
  styleUrl: './toggle.scss',
  host: {
    'style.heiehgt': 'var(--toggle-height)'
  }
})
export class Toggle implements FormCheckboxControl {

  checked = model<boolean>(false);

  disabled = input(false);
  id = input<string>('input-toggle');

}
