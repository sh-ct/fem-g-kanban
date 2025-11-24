import { Component, inject } from '@angular/core';
import { Button } from '../button/button';
import { selectSelectedBoard } from '../../state/boards/boards.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  imports: [
    Button
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
  }
})
export class Header {
    store = inject(Store);

    selectedBoard = this.store.selectSignal(selectSelectedBoard);
}
