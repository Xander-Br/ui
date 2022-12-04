import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStatCardComponent } from './student-stat-card.component';

describe('StudentStatCardComponent', () => {
  let component: StudentStatCardComponent;
  let fixture: ComponentFixture<StudentStatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StudentStatCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentStatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
