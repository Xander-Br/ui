import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorCourseCardComponent } from './monitor-course-card.component';

describe('MonitorCourseCardComponent', () => {
  let component: MonitorCourseCardComponent;
  let fixture: ComponentFixture<MonitorCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MonitorCourseCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
