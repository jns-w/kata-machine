type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    private getNode(index: number): Node<T> | undefined {
        if (this.length === 0) return undefined;
        let curr = this.head;
        for (let i = 0; curr && i < index; i++) {
            curr = curr.next;
        }
        return curr;
    }

    removeNode(node: Node<T>): T | undefined {
        if (!node) return undefined;

        this.length--;

        if (this.length === 0) {
            const output = this.head?.value;
            this.head = this.tail = undefined;
            return output;
        }

        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;

        if (node === this.head) this.head = node.next;
        if (node === this.tail) this.tail = node.prev;

        node.next = node.prev = undefined;

        return node.value;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        const newNode = { value: item } as Node<T>;
        if (idx > this.length - 1) {
            this.append(item);
        }
        const curr = this.getNode(idx);

        if (!curr) return;
        if (curr.prev) curr.prev.next = newNode;
        newNode.next = curr;
        curr.prev = newNode;
        if (curr === this.head) this.head = newNode;
        length++;
    }

    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        if (this.length === 0) return undefined;

        let curr = this.head;

        while (curr) {
            if (curr.value === item) {
                return this.removeNode(curr);
            }
            curr = curr.next;
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        if (this.length === 0) return undefined;
        const node = this.getNode(idx);
        if (node) return node.value;
        return undefined;
    }

    removeAt(idx: number): T | undefined {
        const node = this.getNode(idx);
        if (node) return this.removeNode(node);
        return undefined;
    }
}
