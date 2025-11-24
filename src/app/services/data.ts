import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import _data from '../../../public/data.json';
import { _Data, Board, BoardRoute, SubtaskData } from '../../state/boards/boards.interfaces';

@Injectable({
  providedIn: 'root'
})
export class Data {

  _data = _data as { boards: Board[] };

  // Mock an API that returns a list of board data
  listBoards(): Observable<BoardRoute[]> {
    return of(_data.boards.map(({ id, name }) => ({ id, name })));
  }

  // Mock an API that retreives a single boards full data
  retrieveBoard(id: number): Observable<Board|null> {
    return of(_data.boards.find((board) => board.id === id) as Board ?? null);
  }

}
