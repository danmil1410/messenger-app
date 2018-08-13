import {AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {Message} from "../messages-models/message.model";

@Component({
  selector: "app-message-content",
  templateUrl: "./message-content.component.html",
  styleUrls: ["./message-content.component.css"]
})
export class MessageContentComponent implements OnInit, AfterViewChecked{
  @Input() messages: Message[];
  @Input() startingUserId: number;
  @ViewChild("msgContainer") msgContainer: ElementRef;

  constructor() {}

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.msgContainer.nativeElement.scrollTop = this.msgContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  checkIfShouldShowSeparator(messageIndex: number) {
    const millisecondsForSeparator = 300000;

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
