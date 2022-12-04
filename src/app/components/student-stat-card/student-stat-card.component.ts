import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-student-stat-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule],
  templateUrl: './student-stat-card.component.html',
  styleUrls: ['./student-stat-card.component.scss']
})
export class StudentStatCardComponent {

}
