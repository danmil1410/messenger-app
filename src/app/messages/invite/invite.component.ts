import {Component, DoCheck, Input} from "@angular/core";
import {InviteService} from "../../core/invite.service";
import {Invite} from "../../core/invite.model";

@Component({
  selector: "app-invite",
  templateUrl: "./invite.component.html",
  styleUrls: ["./invite.component.css"]
})
export class InviteComponent implements DoCheck {
  @Input() startingUserId: number;
  @Input() chatUserId: number;
  inviteIsActive: boolean;
  activeInvite: Invite;

  constructor(private inviteService: InviteService) { }

  ngDoCheck() {
    this.inviteIsActive = this.inviteService.getActiveInviteStatus();
    this.activeInvite = this.inviteService.getActiveInvite(this.startingUserId, this.chatUserId);
  }

  areUsersInInvite() {
    if (this.activeInvite) {
      return this.startingUserId === this.activeInvite.senderId && this.chatUserId === this.activeInvite.recipientId;
    } else {
      return false;
    }
  }

  onInviteSent() {
    this.inviteService.onInviteSent(this.startingUserId, this.chatUserId);
  }

  onInviteAccept() {
    this.inviteService.onInviteAccept(this.startingUserId, this.chatUserId);
  }

  onInviteReject() {
    this.inviteService.onInviteReject(this.startingUserId, this.chatUserId);
  }

}
