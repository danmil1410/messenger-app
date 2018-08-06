import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersService} from "../core/users.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: "app-creating",
  templateUrl: "./creating.component.html",
  styleUrls: ["./creating.component.css"]
})
export class CreatingComponent {

  creatingForm = new FormGroup({
    firstNameForm: new FormControl("", [Validators.required]),
    lastNameForm: new FormControl("", [Validators.required])
  });

  constructor(private router: Router, private usersService: UsersService, private snackBar: MatSnackBar) { }

  getErrorFirstName() {
    return this.creatingForm.get("firstNameForm").hasError("required") ? "You must enter a valid first name" : "";
  }

  getErrorLastName() {
    return this.creatingForm.get("lastNameForm").hasError("required") ? "You must enter a valid last name" : "";
  }

  onPageReturn() {
    this.router.navigate(["/login"]);
  }

  onUserCreating(firstNameForm: string, lastNameForm: string) {
    if (firstNameForm && lastNameForm) {
      if (!this.usersService.isUserExists(firstNameForm, lastNameForm)) {
        this.usersService.addUser(firstNameForm, lastNameForm);
        this.router.navigate(["/login"]);
        this.creatingForm.reset();
      } else {
        this.creatingForm.reset();
        this.snackBar.open("There is user with this name in database!", "Dismiss", {
          duration: 3000,
        });
      }
    }
  }

}
