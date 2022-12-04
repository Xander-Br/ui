import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StudentComponent} from "./student.component";
import {CourseHistoryComponent} from "./course-history/course-history.component";
import {AppModule} from "../../app.module";
import {CourseCardComponent} from "../../components/course-card/course-card.component";
import { SchoolMenuComponent } from './school-menu/school-menu.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {SchoolCardComponent} from "../../components/school-card/school-card.component";
import { HomeComponent } from './home/home.component';
import {StudentStatCardComponent} from "../../components/student-stat-card/student-stat-card.component";
import {MatTabsModule} from "@angular/material/tabs";
import { UpcomingCourseComponent } from './upcoming-course/upcoming-course.component';
import { AddLicenceComponent } from './add-licence/add-licence.component';
import {SchoolGuard} from "../../guards/school.guard";
import {NgxQRCodeModule} from "@techiediaries/ngx-qrcode";




const  routes: Routes = [
  {path: '', component: StudentComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'home', canActivate: [SchoolGuard], component: HomeComponent},
      {path: 'course-history',canActivate: [SchoolGuard], component: CourseHistoryComponent},
      {path: 'school-menu', component: SchoolMenuComponent},
      {path: 'add-licence', component: AddLicenceComponent}
]}];

@NgModule({
  declarations: [
    CourseHistoryComponent,
    SchoolMenuComponent,
    HomeComponent,
    UpcomingCourseComponent,
    AddLicenceComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CourseCardComponent,
    MatCardModule,
    MatButtonModule,
    SchoolCardComponent,
    StudentStatCardComponent,
    MatTabsModule,
    NgxQRCodeModule,


  ],
  exports: [RouterModule, CourseHistoryComponent,]
})
export class StudentModule { }
