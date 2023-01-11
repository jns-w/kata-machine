type Node<T> = {
  value: T,
  next?: Node<T>,
}

export default class Queue<T> {
  public length: number;

  private head: Node<T> | undefined;
  private tail: Node<T> | undefined;


  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }
  // enqueue - to add to the queue
  enqueue(item: T): void {
    const node = {value: item} as Node<T>;
    // if there is no tail, it means there is nothing in the list -- so create one
    if (!this.tail) {
      this.tail = this.head = node; 
      return;
    }
    this.length++;
    return;
  }
  // deque to remove from the queue
  deque(): T | undefined {
    // if there is no head it means there is nothing in the list --  so just return undefined
    if (!this.head) return undefined;

    // save the head you are going to delete
    const head = this.head;
    // move head pointer to next
    this.head = this.head.next;

    // not neccessary on some lang -- garbage collection, unlink the prev head
    head.next = undefined;

    // you have to do everything yourself, including managing the length count of the list (this is what js does under the hood, with the array prototype)
    // this is what primeagen mean when he says js array is not an array
    this.length--;

    // if there is no more items, remove tail pointer as well
    if (this.length === 0) {
      this.tail = undefined;
      return undefined;
    }
    return head.value;
  }
  peek(): T | undefined {
    return this.head?.value
  }
}
