import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "../dto/course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get<Course[]>("http://localhost:8085/api/v1/course/all/1");
  }

  createCourse(course: CreateCourse) {
    return this.http.post("http://localhost:8085/api/v1/course/create", course);
  }

}

export class CreateCourse {
  studentId: number;
  monitorId: number;
  course: Course;
}
