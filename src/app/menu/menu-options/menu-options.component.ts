import {Component, Input, OnInit} from "@angular/core";
import {User} from "../../core/user.model";
import {AuthService} from "../../core/auth/auth.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material";
import {OptionsLogoutComponent} from "./options-logout/options-logout.component";
import {OptionsUsernameComponent} from "./options-username/options-username.component";

@Component({
  selector: "app-menu-options",
  templateUrl: "./menu-options.component.html",
  styleUrls: ["./menu-options.component.css"]
})
export class MenuOptionsComponent implements OnInit {

  optionsChosen = false;
  activeUser: User;

  constructor(private authService: AuthService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.activeUser = this.authService.getLoggedUser();
  }

  onLogout() {
    this.dialog.open(OptionsLogoutComponent, {
      height: "175px",
      width: "275px"
    });
  }

  onOptionsClick() {
    this.optionsChosen = !this.optionsChosen;
  }

  openUserNameDialog() {
    const userDialogRef = this.dialog.open(OptionsUsernameComponent, {
      height: "350px",
      width: "450px"
    });

    userDialogRef.afterClosed().subscribe(result => {
      this.authService.setLoggedUser(result.firstName.value, result.lastName.value);
    });
  }

}
