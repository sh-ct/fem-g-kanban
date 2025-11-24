import { Component, input, model } from '@angular/core';
import { Field, form, FormCheckboxControl } from '@angular/forms/signals';
import { Checkbox } from '../checkbox/checkbox';
import { SubtaskData } from '../../state/boards/boards.interfaces';

@Component({
  selector: 'app-subtask',
  imports: [
    Checkbox,
    Field,
  ],
  templateUrl: './subtask.html',
  styleUrl: './subtask.scss'
})
export class Subtask implements FormCheckboxControl {

  checked = model<boolean>(false);
  disabled = input(false);

  subtask = model.required<SubtaskData>();
  form = form(this.subtask);



}
