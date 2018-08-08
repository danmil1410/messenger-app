import {Injectable} from "@angular/core";
import {MessagesService} from "./messages.service";
import {AuthService} from "../../core/auth/auth.service";
import {Message} from "../messages-models/message.model";

@Injectable({
  providedIn: "root"
})
export class MessagesUnreadService {
  private unreadMessages: Message[] = [];

  constructor(private messagesService: MessagesService, private authService: AuthService) {
    this.messagesService.messageIsSent.subscribe(
      message => this.unreadMessages.push(message)
    );
  }

  getNumberOfUnreadMessages(): number {
    // Return the array length - array contains messages addressed to current user
    return this.unreadMessages.filter(message => message.participantIds[1] === this.authService.getLoggedUserId()).length;
  }

  deleteUnreadMessages(userIds: number[]): void {
    if (this.unreadMessages) {
      this.unreadMessages = this.unreadMessages.filter(message => this.areArraysNotEqual(message.participantIds, userIds));
    }
  }

  private areArraysNotEqual(messageUsersArray: number[], userIdsArray: number[]): boolean {
    return messageUsersArray[0] !== userIdsArray[1] && messageUsersArray[1] !== messageUsersArray[0];
  }
}
