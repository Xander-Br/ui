import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {Student} from "../../dto/user";

@Component({
  standalone: true,
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  imports: [
    MatCardModule
  ],
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {

  @Input() student: Student;

}
