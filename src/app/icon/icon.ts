import { Component, computed, input } from '@angular/core';

export type IconType = 'board'|'sidebar-hide'|'sidebar-show';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.scss'
})
export class Icon {


  type = input.required<IconType>();
  theme = input<'secondary'|'primary'|'white'>('secondary');
  colour = computed<string>(() => {
    return {
      secondary: '#828FA3',
      primary: '#635fc7',
      white: '#ffffff',
    }[this.theme()]
  });

}
