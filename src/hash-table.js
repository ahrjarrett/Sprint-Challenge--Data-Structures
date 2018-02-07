/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');
const DLL = require('./doubly-linked-list');
const Node = require('./node');

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
  }

  insert(key, value) {
    if (this.capacityIsFull()) this.resize();
    const index = getIndexBelowMax(key.toString(), this.limit);
    let bucket = this.storage.get(index) || new DLL();
    const node = new Node({ value: [key, value] });
    bucket.delete(node);
    bucket.addToHead([key, value]);
    this.storage.set(index, bucket);
  }

  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    let bucket = this.storage.get(index);
    if (!bucket) return undefined;
    return bucket.delete(new Node({ value: [key] }));
  }

  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (!bucket) return undefined;
    const node = new Node({ value: [key] });
    const tuple = bucket.find(node);
    return tuple ? tuple.value[1] : undefined;
  }

  resize() {
    this.limit *= 2;
    const oldStorage = this.storage;
    this.storage = new LimitedArray(this.limit);
    oldStorage.each(bucket => {
      if (!bucket) return undefined;
      bucket.each(({ value }) => {
        this.insert(value[0], value[1]);
      });
    });
  }

  capacityIsFull() {
    let fullCells = 0;
    this.storage.each(bucket => {
      if (bucket !== undefined) fullCells++;
    });
    return fullCells / this.limit >= 0.75;
  }
}

module.exports = HashTable;
