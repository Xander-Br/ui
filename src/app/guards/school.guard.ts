import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {SchoolService} from "../services/school.service";
import {StudentService} from "../services/student.service";

@Injectable({
  providedIn: 'root'
})
export class SchoolGuard implements CanActivate {
  constructor(private studentService: StudentService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user = JSON.parse(localStorage.getItem('user'));
    this.studentService.getStudent(user.id).subscribe(student => {
        if (student.school == null || student.school == undefined) {
          this.router.navigate(['student/school-menu']);
          return false;
        }

        return true;
      }
    );
    return true;
  }
}
