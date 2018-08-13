import {Injectable} from "@angular/core";
import {User} from "./user.model";
import {MatSnackBar} from "@angular/material";
import {ImageService} from "./image.service";

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
    {id: 6, firstName: "Donna", lastName: "Bride", isOnline: false, imagePath: "https://uinames.com/api/photos/female/2.jpg", friends: []}
  ];

  constructor(private snackBar: MatSnackBar, private imageService: ImageService) { }

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
    if (this.imageService.getImage()) {
      const imagePath = this.imageService.getImage();
      this.users.push(new User(this.users.length + 1, firstName, lastName, imagePath));
      this.imageService.setImage(null);
    } else {
      this.users.push(new User(this.users.length + 1, firstName, lastName, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAFU0lEQVR4Ae2bU4DlShCGa2Zt2+bJpv//2rZt27Zt23y5tm0ba9v2bq6xnTNJJ+kk85CvXqvtqmopKCgoKCiwh9sLu6hTeAte4OcczMlcjsWYwiH8HC/wFnUKdmEPqY4MaMh9cD/H0AsXjMYDaq8+jaS6oAbxTi6gF00wD3e7ruQLa6m98Qm9+IJPuA9rSR6UmvECTKFnQSbhwlIzyZQKdQhn0LMo09ShUiHZ4Azk5/RSkM+dgZI+2IUL6aUkC7GLpEolLqeXrqgrUptKXeviRXoZyEtd64p9VCt8SS8bwZcDmotdSt0xml6GMrzUXezBdhxLL2MZq9rbmzxD6eUgQ5zWVpYuv6WXk3xrYTnjNsPCfuQt9puA2yQZajPjovaUmvrFzopsIfFhS04zrP4oqRQZ2IaTrY/BVLaUuOBR42IOlz9RG3Kp9SY8IvFwNzIu5If/jn93c/tN4MYSg5ocaVqAWm2Vhm+OxZYbMCLGo4fHGA/xA/6xs96EY6L3/0TDrCf2bCw+WLJ7+GGU1JQo4GDTrN2NpCxOAz5utQkHSRQ4xDDjWyQAHI759i4WYo7a0DDTd8MG1unIl6w9dTYQU/CI0aB+x/piAHfiuEzPA6eB0R4ypG8LMc6Rp2Fq4iYschqICWpXg8wGRz3ge9bBkRyRcBLtKibgVmvV16nA9niEc2JPolvFBP4YktFnbCkJGFCb2/JhDuayyE340ST75oF9sJLXSU1bllX25U48C7fhGX7GsVyK+ZzIwfiCL+FqdQDhv8wbPPbVpoFX2y0kQzrW0y+GatPYdyCs5L1uU8kYfBX5TsSby+/5g9aQ7PE/aG+WMPCar/o/qd2kQnKBB2od+ZqEwR+06p+YaeU13M19T6cwfBa4zpIjhO5fkzAwc9Uk+Trj2FlrwEwJAyu1EaglIWBnvP1n5m9jZ9FIqs/6WgNWSBhYoh0dtUP0L1ulgMtFbOoPqK01YImEwenaCLSUALCdb8Pd3qY+W2r60yUMjFo1idMtUPt9X4U+sKnvdNPfxpG30eADrIyDe4FNfXf16NuodpBhXwnA/+bFfKv6+2rar0oYPhvzJRIAPvBPCZv6vDT6VeI4rYCnJABuq1eI21rVf1KrzbESBrfQkswSMe8jXCZiUx+zNCvU5hJG3xa+QXZCD6a3/tR7SzuYEuvD8T1oGko4+F5rwOmSEzxNq8n3YoK+jPGV5AS/1u2AMc0q5j5bu77pmGYVpwEXaWNwteQArtZqsdhpIGbwIT08LPvXsNsU87QReEhMURv4Bu9iyRheotcB6ycxr88pNcu2/zlbt8UmdHDgbskQ3O0r/2CJRE1M0O1C2QVJwvG9CydGtgfiOL9BfUDDbIJo/f41HBfHcjnYl80rUilpU1nGMjU4lj3WXcdK8IWF4BK1tmgkcTWdJSnCsy2GGoiwJaaWjYtICR5WLiQ2kTeCW5SzU6tDJAVwOFb6S1ObpTAnsZIniGVwnMWAJy3k7JuyWT/ds7FYomdjPF2uDH5jJYK0b4vyfnuM58ZiAW6M8UGOXAuo9hxbhdfmDqdBwkPr9mhhl/YDX8fgWNaXGLA+j+HYqr6psEeWocezeSWcaLcdXsXZVYceq1Z5BH8P5yXcuGedEL/jxryUw4PywYv60rVHhUH4/VJ8jHvUKWrrQWpgJ9bvWG9gJ9d1t8HJuAcfh8fT4fKUXVrcnQuy/wBhFdU/rS8oqn/xCSjKNyxcaPkbVvawFvbFp0kqj0+xL2tJvrgu7sb8OF8RWZLqQp9G3If32f8Mmt933Bf//Y67BFM4BF/gRdyqTsEubi8pKCgoKCiwxm8kD1iPSm/45wAAAABJRU5ErkJggg=="));
    }
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
