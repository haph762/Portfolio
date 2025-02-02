import { Injectable } from '@angular/core';
import { Environments } from '../../../environments/environments.dev';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email = Environments.email;
  password = Environments.password;
  constructor() { }
  isLoggedIn() {
    let formL = localStorage.getItem(Environments.loginLocalStorage);
    if (formL) {
      let data = JSON.parse(formL);
      return data.email === this.email && data.password === this.password;
    }
    return false;
  }
}
