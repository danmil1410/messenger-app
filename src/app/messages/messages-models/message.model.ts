export class Message {
  participantIds: number[];
  value: string;
  date: Date;
  isSeen: boolean;

  constructor(participantIds: number[], value: string) {
    this.participantIds = participantIds;
    this.value = value;
    this.date = new Date();
    this.isSeen = false;
  }

  getYearDate() {
    return this.date.toLocaleTimeString([], {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  }

  getHourDate() {
    return this.date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
}
