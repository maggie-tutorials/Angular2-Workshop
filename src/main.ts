import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';

import { HelloModule } from './app/hello/HelloModule';
import { GuessItModule } from './app/guess-it/GuessItModule';
import { DirectivesModule } from './app/directives/DirectivesModule';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(DirectivesModule)
  .catch(err => console.log(err));
