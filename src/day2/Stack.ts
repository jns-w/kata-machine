type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        return;
    }
    pop(): T | undefined {
        if (!this.tail) return undefined;
        this.length--;
        const popped = this.tail;
        this.tail = this.tail.prev;
        if (this.tail?.next) this.tail.next = undefined;
        return popped.value;
    }
    peek(): T | undefined {
        return this.tail?.value;
    }
}
