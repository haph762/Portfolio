import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Environments } from '../../../environments/environments.dev';

@Component({
  selector: 'app-router-protection',
  templateUrl: './router-protection.component.html',
  styleUrls: ['./router-protection.component.css']
})
export class RouterProtectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem(Environments.loginLocalStorage);
    this.router.navigate(['/demo-angular/login']);
  }

}
