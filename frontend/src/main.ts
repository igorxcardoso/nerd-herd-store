// Porta de entrada do projeto
// Vai carregar o modulo principal

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';   // Importa o AppModule
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) // Vai carregar por padrão (nesse projeto) o AppModule
  .catch(err => console.error(err));
