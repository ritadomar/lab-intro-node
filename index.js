class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.length && pos >= 0) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length > 0) {
      return this.items[this.length - 1];
    } else {
      throw new Error('EmptySortedList');
    }

    // with loop
    // if (this.length > 0) {
    //   let highest = 0;
    //   this.items.forEach(item => {
    //     item > highest ? (highest = item) : false;
    //   });
    //   return highest;
    // } else {
    //   throw new Error('EmptySortedList');
    // }
  }

  min() {
    if (this.length > 0) {
      return this.items[0];
    } else {
      throw new Error('EmptySortedList');
    }

    // with loop
    // if (this.length > 0) {
    //   let lowest = this.items[0];
    //   this.items.forEach(item => {
    //     item < lowest ? (lowest = item) : false;
    //   });
    //   return lowest;
    // } else {
    //   throw new Error('EmptySortedList');
    // }
  }

  sum() {
    return this.items.reduce((acc, cur) => acc + cur, 0);
  }

  avg() {
    if (this.length > 0) return this.sum() / this.length;
    else throw new Error('EmptySortedList');
  }
}

module.exports = SortedList;
