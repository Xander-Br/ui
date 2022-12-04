import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {Course} from "../../dto/course";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-monitor-course-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, RouterLink],
  templateUrl: './monitor-course-card.component.html',
  styleUrls: ['./monitor-course-card.component.scss']
})
export class MonitorCourseCardComponent {

  @Input() course: Course;

}
