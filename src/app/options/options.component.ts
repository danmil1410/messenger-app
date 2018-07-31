import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../core/auth/auth.service";

import {MatDialog} from "@angular/material";
import {User} from "../core/user.model";
import {OptionsUsernameComponent} from "./options-username/options-username.component";
import {OptionsLogoutComponent} from "./options-logout/options-logout.component";

@Component({
  selector: "app-options",
  templateUrl: "./options.component.html",
  styleUrls: ["./options.component.css"]
})
export class OptionsComponent {
  optionsChosen = false;
  @Input() activeUser: User;

  constructor(private authService: AuthService, private router: Router, private dialog: MatDialog) { }

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
