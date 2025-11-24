import { Component, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Nav } from '../nav/nav';
import { ThemeSelector } from '../theme-selector/theme-selector';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-sidebar',
  imports: [
    Nav,
    ThemeSelector,
    Icon
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  hide = output();

}
