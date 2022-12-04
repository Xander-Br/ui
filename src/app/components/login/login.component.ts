import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Student, User} from "../../dto/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl('johndoe@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('123456', [Validators.required, Validators.minLength(6)])
  });
  showLoginForm: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  login(){
    this.authService.login(this.form.value.email, this.form.value.password).subscribe(res => {
      this.authService.saveUser(res);

      let user: Student = res;
      console.log(user.licences.length <= 0)
      if(user.licences.length <= 0){
        this.router.navigate(['/student/add-licence'])
      }else {
        this.router.navigate(['/student']);
      }

    })
  }
}
