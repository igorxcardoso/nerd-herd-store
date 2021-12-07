import { AuthService } from './../auth.service';
import { LoginUser } from './../user-login.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formbuilder: FormBuilder,
              private router: Router,
              private login: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submitLogin() {
    var dadosLogin = this.loginForm.getRawValue() as LoginUser; // O 'as LoginUser' é para facilitar a idetificação da var
    this.login.logar();
  }

}
