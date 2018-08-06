import {Injectable} from "@angular/core";
import {Invite} from "./invite.model";
import {UsersService} from "./users.service";
import {User} from "./user.model";
import {MatSnackBar} from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class InviteService {
  private invites: Invite[] = [];
  private invitesActive = false;
  private userHasToBeInvited = true;

  constructor(private usersService: UsersService, private snackBar: MatSnackBar) { }

  addInvite(senderId: number, addressId: number) {
    this.invites.push(new Invite(senderId, addressId));
  }

  getInvites(addressId: number) {
    const inviteSenders: User[] = [];
    // Searching invites array for invites matching the address id and push them to an array
    const senders = this.invites.filter(item => item.addressId === addressId);

    for (const sender of senders) {
      inviteSenders.push(this.usersService.getUserById(sender.senderId));
    }

    return inviteSenders;
  }

  deleteInvite(addressId: number, senderId: number) {
    const currentInvite = this.invites.find(item => item.addressId === addressId && item.senderId === senderId);

    for (const invite of this.invites) {
      if (invite === currentInvite) {
        this.invites.splice(this.invites.indexOf(invite), 1);
      }
    }
  }

  onInviteAccept(startingUserId: number, chatUserId: number) {
    this.invitesActive = false;
    this.userHasToBeInvited = false;
    this.usersService.addFriends(startingUserId, chatUserId);
    this.deleteInvite(startingUserId, chatUserId);
  }

  onInviteReject(startingUserId: number, chatUserId: number) {
    this.invitesActive = false;
    this.userHasToBeInvited = true;
    this.deleteInvite(startingUserId, chatUserId);
  }

  onInviteSent(startingUserId: number, chatUserId: number) {
    this.addInvite(startingUserId, chatUserId);

    this.snackBar.open("Invite has been sent!", "Dismiss", {
      duration: 3000,
    });
  }

  getActiveInviteStatus() {
    return this.invitesActive;
  }

  setActiveInviteStatus(status: boolean) {
    this.invitesActive = status;
  }

  getUserInviteStatus() {
    return this.userHasToBeInvited;
  }

}
