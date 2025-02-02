import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { LifecycleEventChildComponent } from './lifecycle-event-child/lifecycle-event-child/lifecycle-event-child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-lifecycle-event',
  imports: [LifecycleEventChildComponent, CommonModule, FormsModule],
  templateUrl: './lifecycle-event.component.html',
  styleUrls: ['./lifecycle-event.component.css']
})
export class LifecycleEventComponent implements OnInit, DoCheck, OnChanges, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  private subscription: Subscription = new Subscription;
  timeNext: number = 0;
  name: string = '';
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges run khi component con thay đổi. Ở đây khi timeNext của component cha truyền tới thì hàm OnChanges này sẽ được chạy');
  }
  ngOnInit() {
    console.log('ngOnInit run thứ 1');
    this.subscription = interval(5000).subscribe(() => {
      this.timeNext = this.timeNext + 1;
      console.log('Interval run');
    });
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit run');
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('ngAfterViewChecked run');
  }
  changeTimeNext() {
    this.timeNext = this.timeNext + 1;
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck run');
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit run');
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked run');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
    console.log('ngOnDestroy run');
  }

}
