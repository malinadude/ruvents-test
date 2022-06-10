import { openDB } from "idb";

export default class StrokeApiService {
  constructor() {
    this.db = openDB("Strokes", 1, {
      upgrade(db) {
        db.createObjectStore("strokes", { keyPath: "id", autoIncrement: true });
      },
    });
  }

  async get(key) {
    return (await this.db).get("strokes", key);
  }
  async set(val) {
    return (await this.db).add("strokes", val);
  }
  async clear() {
    return (await this.db).clear("strokes");
  }
  async keys() {
    return (await this.db).getAllKeys("strokes");
  }
  async search() {
    console.log(await this.db);
  }
}
