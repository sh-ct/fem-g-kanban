import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBoards from './boards.reducer';

const selectBoardsState = createFeatureSelector<fromBoards.BoardsState>(fromBoards.featureKey);

export const selectAllBoards = createSelector(selectBoardsState, fromBoards.getAll);
export const selectAllBoardIds = createSelector(selectBoardsState, fromBoards.getIds);
export const selectAllBoardEntities = createSelector(selectBoardsState, fromBoards.getEntities);
export const selectBoardsCount = createSelector(selectBoardsState, fromBoards.getTotal);

export const selectBoardsLoading = createSelector(selectBoardsState, fromBoards.getLoading);
export const selectSelectedBoard = createSelector(selectBoardsState, fromBoards.getSelectedBoard);
export const selectSelectedBoardLoading = createSelector(selectBoardsState, fromBoards.getSelectedBoardLoading);
