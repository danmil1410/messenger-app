import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../core/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-logging",
  templateUrl: "./logging.component.html",
  styleUrls: ["./logging.component.css"]
})
export class LoggingComponent {
  creatingForm = new FormGroup({
    firstNameForm: new FormControl("", [Validators.required]),
    lastNameForm: new FormControl("", [Validators.required])
  });

  constructor(private authService: AuthService, private router: Router) { }

  getErrorFirstName() {
    return this.creatingForm.get("firstNameForm").hasError("required") ? "" : "";
  }

  getErrorLastName() {
    return this.creatingForm.get("lastNameForm").hasError("required") ? "" : "";
  }

  login(firstNameForm: string, lastNameForm: string) {
    this.authService.login(firstNameForm, lastNameForm);
    this.creatingForm.reset();
  }

  onUserCreationMenuClick() {
    this.router.navigate(["/create"]);
  }

}
