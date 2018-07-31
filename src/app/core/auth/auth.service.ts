import {Injectable} from "@angular/core";
import {UsersService} from "../users.service";
import {User} from "../user.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private isLogged = false;
  private userLogged: User;

  constructor(private usersService: UsersService) { }

  isUserExists(firstName: String, lastName: String) {
    for (const user of this.usersService.getUsers()) {
      if (firstName === user.firstName && lastName === user.lastName) {
        this.userLogged = user;
        return this.isLogged = true;
      }
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
  }
}
