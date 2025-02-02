import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  faXmark = faRectangleXmark;
  @ViewChild('sidebar', { static: true }) sidebarRef!: ElementRef<HTMLDivElement>;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  constructor(private render: Renderer2) { }

  ngOnInit() {

  }
  onDocumentClick(event: MouseEvent) {
    console.log('Click event:', event);
  }

  showSidebar() {

    const sidebar = this.sidebarRef.nativeElement;
    sidebar.style.display = 'flex';
    this.timeoutId = setTimeout(() => {
      sidebar.style.transform = 'translateX(0)';
    }, 10);
  }

  closeSidebar() {
    const sidebar = this.sidebarRef.nativeElement;

    sidebar.style.transform = 'translateX(100%)';
    this.timeoutId = setTimeout(() => {
      sidebar.style.display = 'none';
    }, 300);
  }
  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

}
