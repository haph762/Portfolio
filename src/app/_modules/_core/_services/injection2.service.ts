import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Injection2Service {

  constructor() {
    console.log('Injection 2 run');
  }

}
