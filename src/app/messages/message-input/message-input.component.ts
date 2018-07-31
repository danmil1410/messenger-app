import {Component, Input} from "@angular/core";
import {MessagesService} from "../messages-services/messages.service";
import {Form, FormControl} from "@angular/forms";

@Component({
  selector: "app-message-input",
  templateUrl: "./message-input.component.html",
  styleUrls: ["./message-input.component.css"]
})
export class MessageInputComponent {
  messageInput = new FormControl("");
  @Input() currentUserId: number;
  @Input() chatUserId: number;

  constructor(private messagesService: MessagesService) { }

  onMessageSent() {
    if (this.messageInput.value) {
      this.messagesService.addMessageToChat(this.messageInput.value, this.currentUserId, this.chatUserId);
      this.messageInput.setValue("");
    }
  }

}
