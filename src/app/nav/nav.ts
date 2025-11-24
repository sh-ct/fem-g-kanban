import { Component, inject } from '@angular/core';
import {
  selectAllBoards,
  selectBoardsCount,
  selectBoardsLoading,
  selectSelectedBoard
} from '../../state/boards/boards.selectors';
import { Store } from '@ngrx/store';
import { selectBoard } from '../../state/boards/boards.actions';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-nav',
  imports: [
    Icon
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {

  store = inject(Store);

  boards = this.store.selectSignal(selectAllBoards);
  boardCount = this.store.selectSignal(selectBoardsCount);
  loading = this.store.selectSignal(selectBoardsLoading);
  selectedBoard = this.store.selectSignal(selectSelectedBoard);

  selectBoard(id: number): void {
    this.store.dispatch(selectBoard({ id }));
  }

  isBoardSelected(id: number): boolean {
    return this.selectedBoard()?.id === id;
  }

}
