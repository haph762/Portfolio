import { Component, Input, OnInit } from '@angular/core';
import { ResultForm } from './result-form';

@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.css']
})
export class ResultFormComponent implements OnInit {

  @Input() resultForm: ResultForm[] = [];
  constructor() { }

  ngOnInit() {
  }

}
