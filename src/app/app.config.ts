import {
  ApplicationConfig,
  isDevMode,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import * as fromBoards from '../state/boards/boards.reducer';
import { provideEffects } from '@ngrx/effects';
import { BoardsEffects } from '../state/boards/boards.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideState({ name: fromBoards.featureKey, reducer: fromBoards.reducer, }),
    provideEffects(BoardsEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    })
  ]
};
