import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import {
  LucideAngularModule,
  Menu,
  Home,
  UserCheck,
  File,
  BoxSelect,
  Undo,
  Redo,
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      LucideAngularModule.pick({
        File,
        Home,
        Menu,
        UserCheck,
        BoxSelect,
        Undo,
        Redo,
      })
    ),
  ],
};
