import {Component, OnInit} from "@angular/core";
import {UsersService} from "../../core/users.service";
import {User} from "../../core/user.model";
import {AuthService} from "../../core/auth/auth.service";

@Component({
  selector: "app-users-friends",
  templateUrl: "./users-friends.component.html",
  styleUrls: ["./users-friends.component.css"]
})
export class UsersFriendsComponent implements OnInit {
  friends: User[] = [];

  constructor(private usersService: UsersService, private authService: AuthService) { }

  ngOnInit() {
    this.friends = this.usersService.getFriends(this.authService.getLoggedUser());
  }

}
