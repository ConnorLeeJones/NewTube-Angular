import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "./user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: User = new User();

  constructor(private service: UserService) { }

  ngOnInit() {

  }

  public addUser() {
    console.log(this.user);
    this.service.addUser(this.user);
  }
}
