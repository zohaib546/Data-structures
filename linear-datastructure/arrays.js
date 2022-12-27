class Array {
  items = [];
  count = 0; // represents total number of items in the array

  constructor(size) {
    this.items.length = size;
  }

  insert(item) {
    // PROBLEM BREAKDOWN:
    // 1- if size is full resize it
    // 2- add new item at the end
    if (this.items.length === this.count) {
      let newArray = [];
      for (let i = 0; i < this.items.length; i++) {
        newArray[i] = this.items[i];
      }
      this.items = newArray;
    }

    this.items[this.count] = item;
    this.count++;
  }

  inserAt(index, element) {
    // 1- copy all elements from index to array.length
    // 2- replace element at index
    // 3- update count
    for (let i = this.count; i > index; i--) {
      this.items[i] = this.items[i - 1];
    }
    this.items[index] = element;
    this.count++;
  }

  removeAt(index) {
    // PROBLEM BREAKDOWN
    // 1- validate the index
    // 2- shift all elements to left to fill the hole
    // 3- reduce the size of count by 1
    if (index < 0 || index >= this.count) throw new Error("invalid index");

    for (let i = index; i < this.count; i++) {
      this.items[index] = this.items[index + 1];
    }

    this.count--;
  }

  indexOf(item) {
    // 1- if item found return its index
    // 2- if not found return -1
    for (let i = 0; i < this.count; i++) {
      if (item == this.items[i]) {
        return i;
      }
    }

    return -1;
  }

  print() {
    for (let i = 0; i < this.count; i++) {
      console.log(this.items[i], "\n");
    }
    return;
  }
}

const numbers = new Array(3);
numbers.insert(50);
numbers.insert(60);
numbers.insert(70);
numbers.inserAt(1, 0);
// numbers.removeAt(1);
// console.log(numbers.indexOf(123));
console.log(numbers.print());
