import { Component, input, model, OnChanges, OnInit } from '@angular/core';
import { Control, form, FormCheckboxControl } from '@angular/forms/signals';
import { SubtaskData } from '../app.interfaces';
import { Checkbox } from '../checkbox/checkbox';

@Component({
  selector: 'app-subtask',
  imports: [
    Checkbox,
    Control
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
