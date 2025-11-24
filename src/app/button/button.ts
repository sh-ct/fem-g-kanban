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
      class="btn text-accent"
      [ngClass]="{
        'btn-sm': size() === 'small',
        'btn-primary': theme() === 'primary',
        'btn-secondary': theme() === 'secondary',
        'btn-danger': theme() === 'danger',
        'btn-disabled': disabled(),
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
  disabled = input<boolean>(false);

  onClick = output<void>()
}
