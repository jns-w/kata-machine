export default class MinHeap {
  public length: number;
  private data: Array<number>;

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number {
    // check if there is nothing in heap
    if (this.length === 0) return -1;
    const out = this.data[0];
    // check if there is only one element in heap
    if (this.length === 1) {
      this.data = [];
      this.length--;
      return out;
    }

    // what's happening here is to put last item into the index 0 -- of which we are trying to remove
    this.data[0] = this.data[this.length-1]
    // book keeping
    this.length--;
    // heapify down from 0 with the previously last val
    this.heapifyDown(0);

    return out;
  }

  private heapifyDown(i: number):void {

    const leftI = this.getLeftChild(i);
    const rightI = this.getRightChild(i);
    // we stop the iteration when we reach the deepest part of the heap--- when index is more than length, or if the left child index is longer than the length.. this is because in minheap, we always add on the left first
    if (i >= this.length || leftI >= this.length) return;

    const leftVal = this.data[leftI];
    const rightVal = this.data[rightI];
    const val = this.data[i];

    if (leftVal > rightVal && val > rightVal) {
      this.swapVals(i, rightI);
      this.heapifyDown(rightI);
    } else if (rightVal > leftVal && val > leftVal) {
      this.swapVals(i, leftI);
      this.heapifyDown(leftI);
    }

  }

  private heapifyUp(i: number): void {
    if (i === 0) return;
    const p = this.getParent(i);
    const pVal = this.data[p];
    const val = this.data[i];
    // compare value of parent and current 
    if (pVal > val) {
      //swap
      this.swapVals(i,p);
      //heapify upwards after
      this.heapifyUp(p);
    }
  }

  private swapVals(i:number, j:number):void {
    const iVal = this.data[i];
    const jVal = this.data[j];
    this.data[i] = jVal;
    this.data[j] = iVal;
  }


// get the parent index when you feed a child index
  private getParent(i: number): number {
    return Math.floor((i-1)/2);
  }

  private getLeftChild(i: number): number {
    return 2*i+1;
  }

  private getRightChild(i: number): number {
    return 2*i+2;
  }
}
