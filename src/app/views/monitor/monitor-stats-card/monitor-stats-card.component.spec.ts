import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorStatsCardComponent } from './monitor-stats-card.component';

describe('MonitorStatsCardComponent', () => {
  let component: MonitorStatsCardComponent;
  let fixture: ComponentFixture<MonitorStatsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorStatsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorStatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
