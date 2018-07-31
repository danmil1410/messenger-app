import {Component, Input} from "@angular/core";
import {User} from "../../core/user.model";

@Component({
  selector: "app-message-title",
  templateUrl: "./message-title.component.html",
  styleUrls: ["./message-title.component.css"]
})
export class MessageTitleComponent {
  @Input() user: User;

  constructor() { }

}
