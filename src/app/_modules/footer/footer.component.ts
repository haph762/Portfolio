import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faPhone = faPhone;
  faMailBulk = faMailBulk;
  currentYear = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
