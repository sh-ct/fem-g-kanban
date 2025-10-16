import { Component, input, model } from '@angular/core';
import { FormCheckboxControl } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [
    FormsModule
  ],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss'
})
export class Checkbox implements FormCheckboxControl {

  checked = model<boolean>(false);

  disabled = input(false);

}
