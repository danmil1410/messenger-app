import {Component, OnInit} from "@angular/core";
import {UsersService} from "../core/users.service";
import {AuthService} from "../core/auth/auth.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users = [];
  loggedUserId: number;

  constructor(private usersService: UsersService, private authService: AuthService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
    this.loggedUserId = this.authService.getLoggedUserId();
  }

}
