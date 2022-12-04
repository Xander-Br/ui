import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../dto/user";
import {School} from "../dto/school";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  getStudents(schoolId: number) {
    return this.http.get<Student>('http://localhost:8085/api/v1/student/all/' + schoolId);
  }

  getSchools() {
    return this.http.get<School[]>('http://localhost:8085/api/v1/school/all');
  }
}
