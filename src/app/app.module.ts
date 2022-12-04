import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { MonitorComponent } from './views/monitor/monitor.component';
import { StudentComponent } from './views/student/student.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {StudentModule} from "./views/student/student.module";
import {MatTabsModule} from "@angular/material/tabs";
import {StudentCardComponent} from "./components/student-card/student-card.component";
import {CourseCardComponent} from "./components/course-card/course-card.component";
import {MonitorCourseCardComponent} from "./components/monitor-course-card/monitor-course-card.component";
import {MatMenuModule} from "@angular/material/menu";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MonitorModule} from "./views/monitor/monitor.module";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MonitorComponent,
    StudentComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatSelectModule,
        MatCardModule,
        StudentModule,
        MatTabsModule,
        StudentCardComponent,
        CourseCardComponent,
        MonitorCourseCardComponent,
        MatMenuModule,
        HttpClientModule,
        ReactiveFormsModule,
        MonitorModule,

    ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
