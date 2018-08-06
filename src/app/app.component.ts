import {Component, OnInit} from "@angular/core";
import {AuthService} from "./core/auth/auth.service";
import {User} from "./core/user.model";
import {Router} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Messenger App";
  isLogged = false;
  activeUser: User;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isLogged = this.authService.getLoggingStatus();
    this.activeUser = this.authService.getLoggedUser();
  }
}
