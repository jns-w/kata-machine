class TrieNode {
    public children: { [key: string]: TrieNode };
    public isEndOfWord: boolean;

    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}
export default class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    getLastNode(s: string): TrieNode | undefined {
        let curr = this.root;
        for (let i = 0; i < s.length; i++) {
            let next = curr.children[s[i]];
            if (!next) return undefined;
            curr = next;
        }
        return curr;
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
        let curr = this.getLastNode(item);
        if (!curr) return;
        curr.isEndOfWord = false;
    }

    find(partial: string): string[] {
        let curr = this.getLastNode(partial);

        if (!curr) return [];
        let output: Array<string> = [];

        this.walk(curr, partial, output);

        return output;
    }

    walk(curr: TrieNode, s: string, output: Array<string>): void {
        if (!curr) return;

        for (const [key, node] of Object.entries(curr.children)) {
            let newS = s.concat(key);
            if (node.isEndOfWord) output.push(newS);
            this.walk(node, newS, output);
        }
    }
}

// class TrieNode {
//     public children: { [key: string]: TrieNode };
//     public isEndOfWord?: boolean;
//
//     constructor() {
//         this.children = {};
//         this.isEndOfWord = false;
//     }
// }
//
// export default class Trie {
//     private root: TrieNode;
//
//     constructor() {
//         this.root = new TrieNode();
//     }
//
//     insert(item: string): void {
//         let curr = this.root;
//
//         for (let i = 0; i < item.length; i++) {
//             let key = item[i];
//             let next = curr.children[key];
//             if (!next) {
//                 next = new TrieNode();
//                 curr.children[key] = next;
//             }
//             curr = next;
//         }
//         curr.isEndOfWord = true;
//     }
//
//     delete(item: string): void {
//         let curr = this.root;
//
//         for (let i = 0; i < item.length; i++) {
//             let key = item[i];
//             let next = curr.children[key];
//             if (!next) return;
//             curr = next;
//         }
//
//         curr.isEndOfWord = false;
//     }
//
//     find(partial: string): string[] {
//         let curr = this.root;
//
//         for (let i = 0; i < partial.length; i++) {
//             let key = partial[i];
//             let next = curr.children[key];
//             if (!next) return [];
//             curr = next;
//         }
//
//         // from curr , recurse for all possible words
//         //
//         let output: Array<string> = [];
//
//         this.walk(curr, partial, output);
//
//         return output;
//     }
//
//     walk(curr: TrieNode, s: string, arr: Array<string>) {
//         for (const [key, node] of Object.entries(curr.children)) {
//             let newS = s.concat(key);
//             if (node.isEndOfWord) arr.push(newS);
//             this.walk(node, newS, arr);
//         }
//     }
// }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// class TrieNode {
//     public children: { [key: string]: TrieNode };
//     isEndOfWord?: boolean;
//     constructor() {
//         this.children = {};
//         this.isEndOfWord = false;
//     }
// }
// // technically you can rank common words by assigning a hit rate on isEndOfWord = 0 being never
//
// export default class Trie {
//     public root: TrieNode;
//
//     constructor() {
//         this.root = new TrieNode();
//     }
//
//     insert(item: string): void {
//         let curr = this.root;
//
//         for (let i = 0; i < item.length; i++) {
//             let next: TrieNode = curr.children[item[i]];
//
//             if (!next) {
//                 next = new TrieNode();
//                 curr.children[item[i]] = next;
//             }
//
//             curr = next;
//         }
//
//         curr.isEndOfWord = true;
//     }
//
//     delete(item: string): void {
//         let curr = this.root;
//         for (let i = 0; i < item.length; i++) {
//             let next: TrieNode = curr.children[item[i]];
//
//             if (!next) return;
//
//             curr = next;
//         }
//         curr.isEndOfWord = false;
//     }
//
//     find(partial: string): string[] {
//         let curr = this.root;
//
//         for (let i = 0; i < partial.length; i++) {
//             let next: TrieNode = curr.children[partial[i]];
//             if (!next) return [];
//             curr = next;
//         }
//
//         let output: Array<string> = [];
//         this.walk(curr, partial, output);
//         return output;
//     }
//
//     walk(curr: TrieNode, substring: string, output: Array<string>) {
//         if (!curr) return;
//         for (const [key, node] of Object.entries(curr.children)) {
//             let nextSubstring = substring.concat(key);
//             if (node.isEndOfWord) output.push(nextSubstring);
//             this.walk(node, nextSubstring, output);
//         }
//     }
// }

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
