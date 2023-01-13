type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = node;
            this.head = node;

            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) return undefined;
        this.length--;

        const prevHead = this.head;
        this.head = this.head.next;

        prevHead.next = undefined; // breaking the link garbage

        if (this.length === 0) {
            this.tail = this.head = undefined;
        }

        return prevHead.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
