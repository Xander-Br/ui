import {Component, OnInit} from '@angular/core';
import {Student} from "../../dto/user";
import {StudentService} from "../../services/student.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateClassComponent} from "./create-class/create-class.component";
import {Course} from "../../dto/course";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {
  students: Student[];
  courses: Course[];

  constructor(private studentService: StudentService, public dialog: MatDialog,
              private courseService: CourseService) {


  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateClassComponent,{
      width: '90%',
      height: '70%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {
    this.studentService.getStudentsByClassId(1).subscribe(r => {

      this.students = r;

    });
    this.courseService.getCourses().subscribe(r => {
      console.log(r)
      this.courses = r;
    });
  }


}
