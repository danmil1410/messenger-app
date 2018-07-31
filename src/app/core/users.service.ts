import {Injectable} from "@angular/core";
import {User} from "./user.model";

@Injectable({
  providedIn: "root"
})

export class UsersService {
  users: User[] = [
    {id: 1, firstName: "John", lastName: "Bridge", isOnline: false, imagePath: "https://uinames.com/api/photos/male/15.jpg"},
    {id: 2, firstName: "Mary", lastName: "Hopkins", isOnline: false, imagePath: "https://uinames.com/api/photos/female/20.jpg"},
    {id: 3, firstName: "James", lastName: "Watson", isOnline: true, imagePath: "https://uinames.com/api/photos/male/10.jpg"},
    {id: 4, firstName: "Christina", lastName: "Nelson", isOnline: true, imagePath: "https://uinames.com/api/photos/female/18.jpg"},
    {id: 5, firstName: "Ralph", lastName: "Palmer", isOnline: false, imagePath: "https://uinames.com/api/photos/male/5.jpg"},
    {id: 6, firstName: "Kate", lastName: "Bridge", isOnline: true, imagePath: "https://uinames.com/api/photos/female/4.jpg"},
    {id: 7, firstName: "Michael", lastName: "Hopkins", isOnline: true, imagePath: "https://uinames.com/api/photos/male/9.jpg"},
    {id: 8, firstName: "Joanne", lastName: "Watson", isOnline: false, imagePath: "https://uinames.com/api/photos/female/5.jpg"},
    {id: 9, firstName: "Christian", lastName: "Nelson", isOnline: true, imagePath: "https://uinames.com/api/photos/male/14.jpg"},
    {id: 10, firstName: "Marc", lastName: "Bridge", isOnline: false, imagePath: "https://uinames.com/api/photos/male/2.jpg"},
    {id: 11, firstName: "Paul", lastName: "Hopkins", isOnline: true, imagePath: "https://uinames.com/api/photos/male/13.jpg"},
    {id: 12, firstName: "Nicholas", lastName: "Marshall", isOnline: false, imagePath: "https://uinames.com/api/photos/male/8.jpg"},
    {id: 13, firstName: "Michelle", lastName: "Romero", isOnline: true, imagePath: "https://uinames.com/api/photos/female/23.jpg"},
    {id: 14, firstName: "Bruce", lastName: "Palmer", isOnline: false, imagePath: "https://uinames.com/api/photos/male/1.jpg"},
    {id: 15, firstName: "Donna", lastName: "Watson", isOnline: false, imagePath: "https://uinames.com/api/photos/female/8.jpg"}
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    for (const user of this.users) {
      if (id === user.id) {
        return user;
      }
    }
  }

}
