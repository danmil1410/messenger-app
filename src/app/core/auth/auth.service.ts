import {Injectable} from "@angular/core";
import {UsersService} from "../users.service";
import {User} from "../user.model";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private isLogged = false;
  private userLogged: User;

  constructor(private usersService: UsersService, private router: Router, private snackBar: MatSnackBar) { }

  isUserExists(firstName: string, lastName: string) {
    if (this.usersService.isUserExists(firstName, lastName)) {
      this.userLogged = this.usersService.isUserExists(firstName, lastName);
      return this.isLogged = true;
    }

  }

  getLoggingStatus() {
    return this.isLogged;
  }

  getLoggedUser() {
    return this.userLogged;
  }

  setLoggedUser(firstName: string, lastName: string) {
    this.userLogged.firstName = firstName;
    this.userLogged.lastName = lastName;
  }

  getLoggedUserId() {
    return this.userLogged.id;
  }

  onUserLogout() {
    this.isLogged = false;
    this.userLogged.isOnline = false;
  }

  onUserLogging(firstNameForm: string, lastNameForm: string) {
    this.isLogged = this.isUserExists(firstNameForm, lastNameForm);
    if (this.isLogged) {
      this.userLogged.isOnline = true;
      this.router.navigate(["/app"]);
    } else if (firstNameForm && lastNameForm) {
      this.snackBar.open("There is no such user in database!", "Dismiss", {
        duration: 3000,
      });
    }
  }
}
