import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Injection1Service {

  constructor() {
    console.log('Injection 1 run');
  }

}
