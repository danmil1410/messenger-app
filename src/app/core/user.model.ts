export class User {
  id: number;
  firstName: string;
  lastName: string;
  isOnline: boolean;
  imagePath: string;

  constructor(id: number, firstName: string, lastName: string, isOnline: boolean, imagePath: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isOnline = isOnline;
    this.imagePath = imagePath;
  }
}
