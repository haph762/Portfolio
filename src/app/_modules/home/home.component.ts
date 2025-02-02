import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { Injection1Service } from '../_core/_services/injection1.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('title', { static: true }) titleRef!: ElementRef<HTMLDivElement>;
  titleInitialize: string = 'Xin chào, đến với các bài học của Angular^^';
  title: string = '';
  private subscription: Subscription = new Subscription;
  constructor(private injector: Injector) { }

  ngOnInit() {
    let t = this.injector.get(Injection1Service);
    console.log(t);
    this.showTitle();
  }
  showTitle() {
    let arr = this.titleInitialize.split('');
    const ti = this.titleRef.nativeElement;
    ti.innerHTML = `<strong>World!</strong> dùng innerHTML khi muốn chèn thêm html`;
    let index = 0;
    this.subscription = interval(100).subscribe(() => {
      this.title += arr[index];
      index++;
      ti.textContent = this.title;
      if (index === arr.length) {
        this.subscription.unsubscribe();
      }
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
