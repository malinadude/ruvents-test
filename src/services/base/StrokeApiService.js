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
  async getAll() {
    return (await this.db).getAll("strokes");
  }
  async set(val) {
    return (await this.db).add("strokes", { val });
  }
  async clear() {
    return (await this.db).clear("strokes");
  }
  async count() {
    return (await this.db).count("strokes");
  }
  async search(query) {
    if (!query) {
      return [];
    }

    const strokes = await this.getAll();
    const regExp = new RegExp(`^${query}`, "g");

    return strokes.filter((stroke) => {
      return stroke.val.match(regExp);
    });
  }
}
