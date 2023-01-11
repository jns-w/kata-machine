// https://leetcode.com/problems/implement-trie-prefix-tree/submissions/865081384/

class Node {
  children: {[key: string]: Node}
  isEndOfWord?: boolean

  constructor() {
    this.children = {},
    this.isEndOfWord = false;
  }
}

export default class Trie{
  private root: Node;
  private isEndOfWord?: boolean;

  constructor() {
    this.root = new Node();
    this.isEndOfWord = false;
  }
// we go through from head -- if next char exists, point there, if not, create and point
  insert(item: string): void {
    let node = this.root;
    for (let i=0; i<item.length; i++) {
      const c = item[i]
      if (!node.children[c]) {
        node.children[c] = new Node();
        node = node.children[c];
      } else node = node.children[c];
    }
    node.isEndOfWord = true;
  }

  //  traverse to last key -- check if
  delete(item: string): void {

  }

  find(partial: string): string[] {

  }
}
