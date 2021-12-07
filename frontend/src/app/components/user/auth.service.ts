import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  logar() {
    this.router.navigate(['/']);
    this.showMenuEmitter.emit(true);
  }
}
