import { openDB } from "idb";

export default class IdbService {
  constructor(targetDb) {
    this.db = this.idbInit(targetDb);
  }

  idbInit(targetDb) {
    return openDB(targetDb.name, targetDb.version, {
      upgrade(db) {
        const objectStore = db.createObjectStore(targetDb.objectStore.name, {
          keyPath: targetDb.objectStore.key.path,
          autoIncrement: targetDb.objectStore.key.autoIncrement,
        });

        targetDb.objectStore.indexes.forEach((index) => {
          objectStore.createIndex(index.name, index.keyPath, index.options);
        });
      },
    });
  }

  async idbGetAll(storeName, key) {
    return (await this.db).getAll(storeName, key);
  }
  async idbSet(storeName, val) {
    return (await this.db).add(storeName, val);
  }
  async idbClear(storeName) {
    return (await this.db).clear(storeName);
  }
  async idbCount(storeName) {
    return (await this.db).count(storeName);
  }
}
