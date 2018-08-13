import {Component, OnInit, DoCheck} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../core/auth/auth.service";
import {MessagesService} from "./messages-services/messages.service";
import {Message} from "./messages-models/message.model";
import {User} from "../core/user.model";
import {UsersService} from "../core/users.service";
import {MessagesUnreadService} from "./messages-services/messages-unread.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit, DoCheck {
  startingUserId = this.authService.getLoggedUserId();
  chatUserId: number;
  messages: Message[];
  user: User;
  areUsersFriends: boolean;

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private messagesService: MessagesService,
              private usersService: UsersService,
              private messagesUnreadService: MessagesUnreadService) { }

  ngDoCheck() {
    this.areUsersFriends = this.usersService.areUsersFriends(this.startingUserId, this.chatUserId);

    if (this.areUsersFriends) {
      this.messages = this.messagesService.getMessages
      (this.messagesService.getChatByParticipants([this.startingUserId, this.chatUserId]));
    }
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.chatUserId = +params["id"];
        this.user = this.usersService.getUserById(this.chatUserId);
        this.messagesUnreadService.deleteUnreadMessages([this.startingUserId, this.chatUserId]);
      }
    );
  }

}
