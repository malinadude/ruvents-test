import IdbService from "./IdbService";

export default class StrokesApiService extends IdbService {
  constructor() {
    super({
      name: "Strokes",
      version: 1,
      objectStore: {
        name: "strokes",
        key: {
          path: "id",
          autoIncrement: true,
        },
        indexes: [
          {
            name: "val",
            keyPath: "val",
            options: {
              unique: false,
            },
          },
        ],
      },
    });
  }

  async getAll(key) {
    return await this.idbGetAll("strokes", key);
  }
  async set(val) {
    return await this.idbSet("strokes", val);
  }
  async clear() {
    return await this.idbClear("strokes");
  }
  async count() {
    return await this.idbCount("strokes");
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
