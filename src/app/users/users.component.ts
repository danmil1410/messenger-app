import {Component, DoCheck} from "@angular/core";
import {InviteService} from "../core/invite.service";
import {AuthService} from "../core/auth/auth.service";
import {MessagesUnreadService} from "../messages/messages-services/messages-unread.service";
import {Title} from "@angular/platform-browser";

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
  numberOfUnreadMessages: number;

  constructor(private inviteService: InviteService,
              private authService: AuthService,
              private messagesUnreadService: MessagesUnreadService,
              private titleService: Title) {
  }

  ngDoCheck() {
    this.numberOfUnreadMessages = this.messagesUnreadService.getNumberOfUnreadMessages();
    this.numberOfInvites = this.inviteService.getUsersFromInvites(this.authService.getLoggedUserId()).length;
    if (this.numberOfUnreadMessages > 0) {
      this.titleService.setTitle("(" + this.numberOfUnreadMessages.toString() + ")" + " You've got some messages!");
    } else {
      this.titleService.setTitle("Messenger");
    }
  }

  toggleValue(menuTypeValue: MenuType) {
    this.menuTypeValue = menuTypeValue;
    this.menuActive = menuTypeValue;
  }

}
