const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;

      // return this;
    }

    this.tail.next = node;
    this.tail = node;
    // return this;
  }

  dequeue() {
    let del = this.head.value;
    this.head = this.head.next;
    return del;
  }

  getUnderlyingList(){
      // return {value:this.head.value, next: this.head.next?.value ? this.head.next.value : null}
      return {value:this.head.value, next: this.head.next}
  }
}

module.exports = {
  Queue
};
