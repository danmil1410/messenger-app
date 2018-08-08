export class User {
  id: number;
  firstName: string;
  lastName: string;
  isOnline: boolean;
  imagePath: string;
  friends: number[];

  constructor(id: number, firstName: string, lastName: string, imagePath: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isOnline = false;
    this.imagePath = imagePath;
    this.friends = [];
  }
}
