import { computed, effect, Injectable, signal } from '@angular/core';

const themeStorageKey = 'darkMode';

@Injectable({
  providedIn: 'root',
})
export class Theme {

  darkMode = computed<boolean>(() => this.darkModeModel().darkMode);
  darkModeModel = signal<{ darkMode: boolean }>({
    darkMode: this.getUsersPreference(),
  })

  onModelChange = effect(() => {
    window.localStorage.setItem(themeStorageKey, this.darkMode().toString());
    if (this.darkMode()) {
      document.documentElement.classList.add('theme-dark');
    } else {
      document.documentElement.classList.remove('theme-dark');
    }
  })

  /* Functions */


  // Get the user's preference from localstorage, falling back to user browser preference
  getUsersPreference(): boolean {
    const storedPreference = this.storedPreference();
    return storedPreference == null
      ? !this.userPrefersDarkMode()
      : storedPreference === 'true';
  }

  // Get the users preference as stored in the localstorage
  storedPreference(): string|null {
    return window.localStorage.getItem(themeStorageKey);
  }

  // Check if the user prefers dark mode
  userPrefersDarkMode(): boolean {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // Set the user's preference
  setUserPreference(darkMode: boolean): void {
    this.darkModeModel.set({ darkMode });
  }

}
