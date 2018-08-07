import {Injectable} from "@angular/core";
import {Invite} from "./invite.model";
import {UsersService} from "./users.service";
import {MatSnackBar} from "@angular/material";
import {User} from "./user.model";

@Injectable({
  providedIn: "root"
})
export class InviteService {
  private invites: Invite[] = [];
  private inviteIsActive = false;

  constructor(private usersService: UsersService, private snackBar: MatSnackBar) { }

  getActiveInvite(senderId: number, recipientId: number) {
    return this.invites.find(invite => invite.recipientId === recipientId && invite.senderId === senderId);
  }

  getActiveInviteStatus() {
    return this.inviteIsActive;
  }

  getUsersFromInvites(recipientId: number): User[] {
    // Searching invites array for users matching the address id
    const senders = this.invites.filter(item => item.recipientId === recipientId);
    return senders.map(invite => this.usersService.getUserById(invite.senderId));
  }

  setActiveInviteStatus(status: boolean) {
    this.inviteIsActive = status;
  }

  onInviteSent(startingUserId: number, chatUserId: number) {
    this.addInvite(startingUserId, chatUserId);

    this.snackBar.open("Invite has been sent!", "Dismiss", {
      duration: 3000,
    });
  }

  onInviteAccept(startingUserId: number, chatUserId: number) {
    this.inviteIsActive = false;
    this.usersService.addFriends(startingUserId, chatUserId);
    this.deleteInvite(startingUserId, chatUserId);
  }

  onInviteReject(startingUserId: number, chatUserId: number) {
    this.inviteIsActive = false;
    this.deleteInvite(startingUserId, chatUserId);
  }

  private addInvite(senderId: number, recipientId: number) {
    this.invites.push(new Invite(senderId, recipientId));
  }

  private deleteInvite(recipientId: number, senderId: number) {
    const inviteIndex = this.invites.findIndex(invite => invite.senderId === senderId && invite.recipientId === recipientId);
    this.invites.splice(inviteIndex, 1);
  }

}
