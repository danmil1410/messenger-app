export class Message {
  userId: number;
  value: string;

  constructor(userId: number, value: string) {
    this.userId = userId;
    this.value = value;
  }
}
