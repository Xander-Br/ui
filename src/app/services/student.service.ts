import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../dto/user";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  joinSchool(schoolId: number, studentId: number) {
    return this.http.post<boolean>('http://localhost:8085/api/v1/student/join/' + schoolId, studentId);
  }


  getStudent(id: number) {
    return this.http.get<Student>('http://localhost:8085/api/v1/student/' + id);
  }

  getStudentsByClassId(id: number) {
    return this.http.get<Student[]>('http://localhost:8085/api/v1/student/all/' + id);
  }
}
