import {Message} from "./message.model";

export class Chat {
  participantIds: number[];
  messages: Message[];

  constructor(participantIds: number[], messages: Message[]) {
    this.participantIds = participantIds;
    this.messages = messages;
  }
}
