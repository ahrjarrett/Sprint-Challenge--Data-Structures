class Node {
  constructor({ value, next, prev }) {
    Object.assign(this, { value, next, prev });
  }
  equals(node) {
    if (Array.isArray(node.value)) {
      return node.value[0] === this.value[0];
    }
    return node.value === this.value;
  }
}

module.exports = Node;
