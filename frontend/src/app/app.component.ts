import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Seleor usado para esse componente
  templateUrl: 'app.component.html',  // Nome do template
  styles: []
})
export class AppComponent { // Passa para o fronts
  nome = 'Igor';
}