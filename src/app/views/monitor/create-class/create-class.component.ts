import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Student} from "../../../dto/user";
import {MonitorComponent} from "../monitor.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../../services/student.service";
import {CourseService, CreateCourse} from "../../../services/course.service";

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {
  createCourseForm: FormGroup = new FormGroup({
    date: new FormControl('', [Validators.required]),
    hour: new FormControl('', [Validators.required]),
    minute: new FormControl('', [Validators.required]),
    student: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
  });
  durations: number[] = [45, 50, 55, 60];

  students: Student[];

  constructor(
    public dialogRef: MatDialogRef<MonitorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    private studentService: StudentService,
    private courseService: CourseService
  ) {

  }

  ngOnInit(): void {
    this.studentService.getStudentsByClassId(1).subscribe(r => {

      this.students = r;

    });
  }

  createCourse() {
    var course: CreateCourse = {
      studentId: this.createCourseForm.get('student').value.id,
      monitorId: 1,
      course: {
        startAt: this.createCourseForm.get('hour').value + ':' + this.createCourseForm.get('minute').value,
        date: (this.createCourseForm.get('date').value as Date).toDateString(),
        duration: this.createCourseForm.get('duration').value
      }
    }
    console.log(course);
    this.courseService.createCourse(course).subscribe(r => {
      this.dialogRef.close();
    });
  }
}
