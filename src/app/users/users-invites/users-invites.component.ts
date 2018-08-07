import {Component, DoCheck} from "@angular/core";
import {InviteService} from "../../core/invite.service";
import {AuthService} from "../../core/auth/auth.service";
import {User} from "../../core/user.model";

@Component({
  selector: "app-users-invites",
  templateUrl: "./users-invites.component.html",
  styleUrls: ["./users-invites.component.css"]
})
export class UsersInvitesComponent implements DoCheck {
  inviteSenders: User[] = [];

  constructor(
    private inviteService: InviteService,
    private authService: AuthService) { }

  ngDoCheck() {
    this.inviteSenders = this.inviteService.getUsersFromInvites(this.authService.getLoggedUserId());
  }

  onInviteClick() {
    if (this.inviteService.getUsersFromInvites(this.authService.getLoggedUserId())) {
      this.inviteService.setActiveInviteStatus(true);
    }
  }
}
