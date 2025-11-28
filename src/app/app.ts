import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { NgOptimizedImage } from '@angular/common';
import { Board } from './board/board';
import { Store } from '@ngrx/store';
import { initNav } from '../state/boards/boards.actions';
import { Icon } from './icon/icon';
import { Theme } from './services/theme';

@Component({
  selector: 'app-root',
  imports: [ FormsModule, Header, Sidebar, NgOptimizedImage, Board, Icon ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  theme = inject(Theme);
  store = inject(Store);

  isSidebarShown = signal(true);
  onIsSidebarShownChange = effect(() => {
    window.localStorage.setItem(
      'isSidebarShown',
      `${this.isSidebarShown()}`
    );
  });

  ngOnInit(): void {
    this.isSidebarShown.set((window.localStorage.getItem('isSidebarShown') ?? 'true') === 'true');
    this.store.dispatch(initNav());
  }

  showSidebar(): void {
    this.isSidebarShown.set(true);
  }

  hideSidebar(): void {
    this.isSidebarShown.set(false);
  }

}
