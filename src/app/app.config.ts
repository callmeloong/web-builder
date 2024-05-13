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
import {
  MailOutline,
  UserOutline,
  TeamOutline,
  LockOutline,
} from '@ant-design/icons-angular/icons';
import { provideHttpClient } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(
      NzIconModule.forRoot([
        MailOutline,
        UserOutline,
        TeamOutline,
        LockOutline,
      ]),
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
