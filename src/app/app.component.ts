import {Component, OnInit} from '@angular/core';
import {User} from "./user/user";
import {UserService} from "./services/user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to NewTube!';
  user = new User();
  currentUser: User;


  constructor(private userService: UserService) {}



  ngOnInit() {
    this.currentUser = this.userService.currentUser;

  }

  logOut(){
    this.userService.logOut();
  }

}
