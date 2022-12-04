import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MonitorComponent} from "./monitor.component";
import { CreateClassComponent } from './create-class/create-class.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { CalendarComponent } from './calendar/calendar.component';
import {ScheduleAllModule} from "@syncfusion/ej2-angular-schedule";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import { MonitorStatsCardComponent } from './monitor-stats-card/monitor-stats-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";


const routes: Routes = [
  {path: '', component: MonitorComponent, children:[
      {path: 'home', redirectTo: ''},
      {path: 'calendar', component: CalendarComponent},
      {path: 'course-overview/:id', component: CourseOverviewComponent},
    ]
    },

  ]

@NgModule({
  declarations: [
    CreateClassComponent,
    CourseOverviewComponent,
    CalendarComponent,
    MonitorStatsCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    ScheduleAllModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
  ],
  exports: [RouterModule, MatDialogModule, MatNativeDateModule, MonitorStatsCardComponent]
})
export class MonitorModule { }
