export class Resource {
  id: Number;
  url?: String;

  constructor(id: Number, url?: String) {
    this.id = id;
    this.url = url;
  }

  getId() {
    return this.id;
  }
  getUrl() {
    return this.url;
  }
}
