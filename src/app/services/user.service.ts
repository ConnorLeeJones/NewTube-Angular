import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../user/user";
import {environment} from "../../environments/environment";
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: User;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUser = new User();
  }

  public addUser(user) {
    console.log(user);
    this.http.post(environment.baseUrl + "/users", user).subscribe();
    this.router.navigate(['/login']);
  }


  public logIn(user : User){
    this.http.put<User>(environment.baseUrl + "/login/", user).subscribe(tempUser => {
      this.currentUser = tempUser;
      this.currentUser.password = null;
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

        this.router.navigate(['/videos']);
      }, error1 =>
      alert('Incorrect username or password.')
    );


  }


  public logOut(){
    // localStorage.setItem('currentUser', null);
    localStorage.removeItem('currentUser');

    this.currentUser = null;
    this.router.navigate(['/login']);
  }




}
