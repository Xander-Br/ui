import {Component, OnInit} from '@angular/core';
import {SchoolService} from "../../../services/school.service";
import {School} from "../../../dto/school";

@Component({
  selector: 'app-school-menu',
  templateUrl: './school-menu.component.html',
  styleUrls: ['./school-menu.component.scss']
})
export class SchoolMenuComponent implements OnInit {

  schools: School[];

  constructor(private schoolService: SchoolService) {

  }

  ngOnInit(): void {
    this.schoolService.getSchools().subscribe(schools => {
      this.schools = schools;
    });
  }


}
