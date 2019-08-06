import { Component, OnInit } from '@angular/core';
import {User} from "../user/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public user: User = new User();

  constructor(private service: UserService) { }

  ngOnInit() {

  }

  public addUser() {
    this.service.addUser(this.user);
  }


  onSubmit() {
    this.service.logIn(this.user);
  }
}
