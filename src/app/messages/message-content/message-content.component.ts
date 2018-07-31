import {Component, Input} from "@angular/core";
import {Message} from "../messages-models/message.model";

@Component({
  selector: "app-message-content",
  templateUrl: "./message-content.component.html",
  styleUrls: ["./message-content.component.css"]
})
export class MessageContentComponent {
  @Input() messages: Message[];

  constructor() {}

}
