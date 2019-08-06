import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../user/user";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: User;

  constructor(private http: HttpClient) {
    this.currentUser = new User();
  }

  public addUser(user) {
    console.log(user);
    this.http.post("http://localhost:8080/users", user).subscribe();
  }


  public logIn(user : User){

    this.http.put<User>("http://localhost:8080/login/", user).subscribe(tempUser =>
    {
      this.currentUser = tempUser;
      this.currentUser.password = null;
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    });



  }





}
