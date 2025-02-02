import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateCustomizePipe } from '../_core/pipes/date-customize.pipe';
import { ExportPipesModule } from '../_core/pipes/export-pipes.module';
import { DateCustomize2Pipe } from '../_core/pipes/date-customize2.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, ExportPipesModule, DateCustomize2Pipe],
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html',
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent implements OnInit {

  today: Date = new Date();
  constructor() { }

  ngOnInit() {
    this.today = new Date();
  }

}
