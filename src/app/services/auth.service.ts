import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../dto/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    let loginRequest = {
      email: email,
      password: password
    }
    return this.http.post<any>('http://localhost:8085/api/v1/auth/login/user', loginRequest)
  }

  //Save user in local storage
  saveUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logOut() {
    localStorage.removeItem('user');
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('user');
    return !(user === null)
  }
}
