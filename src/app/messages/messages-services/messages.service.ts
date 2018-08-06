import {Injectable} from "@angular/core";
import {Chat} from "../messages-models/chat.model";
import {UsersService} from "../../core/users.service";
import {Message} from "../messages-models/message.model";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  private chats: Chat[] = [];

  constructor(private usersService: UsersService) {}

  private areUserExists(userId: number[]) {
    return userId.every(elem => elem === this.usersService.getUserById(elem).id);
  }

  private areUsersInChat(chat: Chat, userId: number[]) {
    return userId.every(elem => chat.participantIds.includes(elem));
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
    const message = new Message(userIds[0], messageValue);

    // If chat exists, add new message
    if (this.chats.length) {
      const usersChat = this.chats.find(item => this.areUsersInChat(item, userIds) === true);

      if (usersChat) {
        usersChat.messages.push(message);
        return;
      }
    }

    // Create a new chat and adds new message
    const newChat = new Chat(userIds, []);
    newChat.messages.push(message);
    this.chats.push(newChat);
  }

  getMessages(currentChat: Chat) {
    return this.chats.find(item => item === currentChat).messages;
  }

}
