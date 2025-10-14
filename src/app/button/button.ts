import { Component, input, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  styleUrl: './button.scss',
  template: `
    <button
      type="button"
      class="btn"
      [ngClass]="{
        'btn-sm': size() === 'small',
        'btn-primary': theme() === 'primary',
        'btn-secondary': theme() === 'secondary',
        'btn-danger': theme() === 'danger',
      }"
      (click)="onClick.emit()"
    >
      {{ text() }}
    </button>
  `,
})
export class Button {
  text = input.required<string>();
  size = input<'normal'|'small'>('normal');
  theme = input<'primary'|'secondary'|'danger'>('primary');

  onClick = output<void>()
}
