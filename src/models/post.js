export class Post {
  constructor(user, text, timestamp, id) {
    this.user = user;
    this.text = text;
    this.timestamp = timestamp ?? Date.now();
    this.id = id
    // this.id = Date.now() + Math.random().toString();
  }
}
