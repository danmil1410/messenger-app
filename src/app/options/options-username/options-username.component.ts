import {Component} from "@angular/core";

import {MatDialogRef} from "@angular/material";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: "app-options-username",
  templateUrl: "./options-username.component.html",
  styleUrls: ["./options-username.component.css"]
})
export class OptionsUsernameComponent {
  firstNameForm = new FormControl("", [Validators.required]);
  lastNameForm = new FormControl("", [Validators.required]);

  constructor(public dialogRef: MatDialogRef<OptionsUsernameComponent>) { }

  getErrorFirstName() {
    return this.firstNameForm.hasError("required") ? "You must enter a valid first name" : "";
  }

  getErrorLastName() {
    return this.lastNameForm.hasError("required") ? "You must enter a valid last name" : "";
  }

  onSubmit(firstName: FormControl, lastName: FormControl) {
    if (firstName.value && lastName.value) {
      this.dialogRef.close({firstName, lastName});
    }
  }

}
