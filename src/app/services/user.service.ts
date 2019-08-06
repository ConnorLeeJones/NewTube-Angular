import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../user/user";

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
    this.http.post("https://video-new-tube.herokuapp.com/users", user).subscribe();
  }


  public logIn(user : User){

    console.log(user.userId);
    console.log(user.password);
    console.log(this.currentUser);
    let password = user.password;

    this.http.put<User>("https://video-new-tube.herokuapp.com/login/", user).subscribe(user =>
    {
      if (user.password === password){
        this.currentUser = user;
        console.log('it worked')
      } else {
        this.currentUser = null;
        console.log('Wrong username or password');
      }
    });



  }





}
