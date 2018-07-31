import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../core/auth/auth.service";
import {MessagesService} from "./messages-services/messages.service";
import {Message} from "./messages-models/message.model";
import {User} from "../core/user.model";
import {UsersService} from "../core/users.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  currentUserId = this.authService.getLoggedUserId();
  chatUserId: number;
  messages: Message[];
  user: User;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private messagesService: MessagesService,
    private usersService: UsersService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.chatUserId = +params["id"];
        this.user = this.usersService.getUserById(this.chatUserId);
        this.messages = this.messagesService.getMessages(this.messagesService.getChatByParticipants(this.currentUserId, this.chatUserId));
      }
    );
  }

}
