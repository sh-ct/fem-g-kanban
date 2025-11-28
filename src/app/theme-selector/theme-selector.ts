import { Component, inject, OnInit } from '@angular/core';
import { Toggle } from '../toggle/toggle';
import { Field, form } from '@angular/forms/signals';
import { Icon } from '../icon/icon';
import { Theme } from '../services/theme';

@Component({
  selector: 'app-theme-selector',
  imports: [
    Toggle,
    Field,
    Icon
  ],
  templateUrl: './theme-selector.html',
  styleUrl: './theme-selector.scss'
})
export class ThemeSelector implements OnInit {
  theme = inject(Theme);

  themeForm = form(this.theme.darkModeModel);

  ngOnInit(): void {
    this.themeForm().setControlValue({
      darkMode: this.theme.getUsersPreference(),
    });
  }

}
