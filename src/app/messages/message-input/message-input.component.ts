import {Component, Input, DoCheck} from "@angular/core";
import {MessagesService} from "../messages-services/messages.service";
import {FormControl} from "@angular/forms";
import {InviteService} from "../../core/invite.service";
import {UsersService} from "../../core/users.service";

@Component({
  selector: "app-message-input",
  templateUrl: "./message-input.component.html",
  styleUrls: ["./message-input.component.css"]
})
export class MessageInputComponent implements DoCheck {
  @Input() startingUserId: number;
  @Input() chatUserId: number;

  messageInput = new FormControl("");
  invitesActive: boolean;
  userHasToBeInvited: boolean;

  constructor(
    private messagesService: MessagesService,
    private inviteService: InviteService,
    private usersService: UsersService) { }

  ngDoCheck() {
    this.invitesActive = this.inviteService.getActiveInviteStatus();
    this.userHasToBeInvited = this.inviteService.getUserInviteStatus();
    // console.log(this.invitesActive, this.userHasToBeInvited, this.areUsersFriends());
  }

  onMessageSent() {
    if (this.messageInput.value) {
      this.messagesService.addMessageToChat(this.messageInput.value, [this.startingUserId, this.chatUserId]);
      this.messageInput.setValue("");
    }
  }

  onInviteSent() {
    this.inviteService.onInviteSent(this.startingUserId, this.chatUserId);
    console.log(this.startingUserId, this.chatUserId);
  }

  onInviteAccept() {
    this.inviteService.onInviteAccept(this.startingUserId, this.chatUserId);
  }

  onInviteReject() {
    this.inviteService.onInviteReject(this.startingUserId, this.chatUserId);
  }

  areUsersFriends() {
    return this.usersService.areUsersFriends(this.startingUserId, this.chatUserId);
  }

}
