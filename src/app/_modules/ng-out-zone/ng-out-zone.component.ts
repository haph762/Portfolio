import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-ng-out-zone',
  templateUrl: './ng-out-zone.component.html',
  styleUrls: ['./ng-out-zone.component.css']
})
export class NgOutZoneComponent implements OnInit, OnDestroy {
  timeNext: number = 0;
  timeNextOutZone: number = 0;
  subscription: Subscription = new Subscription;
  subscription1: Subscription = new Subscription;

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    this.runOutZone();
    this.runZone();
  }
  runZone() {
    this.subscription1 = interval(1000).subscribe(() => {
      this.timeNext = this.timeNext + 1;
      console.log('Interval run');
    });
  }
  runOutZone() {
    this.ngZone.runOutsideAngular(() => {
      this.subscription = interval(1000).subscribe(() => {
        this.timeNextOutZone = this.timeNextOutZone + 1;
        console.log('Interval outZone run');
      });
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
  }

}
