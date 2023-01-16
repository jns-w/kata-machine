// type TrieNode = {
//     children: { [key: string]: TrieNode };
//     isEndOfWord?: boolean;
// };
//
class TrieNode {
    children: { [key: string]: TrieNode };
    isEndOfWord?: boolean;

    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

export default class Trie {
    private root: TrieNode;
    public children: {};

    constructor() {
        this.root = new TrieNode();
        this.children = {};
    }

    insert(item: string): void {
        let curr = this.root;

        for (let i = 0; i < item.length; i++) {
            let next = curr.children[item[i]];
            if (!next) {
                next = new TrieNode();
                curr.children[item[i]] = next;
            }
            curr = next;
        }

        curr.isEndOfWord = true;
    }
    delete(item: string): void {
        let curr = this.root;

        for (let i = 0; i < item.length; i++) {
            const next = curr.children[item[i]];
            if (!next) {
                return;
            } else {
                curr = next;
            }
        }
        if (curr.isEndOfWord) curr.isEndOfWord = false;
    }

    find(partial: string): string[] {
        let curr = this.root;
        let output: Array<string> = [];

        for (let i = 0; i < partial.length; i++) {
            const next = curr.children[partial[i]];
            if (!next) {
                return [];
            } else {
                curr = next;
            }
        }
        // we have reached the last char of search string
        // we now have to start exploring the possible words

        const s = partial;
        this.walk(curr, s, output);
        return output;
    }

    walk(node: TrieNode, s: string, arr: Array<string>) {
        if (!node) return;

        if (node.isEndOfWord) arr.push(s);
        // for every child --- we walk
        for (const [key, val] of Object.entries(node.children)) {
            const next = val;
            const newS = s.concat(key);
            this.walk(next, newS, arr);
        }
    }
}
