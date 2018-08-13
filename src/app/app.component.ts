import {Component, OnInit} from "@angular/core";
import {AuthService} from "./core/auth/auth.service";
import {User} from "./core/user.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Messenger App";
  activeUser: User;
  isLogged = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLogged = this.authService.getLoggingStatus();
    this.activeUser = this.authService.getLoggedUser();
  }
}
