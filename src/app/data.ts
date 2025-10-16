import { Injectable } from '@angular/core';
import { SubtaskData } from './app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class Data {

  _getSubtasks(): SubtaskData[] {
    return this._addMockIdsToArray([
      {
        'title': 'Sign up page',
        'isCompleted': true
      },
      {
        'title': 'Sign in page',
        'isCompleted': false
      },
      {
        'title': 'Welcome page',
        'isCompleted': false
      }
    ]);
  }

  _addMockIdsToArray<T>(data: T[]): (T & { id: number})[] {
    return data.map((item: T, index: number) => ({ ...item, id: index + 1 }))
  }


}
