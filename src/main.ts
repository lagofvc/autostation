import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AutostationAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AutostationAppComponent);
