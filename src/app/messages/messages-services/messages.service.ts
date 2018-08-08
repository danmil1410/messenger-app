import {EventEmitter, Injectable} from "@angular/core";
import {Chat} from "../messages-models/chat.model";
import {UsersService} from "../../core/users.service";
import {Message} from "../messages-models/message.model";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  private chats: Chat[] = [];
  messageIsSent: EventEmitter<Message> = new EventEmitter();

  constructor(private usersService: UsersService) {}

  getMessages(currentChat: Chat): Message[] {
    if (currentChat) {
      return this.chats.find(item => item === currentChat).messages;
    }
  }

  getChatByParticipants(userIds: number[]): Chat {
    // Return chat if users exist and they matches with database users
    if (this.areUserExists(userIds)) {
      const usersChat = this.chats.find(item => this.areUsersInChat(item, userIds) === true);

      if (usersChat) {
        return usersChat;
      }
      // Create a new chat if it doesn't exist
      const newChat = new Chat(userIds, []);
      this.chats.push(newChat);
      return newChat;
    }
  }

  addMessageToChat(messageValue: string, userIds: number[]) {
    // Creates a new message
    const message = new Message(userIds, messageValue);
    // If chat exists, add new message
    if (this.chats.length) {
      const usersChat = this.chats.find(item => this.areUsersInChat(item, userIds) === true);

      if (usersChat) {
        this.messageIsSent.emit(message);
        usersChat.messages.push(message);
        return;
      }
    }
    // Create a new chat and adds new message
    const newChat = new Chat(userIds, []);
    this.messageIsSent.emit(message);
    newChat.messages.push(message);
    this.chats.push(newChat);
  }

  private areUserExists(userId: number[]): boolean {
    return userId.every(elem => elem === this.usersService.getUserById(elem).id);
  }

  private areUsersInChat(chat: Chat, userId: number[]): boolean {
    return userId.every(elem => chat.participantIds.includes(elem));
  }

}
