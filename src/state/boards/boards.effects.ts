import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Data } from '../../app/services/data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  initNav, initNavFailure, initNavSuccess, selectBoard,
  selectBoardFailure, selectBoardSuccess,
} from './boards.actions';
import { switchMap,  } from 'rxjs/operators';
import { mapResponse } from '@ngrx/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Board, BoardRoute } from './boards.interfaces';


@Injectable()
export class BoardsEffects {
  store = inject(Store);
  data = inject(Data);
  actions$ = inject(Actions);

  initNav$ = createEffect(() => this.actions$.pipe(
    ofType(initNav),
    switchMap(() => this.data.listBoards().pipe(
      mapResponse({
        next: (boards: BoardRoute[]) => initNavSuccess({ boards }),
        error: (error: HttpErrorResponse) => {
          console.error('Error loding Boards', error);
          return initNavFailure();
        },
      })
    ))
  ))

  selectBoard$ = createEffect(() => this.actions$.pipe(
    ofType(selectBoard),
    switchMap(({ id }) => this.data.retrieveBoard(id).pipe(
      mapResponse({
        next: (selectedBoard: Board|null) => selectedBoard
          ? selectBoardSuccess({ selectedBoard })
          : selectBoardFailure({ id }),
        error: (error: HttpErrorResponse) => {
          console.error('Error retrieving Board', error);
          return selectBoardFailure({ id })
        }
      })
    ))
  ))

}
