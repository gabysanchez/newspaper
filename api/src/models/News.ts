import mongoose, { Schema } from 'mongoose';
import { Reporter } from './Reporter';
import { Resource } from './Resource';

export class News {
  newsList(news: News) {
    throw new Error('Method not implemented.');
  }
  _id: String | undefined;
  title: String;
  text?: String;
  reporter?: Reporter[];
  resource?: Resource[];

  constructor(
    _id: String | undefined,
    title: String,
    text?: String,
    reporter?: Reporter[],
    resource?: Resource[]
  ) {
    this._id = _id;
    this.title = title;
    this.text = text;
    this.reporter = reporter;
    this.resource = resource;
  }

  getId() {
    return this._id;
  }
  getTitle() {
    return this.title;
  }
  getText() {
    return this.text;
  }
  getReporter() {
    return this.reporter;
  }
  getResource() {
    return this.resource;
  }
}
interface Inews {
  _id: String;
  title: String;
  text: String;
  reporter: [
    {
      id: Number;
      name: String;
    }
  ];
  resource: [
    {
      id: Number;
    }
  ];
}

const NewsSchema = new Schema<Inews>({
  title: String,
  text: String,
  reporter: [
    {
      _id: false,
      id: Number,
      name: String,
    },
  ],
  resource: [
    {
      _id: false,
      id: Number,
    },
  ],
});
const NewsModel = mongoose.model('News', NewsSchema);
export { NewsModel };
