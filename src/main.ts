import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

//noinspection TypeScriptCheckImport
import { AutostationAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AutostationAppComponent);
