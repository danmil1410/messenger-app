import {Component, DoCheck, OnInit} from "@angular/core";
import {InviteService} from "../core/invite.service";
import {AuthService} from "../core/auth/auth.service";
import {MessagesUnreadService} from "../messages/messages-services/messages-unread.service";

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
export class UsersComponent implements OnInit, DoCheck {
  menuType = MenuType;
  menuTypeValue: MenuType;
  menuActive: number;
  numberOfInvites: number;
  numberOfUnreadMessages: number;

  constructor(
    private inviteService: InviteService,
    private authService: AuthService,
    private messagesUnreadService: MessagesUnreadService) {}

  ngOnInit() {
    // this.numberOfUnreadMessages = this.messagesUnreadService.getNumberOfUnreadMessages();
  }

  ngDoCheck() {
    this.numberOfUnreadMessages = this.messagesUnreadService.getNumberOfUnreadMessages();
    this.numberOfInvites = this.inviteService.getUsersFromInvites(this.authService.getLoggedUserId()).length;
  }

  toggleValue(menuTypeValue: MenuType) {
    this.menuTypeValue = menuTypeValue;
    this.menuActive = menuTypeValue;
  }

}
