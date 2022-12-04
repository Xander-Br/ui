import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {Course} from "../../dto/course";

@Component({
  selector: 'app-course-card',
  standalone: true,
  templateUrl: './course-card.component.html',
  imports: [
    MatCardModule
  ],
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

  @Input() course: Course;

}
