import { News } from './News';

export class Reporter {
  private id: Number;
  private name: String;
  private birthDate: String | undefined;
  private news?: News[];

  constructor(id: Number, name: String, birthDate?: String, news?: News[]) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.news = news;
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getBirthDate() {
    return this.birthDate;
  }
}
