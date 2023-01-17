class TrieNode {
    public children: { [key: string]: TrieNode };
    isEndOfWord?: boolean;
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

export default class Trie {
    public root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(item: string): void {
        let curr = this.root;

        for (let i = 0; i < item.length; i++) {
            let next: TrieNode = curr.children[item[i]];

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
            let next: TrieNode = curr.children[item[i]];

            if (!next) return;

            curr = next;
        }
        curr.isEndOfWord = false;
    }

    find(partial: string): string[] {
        let curr = this.root;

        for (let i = 0; i < partial.length; i++) {
            let next: TrieNode = curr.children[partial[i]];
            if (!next) return [];
            curr = next;
        }

        let output: Array<string> = [];
        this.walk(curr, partial, output);
        return output;
    }

    walk(curr: TrieNode, substring: string, output: Array<string>) {
        if (!curr) return;
        for (const [key, node] of Object.entries(curr.children)) {
            let nextSubstring = substring.concat(key);
            if (node.isEndOfWord) output.push(nextSubstring);
            this.walk(node, nextSubstring, output);
        }
    }
}

// class TrieNode {
//     children: { [key: string]: TrieNode };
//     isEndOfWord?: boolean;
//
//     constructor() {
//         this.children = {};
//         this.isEndOfWord = false;
//     }
// }
//
// export default class Trie {
//     private root: TrieNode;
//     public children: {};
//
//     constructor() {
//         this.root = new TrieNode();
//         this.children = {};
//     }
//
//     insert(item: string): void {
//         let curr = this.root;
//
//         for (let i = 0; i < item.length; i++) {
//             let next = curr.children[item[i]];
//             if (!next) {
//                 next = new TrieNode();
//                 curr.children[item[i]] = next;
//             }
//             curr = next;
//         }
//
//         curr.isEndOfWord = true;
//     }
//     delete(item: string): void {
//         let curr = this.root;
//
//         for (let i = 0; i < item.length; i++) {
//             const next = curr.children[item[i]];
//             if (!next) {
//                 return;
//             } else {
//                 curr = next;
//             }
//         }
//         if (curr.isEndOfWord) curr.isEndOfWord = false;
//     }
//
//     find(partial: string): string[] {
//         let curr = this.root;
//         let output: Array<string> = [];
//
//         for (let i = 0; i < partial.length; i++) {
//             const next = curr.children[partial[i]];
//             if (!next) {
//                 return [];
//             } else {
//                 curr = next;
//             }
//         }
//         // we have reached the last char of search string
//         // we now have to start exploring the possible words
//
//         const s = partial;
//         this.walk(curr, s, output);
//         return output;
//     }
//
//     walk(node: TrieNode, s: string, arr: Array<string>) {
//         if (!node) return;
//
//         if (node.isEndOfWord) arr.push(s);
//         // for every child --- we walk
//         for (const [key, val] of Object.entries(node.children)) {
//             const next = val;
//             const newS = s.concat(key);
//             this.walk(next, newS, arr);
//         }
//     }
// }
