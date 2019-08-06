import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-logged-in',
  templateUrl: './not-logged-in.component.html',
  styleUrls: ['./not-logged-in.component.css']
})
export class NotLoggedInComponent implements OnInit {

  warning = '(Please login to upload videos or post comments)';

  constructor() { }

  ngOnInit() {
  }

}
