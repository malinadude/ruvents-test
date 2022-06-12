import { openDB } from "idb";

export default class StrokeApiService {
  constructor() {
    this.db = openDB("Strokes", 1, {
      upgrade(db) {
        const objectStore = db.createObjectStore("strokes", {
          keyPath: "id",
          autoIncrement: true,
        });
        objectStore.createIndex("val", "val", { unique: false });
      },
    });
  }

  async getAll(key) {
    return (await this.db).getAll("strokes", key);
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

    const transaction = (await this.db).transaction("strokes", "readonly");
    const objectStore = transaction.objectStore("strokes");
    const range = IDBKeyRange.bound(query, query + "\uffff");
    const index = objectStore.index("val");
    return await index.getAll(range);
  }
}
