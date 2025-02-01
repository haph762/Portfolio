import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollingGotoTopComponent } from "./views/scrolling-goto-top/scrolling-goto-top.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScrollingGotoTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
