import { Component, Input, OnChanges, OnInit, SimpleChanges, OnDestroy, AfterViewChecked, AfterViewInit, AfterContentChecked, DoCheck, AfterContentInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-lifecycle-event-child',
  templateUrl: './lifecycle-event-child.component.html',
  styleUrls: ['./lifecycle-event-child.component.css']
})
export class LifecycleEventChildComponent implements OnInit, DoCheck, OnChanges, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  private subscription: Subscription = new Subscription;
  @Input() timeNext: number = 0;
  constructor() { }

  ngOnInit() {
    this.subscription = interval(9000).subscribe(() => {
      this.timeNext = this.timeNext + 1;
      console.log('Interval lifecycle-event-childdddd run ================');
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges childdddd run khi component con thay đổi. Ở đây khi timeNext của component cha truyền tới thì hàm OnChanges này sẽ được chạy');
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck childdddd run');
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit childdddd run');
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked childdddd run');
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit childdddd run');
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('ngAfterViewChecked childdddd run');
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
    console.log('ngOnDestroy childdddd run');
  }

}
