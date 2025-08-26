import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    let username = this.userService.getUserName();
    if (!username) {
      username = window.prompt("Please enter your name:") || "User";
      this.userService.setUserName(username);
    }
  }
}
