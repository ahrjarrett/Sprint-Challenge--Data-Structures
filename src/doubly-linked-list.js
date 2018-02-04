class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const node = {
      value,
      next: this.head,
      prev: null,
    };
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.head.prev = node;
    this.head = node;
  }

  addToTail(value) {
    const node = {
      value,
      next: null,
    };
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  removeFromHead() {
    if (this.head === this.tail) {
      const removed = this.head;
      this.head = null;
      this.tail = null;
      return removed;
    }
    const removed = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    removed.next = null;
    return removed;
  }

  removeFromTail() {
    if (this.tail === this.head) {
      const removed = this.tail;
      this.tail = null;
      this.head = null;
      return removed;
    }
    const removed = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    removed.prev = null;
    return removed;
  }

  delete(node) {
    if (!this.head || !this.head.next) {
      this.head = null;
      this.tail = null;
      return;
    }

    let current = this.head;
    while (current.value !== node.value) {
      current = current.next;
    }

    if (current.prev === null) {
      current.next.prev = null;
      this.head = current.next;
      current.next = null;
      return;
    }

    if (current.next === null) {
      current.prev.next = null;
      this.tail = current.prev;
      current.prev = null;
      return;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;

    current.next = null;
    current.prev = null;
  }

  moveToFront(node) {
    this.delete(node);
    this.addToHead(node.value);
  }

  moveToBack(node) {
    this.delete(node);
    this.addToTail(node.value);
  }
}

const list = new DoublyLinkedList()
list.addToTail(5)
list.addToTail(1)
console.log(list)
list.addToTail(7)
list.delete({ value: 7 })
list.delete({ value: 5 })
list.delete({ value: 1 })
list.delete({ value: 1 })
list.addToTail(2)
console.log(list)

module.exports = DoublyLinkedList;
