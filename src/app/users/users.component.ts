import {Component, DoCheck} from "@angular/core";
import {InviteService} from "../core/invite.service";
import {AuthService} from "../core/auth/auth.service";

enum MenuType {
  Friends = 0,
  Invites = 1,
  Search = 2
}

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements DoCheck {
  menuType = MenuType;
  menuTypeValue: MenuType;
  menuActive: number;
  numberOfInvites: number;

  constructor(private inviteService: InviteService, private authService: AuthService) {}

  ngDoCheck() {
    this.numberOfInvites = this.inviteService.getInvites(this.authService.getLoggedUserId()).length;
  }

  toggleValue(menuTypeValue: MenuType) {
    this.menuTypeValue = menuTypeValue;
    this.menuActive = menuTypeValue;
    if (menuTypeValue === 1) {
      this.inviteService.setActiveInviteStatus(true);
    } else {
      this.inviteService.setActiveInviteStatus(false);
    }
  }

}
