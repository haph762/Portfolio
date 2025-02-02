import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../_core/_services/auth.service';
import { Router } from '@angular/router';
import { Environments } from '../../environments/environments.dev';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formL: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    if (!this.formL.invalid) {
      let objLogin = {
        email: this.formL.value.email,
        password: this.formL.value.password
      }
      localStorage.setItem(Environments.loginLocalStorage, JSON.stringify(objLogin));
      if (this.AuthService.isLoggedIn()) {
        this.router.navigate(['/demo-angular/router-protection']);
      };
    }
  }

}
