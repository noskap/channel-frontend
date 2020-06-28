export class PostModel {
  _id?: string;
  channel: string;
  content: string;
  user: string;

  constructor(json?: any) {
    Object.assign(this, json);
  }
}
