import { Component, HostListener, input, model, OnDestroy, OnInit, signal, viewChild } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-select',
  imports: [
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './select.html',
  styleUrl: './select.scss',
})
export class Select implements FormValueControl<string|null>, OnInit, OnDestroy {



  choices = input.required<string[]>();
  placeholder = input<string|null>(null);


  value = model<string|null>(null);
  disabled = input(false);

  pickerVisible = signal(false);

  handleClick = (event: MouseEvent): void => this.onClick(event);

  ngOnInit(): void {
    document.addEventListener('click', this.handleClick);
  }

  ngOnDestroy() {
    // this.clickListener.remove();
    document.removeEventListener('click', this.handleClick);
  }

  onClick(event: MouseEvent): void {
    if (this.pickerVisible() && !(event.target as HTMLElement).className.includes('select')) {
      this.hidePicker();
    } else {
      console.log('not');
    }
  }

  showPicker(): void {
    if (!this.disabled()) {
      this.pickerVisible.set(true);
    }
  }

  hidePicker(): void {
    this.pickerVisible.set(false);
  }

  togglePicker(): void {
    if (!this.disabled()) {
      this.pickerVisible.update(visible => !visible);
    }

  }

  selectChoice(choice: string): void {
    if (this.disabled()) {
      return;
    }

    this.value.set(choice);
    this.hidePicker();
  }

}
