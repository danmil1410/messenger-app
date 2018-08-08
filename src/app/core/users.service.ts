import {Injectable} from "@angular/core";
import {User} from "./user.model";
import {MatSnackBar} from "@angular/material";

@Injectable({
  providedIn: "root"
})

export class UsersService {
  users: User[] = [
    {id: 1, firstName: "Marc", lastName: "Jacobs", isOnline: false, imagePath: "https://uinames.com/api/photos/male/4.jpg", friends: []},
    {id: 2, firstName: "Jane", lastName: "Watson", isOnline: false, imagePath: "https://uinames.com/api/photos/female/6.jpg", friends: []},
    {id: 3, firstName: "John", lastName: "Potter", isOnline: false, imagePath: "https://uinames.com/api/photos/male/7.jpg", friends: []},
    {id: 4, firstName: "Kate", lastName: "Saint", isOnline: false, imagePath: "https://uinames.com/api/photos/female/5.jpg", friends: []},
    {id: 5, firstName: "Michael", lastName: "Marsh", isOnline: false, imagePath: "https://uinames.com/api/photos/male/9.jpg", friends: []},
    {id: 6, firstName: "Donna", lastName: "Bride", isOnline: false, imagePath: "https://uinames.com/api/photos/female/2.jpg", friends: []},
    {
      id: 7,
      firstName: "Douglas",
      lastName: "Holland",
      isOnline: false,
      imagePath: "https://uinames.com/api/photos/male/11.jpg",
      friends: []
    },
    {
      id: 8,
      firstName: "Pamela",
      lastName: "Lucas",
      isOnline: false,
      imagePath: "https://uinames.com/api/photos/female/15.jpg",
      friends: []
    },
    {id: 9, firstName: "George", lastName: "Graham", isOnline: false, imagePath: "https://uinames.com/api/photos/male/18.jpg", friends: []},
    {
      id: 10,
      firstName: "Teresa",
      lastName: "Wright",
      isOnline: false,
      imagePath: "https://uinames.com/api/photos/female/1.jpg",
      friends: []
    }
  ];

  constructor(private snackBar: MatSnackBar) { }

  getFriends(user: User) {
    return this.users.filter(elem => elem.friends.includes(user.id));
  }

  getUserById(id: number) {
    return this.users.find(item => item.id === id);
  }

  getUserByName(firstName: string, lastName: string) {
    return this.users.find(item => item.firstName === firstName && item.lastName === lastName);
  }

  getUsers() {
    return this.users;
  }

  addUser(firstName: string, lastName: string) {
    this.users.push(new User(this.users.length + 1, firstName, lastName, "https://uinames.com/api/photos/female/8.jpg"));
    this.snackBar.open("User has been created!", "Dismiss", {
      duration: 3000,
    });
  }

  addFriends(startingUserId: number, chatUserId: number) {
    this.getUserById(startingUserId).friends.push(chatUserId);
    this.getUserById(chatUserId).friends.push(startingUserId);
  }

  areUsersFriends(startingUserId: number, chatUserId: number) {
    const startingUser = this.getUserById(startingUserId);
    const chatUser = this.getUserById(chatUserId);
    return startingUser.friends.includes(chatUserId) && chatUser.friends.includes(startingUserId);
  }

  isUserExists(firstName: string, lastName: string): boolean {
    return !!this.users.find(item => item.firstName === firstName && item.lastName === lastName);
  }

}
