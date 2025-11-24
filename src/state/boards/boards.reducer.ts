import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Board, BoardRoute } from './boards.interfaces';
import { createReducer, on } from '@ngrx/store';
import {
  createBoard,
  createBoardFailure,
  createBoardSuccess,
  deleteBoard,
  deleteBoardFailure,
  deleteBoardSuccess,
  editBoard,
  editBoardFailure,
  editBoardSuccess,
  initNav,
  initNavFailure,
  initNavSuccess,
  selectBoard,
  selectBoardFailure,
  selectBoardSuccess
} from './boards.actions';

export interface BoardsState extends EntityState<BoardRoute> {
  loading: boolean;
  selectedBoardLoading: boolean;
  selectedBoard: Board|null;
}

const adapter = createEntityAdapter<BoardRoute>({
  sortComparer: (a: BoardRoute, b: BoardRoute) => a.name.localeCompare(b.name),
});

const initialState: BoardsState = adapter.getInitialState({
  loading: false,
  selectedBoard: null,
  selectedBoardLoading: false,
});

export const reducer = createReducer(
  initialState,

  // Init Nav

  on(initNav, (state) => {
    return adapter.removeAll({...state, loading: true});
  }),
  on(initNavSuccess, (state, { boards }) => {
    return adapter.setAll(
      boards,
      { ...state, loading: false }
    );
  }),
  on(initNavFailure, (state) => {
    return { ...state, loading: false };
  }),

  // Select

  on(selectBoard, (state) => {
    return {
      ...state,
      selectedBoard: null,
      selectedBoardLoading: true,
    };
  }),
  on(selectBoardSuccess, (state, { selectedBoard }) => {
    return {
      ...state,
      selectedBoard,
      selectedBoardLoading: false,
    };
  }),
  on(selectBoardFailure, (state) => {
    return {
      ...state,
      selectedBoardLoading: false,
    };
  }),

  // Create

  on(createBoard, (state) => {
    return {
      ...state,
      selectedBoard: null,
      selectedBoardLoading: true,
    };
  }),
  on(createBoardSuccess, (state, { createdBoard }) => {
    return {
      ...state,
      selectedBoard: createdBoard,
      selectedBoardLoading: false,
    };
  }),
  on(createBoardFailure, (state) => {
    return {
      ...state,
      selectedBoardLoading: false,
    };
  }),

  // Edit Board

  on(editBoard, (state) => {
    return {
      ...state,
      selectedBoardLoading: true,
    }
  }),
  on(editBoardSuccess, (state, { editedBoard }) => {
    const { id, name } = editedBoard;
    return adapter.updateOne(
      { id, changes: { name } },
      {
        ...state,
        selectedBoard: editedBoard,
        selectedBoardLoading: false,
      }
    )
  }),
  on(editBoardFailure, (state) => {
    return {
      ...state,
      selectedBoardLoading: false,
    };
  }),

  // Delete Board

  on(deleteBoard, (state) => {
    return {
      ...state,
      selectedBoardLoading: true,
    };
  }),
  on(deleteBoardSuccess, (state, { id }) => {
    return adapter.removeOne(
      id,
      {
        ...state,
        selectedBoard: null,
        selectedBoardLoading: false,
      }
    );
  }),
  on(deleteBoardFailure, (state) => {
    return {
      ...state,
      selectedBoardLoading: false,
    };
  }),

);

export const featureKey = 'boards';
export const {
  selectAll: getAll,
  selectEntities: getEntities,
  selectIds: getIds,
  selectTotal: getTotal,
} = adapter.getSelectors();
export const getLoading = (state: BoardsState) => state.loading;
export const getSelectedBoard = (state: BoardsState) => state.selectedBoard;
export const getSelectedBoardLoading = (state: BoardsState) => state.selectedBoardLoading;
