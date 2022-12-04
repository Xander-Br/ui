import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {School} from "../../dto/school";
import {StudentService} from "../../services/student.service";
import {Student} from "../../dto/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-school-card',
  standalone: true,
    imports: [CommonModule, MatCardModule],
  templateUrl: './school-card.component.html',
  styleUrls: ['./school-card.component.scss']
})
export class SchoolCardComponent {

  @Input() school: School;

  constructor(private studentService: StudentService, private router: Router) {
  }

  joinSchool() {
    let user = JSON.parse(localStorage.getItem('user'));
    this.studentService.joinSchool(this.school.id, user.id).subscribe(
      data => {
        if(data == true) {
          this.router.navigate(['/student']);
        }
      }
    );
  }
}
