import { createAction, props } from '@ngrx/store';
import { Board, BoardRoute } from './boards.interfaces';

export const initNav = createAction('[App] Init Nav');
export const initNavSuccess = createAction('[App] Init Nav Success', props<{ boards: BoardRoute[] }>());
export const initNavFailure = createAction('[App] Init Nav Failure');

export const selectBoard = createAction('[Nav] Select Board', props<{ id: number }>());
export const selectBoardSuccess = createAction('[Nav] Select Board Success', props<{ selectedBoard: Board }>());
export const selectBoardFailure = createAction('[Nav] Select Board Failure', props<{ id: number }>());

export const createBoard = createAction('[Nav] Create Board', props<{ name: string, columns: string[] }>());
export const createBoardSuccess = createAction('[Nav] Create Board', props<{ createdBoard: Board }>());
export const createBoardFailure = createAction('[Nav] Create Board Failure', props<{ name: string }>());

export const editBoard = createAction('[Header] Update Board', props<{ id: number, name: string, columns: string[] }>());
export const editBoardSuccess = createAction('[Header] Edit Board Success', props<{ editedBoard: Board }>());
export const editBoardFailure = createAction('[Header Edit Board Failure', props<{ name: string }>());

export const deleteBoard = createAction('[Header] Delete Board', props<{ id: number }>());
export const deleteBoardSuccess = createAction('[Header] Delete Board Success', props<{ id: number }>());
export const deleteBoardFailure = createAction('[Header] Delete Board Failure', props<{ id: number }>());

