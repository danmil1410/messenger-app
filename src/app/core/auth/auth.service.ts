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
  private loggedUser: User;

  constructor(private usersService: UsersService, private router: Router, private snackBar: MatSnackBar) { }

  getLoggingStatus() {
    return this.isLogged;
  }

  getLoggedUser() {
    return this.loggedUser;
  }

  getLoggedUserId() {
    return this.loggedUser.id;
  }

  setLoggedUser(firstName: string, lastName: string) {
    this.loggedUser.firstName = firstName;
    this.loggedUser.lastName = lastName;
  }

  login(firstNameForm: string, lastNameForm: string) {
    this.isLogged = this.usersService.isUserExists(firstNameForm, lastNameForm);

    if (this.isLogged) {
      this.loggedUser = this.usersService.getUserByName(firstNameForm, lastNameForm);
      this.usersService.getUserByName(firstNameForm, lastNameForm).isOnline = true;
      this.router.navigate(["/"]);

    } else if (firstNameForm && lastNameForm) {
      this.snackBar.open("There is no such user in database!", "Dismiss", {
        duration: 3000,
      });
    }
  }

  onUserLogout() {
    this.isLogged = false;
    this.loggedUser.isOnline = false;
  }

}
