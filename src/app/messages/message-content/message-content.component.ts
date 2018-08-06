import {Component, Input} from "@angular/core";
import {Message} from "../messages-models/message.model";

@Component({
  selector: "app-message-content",
  templateUrl: "./message-content.component.html",
  styleUrls: ["./message-content.component.css"]
})
export class MessageContentComponent {
  @Input() messages: Message[];
  @Input() startingUserId: number;

  constructor() {}

  checkIfShouldShowSeparator(messageIndex: number) {
    const millisecondsForSeparator = 60000;

    if (messageIndex === 0) {
      return true;
    } else {
      const firstMessageDate = this.messages[messageIndex - 1].date.getTime();
      const secondMessageDate = this.messages[messageIndex].date.getTime();

      if ((secondMessageDate - firstMessageDate) > millisecondsForSeparator) {
        return true;
      }
    }
  }

}
