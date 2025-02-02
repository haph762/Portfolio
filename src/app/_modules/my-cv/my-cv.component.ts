import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollingGotoTopComponent } from '../scrolling-goto-top/scrolling-goto-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScrollingGotoTopComponent, RouterLink],
  templateUrl: './my-cv.component.html',
  styleUrl: './my-cv.component.scss'
})
export class MyCvComponent {

}
