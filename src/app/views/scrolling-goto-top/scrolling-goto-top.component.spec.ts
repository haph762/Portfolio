import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingGotoTopComponent } from './scrolling-goto-top.component';

describe('ScrollingGotoTopComponent', () => {
  let component: ScrollingGotoTopComponent;
  let fixture: ComponentFixture<ScrollingGotoTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollingGotoTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollingGotoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
