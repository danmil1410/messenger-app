import {Component, OnInit} from "@angular/core";
import {User} from "../../core/user.model";
import {UsersService} from "../../core/users.service";
import {InviteService} from "../../core/invite.service";

@Component({
  selector: "app-users-search",
  templateUrl: "./users-search.component.html",
  styleUrls: ["./users-search.component.css"]
})
export class UsersSearchComponent implements OnInit {
  users: User[] = [];
  searchResult = "";

  constructor(private usersService: UsersService, private inviteService: InviteService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

  keyIsPressed(event: any) {
    this.searchResult = event.target.value.toLowerCase();
  }

  isResultAndUserTheSame(firstName: string, lastName: string) {
    return firstName.toLowerCase().includes(this.searchResult) || lastName.toLowerCase().includes(this.searchResult);
  }

  onSearchClick() {
    this.inviteService.setActiveInviteStatus(false);
  }

}
