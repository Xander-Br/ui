import {Component, OnInit} from '@angular/core';
import {Course} from "../../../dto/course";
import {CourseService} from "../../../services/course.service";

@Component({
  selector: 'app-upcoming-course',
  templateUrl: './upcoming-course.component.html',
  styleUrls: ['./upcoming-course.component.scss']
})
export class UpcomingCourseComponent implements OnInit{
  courses: Course[];

  constructor(private courseService:CourseService) {

  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
    });
  }

}
