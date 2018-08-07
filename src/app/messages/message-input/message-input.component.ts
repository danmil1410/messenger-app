import {Component, Input} from "@angular/core";
import {MessagesService} from "../messages-services/messages.service";
import {FormControl} from "@angular/forms";
import {InviteService} from "../../core/invite.service";

@Component({
  selector: "app-message-input",
  templateUrl: "./message-input.component.html",
  styleUrls: ["./message-input.component.css"]
})
export class MessageInputComponent {
  @Input() startingUserId: number;
  @Input() chatUserId: number;

  messageInput = new FormControl("");

  constructor(private messagesService: MessagesService) { }

  onMessageSent() {
    if (this.messageInput.value) {
      this.messagesService.addMessageToChat(this.messageInput.value, [this.startingUserId, this.chatUserId]);
      this.messageInput.setValue("");
    }
  }

}
