export class Invite {
  senderId: number;
  addressId: number;

  constructor(senderId: number, addressId: number) {
    this.senderId = senderId;
    this.addressId = addressId;
  }
}
