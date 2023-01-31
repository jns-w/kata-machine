// https://leetcode.com/problems/implement-trie-prefix-tree/submissions/865081384/

class Node {
    children: { [key: string]: Node };
    isEndOfWord?: boolean;

    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

export default class Trie {
    private root: Node;
    private isEndOfWord?: boolean;

    constructor() {
        this.root = new Node();
        this.isEndOfWord = false;
    }

    // we go through from head -- if next char exists, point there, if not, create and point
    insert(item: string): void {
        let node = this.root;

        for (let i = 0; i < item.length; i++) {
            if (!node.children[item[i]]) {
                node.children[item[i]] = new Node();
            }

            node = node.children[item[i]];
        }

        node.isEndOfWord = true;
    }

    //  traverse to last key -- check if
    delete(item: string): void {
        let node = this.root;

        for (let i = 0; i < item.length; i++) {
            if (!node.children[item[i]]) return;
            node = node.children[item[i]];
        }
        node.isEndOfWord = node.isEndOfWord || true;
    }

    find(partial: string): string[] {
        let node = this.root;
        let output: Array<string> = [];

        for (let i = 0; i < partial.length; i++) {
            const char = partial[i];
            if (!node.children[char]) break;
        }
        return output;
    }
}
