export class Message {
  userId: number;
  value: string;
  date: Date;

  constructor(userId: number, value: string) {
    this.userId = userId;
    this.value = value;
    this.date = new Date();
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
