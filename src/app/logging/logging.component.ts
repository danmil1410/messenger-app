import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material";

import {AuthService} from "../core/auth/auth.service";

@Component({
  selector: "app-logging",
  templateUrl: "./logging.component.html",
  styleUrls: ["./logging.component.css"]
})

export class LoggingComponent {
  isLogged = false;
  firstNameForm = new FormControl("", [Validators.required]);
  lastNameForm = new FormControl("", [Validators.required]);

  constructor(private authService: AuthService, private router: Router, public snackBar: MatSnackBar) { }

  getErrorFirstName() {
    return this.firstNameForm.hasError("required") ? "You must enter a valid first name" : "";
  }

  getErrorLastName() {
    return this.lastNameForm.hasError("required") ? "You must enter a valid last name" : "";
  }

  onUserLogging() {
    this.isLogged = this.authService.isUserExists(this.firstNameForm.value, this.lastNameForm.value);
    if (this.isLogged) {
      setTimeout(() => {
        this.authService.getLoggedUser().isOnline = true;
        this.router.navigate(["/app"]);
      }, 2000);
    } else if (this.firstNameForm.value && this.lastNameForm.value) {
      this.snackBar.open("There is no such user in database!", "Dismiss", {
        duration: 3000,
      });
    }
  }

}
