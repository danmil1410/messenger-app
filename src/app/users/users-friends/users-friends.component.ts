import {Component, OnInit} from "@angular/core";
import {UsersService} from "../../core/users.service";
import {User} from "../../core/user.model";
import {AuthService} from "../../core/auth/auth.service";
import {InviteService} from "../../core/invite.service";

@Component({
  selector: "app-users-friends",
  templateUrl: "./users-friends.component.html",
  styleUrls: ["./users-friends.component.css"]
})
export class UsersFriendsComponent implements OnInit {
  friends: User[] = [];

  constructor(private usersService: UsersService, private authService: AuthService, private inviteService: InviteService) { }

  ngOnInit() {
    this.friends = UsersService.getFriends(this.authService.getLoggedUser());
  }

  onFriendsClick() {
    this.inviteService.setActiveInviteStatus(false);
  }

}
