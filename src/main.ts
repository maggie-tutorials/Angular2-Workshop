import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HelloModule } from './app/HelloModule';
import { GuessItModule } from './app/guess-it/GuessItModule';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(GuessItModule)
  .catch(err => console.log(err));
