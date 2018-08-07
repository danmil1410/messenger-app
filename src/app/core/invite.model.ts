export class Invite {
  senderId: number;
  recipientId: number;

  constructor(senderId: number, recipientId: number) {
    this.senderId = senderId;
    this.recipientId = recipientId;
  }
}
