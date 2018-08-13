import {Component, DoCheck} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersService} from "../core/users.service";
import {MatSnackBar} from "@angular/material";
import {ImageService} from "../core/image.service";

@Component({
  selector: "app-creating",
  templateUrl: "./creating.component.html",
  styleUrls: ["./creating.component.css"]
})
export class CreatingComponent implements DoCheck {
  creatingForm = new FormGroup({
    firstNameForm: new FormControl("", [Validators.required]),
    lastNameForm: new FormControl("", [Validators.required])
  });
  image: any;
  isImageSet: boolean;

  constructor(private router: Router,
              private usersService: UsersService,
              private snackBar: MatSnackBar,
              private imageService: ImageService) {
  }

  ngDoCheck() {
    this.image = this.imageService.getImage();
    if (this.image) {
      this.isImageSet = true;
    }
  }

  getErrorFirstName() {
    return this.creatingForm.get("firstNameForm").hasError("required") ? "" : "";
  }

  getErrorLastName() {
    return this.creatingForm.get("lastNameForm").hasError("required") ? "" : "";
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

  onAddFile(event: any) {
    this.imageService.onAddFile(event);
    this.isImageSet = true;
  }

}
