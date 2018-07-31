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

  usersExist(currentUserId: number, chatUserId: number) {
    return currentUserId === this.usersService.getUserById(currentUserId).id
      && chatUserId === this.usersService.getUserById(chatUserId).id;
  }

  usersIdentical(chat: Chat, currentUserId: number, chatUserId: number) {
    return (chat.participantIds[0] === currentUserId
      && chat.participantIds[1] === chatUserId) || (chat.participantIds[1] === currentUserId
      && chat.participantIds[0] === chatUserId);
  }

  getChatByParticipants(currentUserId: number, chatUserId: number): Chat {
    // Return chat if users exist and they matches with database users
    if (this.usersExist(currentUserId, chatUserId)) {
      for (const chat of this.chats) {
        if (this.usersIdentical(chat, currentUserId, chatUserId)) {
          return chat;
        }
      }
      // Create a new chat if it doesn't exist
      const newChat = new Chat([currentUserId, chatUserId], []);
      this.chats.push(newChat);
      return newChat;
    }
  }

  addMessageToChat(messageValue: string, currentUserId: number, chatUserId: number) {
    // Creates a new message
    const message = new Message(currentUserId, messageValue);

    // If chat exists, add new message
    if (this.chats.length) {
      for (const chat of this.chats) {
        if (this.usersIdentical(chat, currentUserId, chatUserId)) {
          chat.messages.push(message);
          return;
        }
      }
    }

    // Create a new chat and adds new message
    const newChat = new Chat([currentUserId, chatUserId], []);
    newChat.messages.push(message);
    this.chats.push(newChat);
  }

  getMessages(currentChat: Chat) {
    for (const chat of this.chats) {
      if (chat === currentChat) {
        return chat.messages;
      }
    }
  }

}
