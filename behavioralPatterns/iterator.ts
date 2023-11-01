/**
 * Iterator Design Pattern
 */

// Overview
// Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

// Why use it?
// Use the Iterator pattern when your collection has a complex data structure under the hood, but you want to hide its complexity from clients (either for convenience or security reasons).
// Use the pattern to reduce duplication of the traversal code across your app.
// Use the Iterator when you want your code to be able to traverse different data structures or when types of these structures are unknown beforehand.

// Pros:
// Single Responsibility Principle. You can clean up the client code and the collections by extracting bulky traversal algorithms into separate classes.
// Open/Closed Principle. You can implement new types of collections and iterators and pass them to existing code without breaking anything.
// You can iterate over the same collection in parallel because each iterator object contains its own iteration state.
// You can delay an iteration and continue it when needed.

// Cons:
// Applying the pattern can be an overkill if your app only works with simple collections.
// Using an iterator may be less efficient than going through elements of some specialized collections directly.

// Iterator in TypeScript

interface Iterator<T> {
  current(): T;

  next(): T;

  key(): number;

  valid(): boolean;

  rewind(): void;
}

interface Aggregator {
  getIterator(): Iterator<string>;
}

class AlphabeticalOrderIterator implements Iterator<string> {
  private collection: WordsCollection;

  private position: number = 0;

  private reverse: boolean = false;

  constructor(collection: WordsCollection, reverse: boolean = false) {
    this.collection = collection;
    this.reverse = reverse;

    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }

  public rewind() {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0;
  }

  public current(): string {
    return this.collection.getItems()[this.position];
  }

  public key(): number {
    return this.position;
  }

  public next(): any {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  public valid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.getCount();
  }
}

class WordsCollection implements Aggregator {
  private items: string[] = [];

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  public getIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this);
  }

  public getReverseIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this, true);
  }
}

const collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');

const iterator = collection.getIterator();

console.log('Straight traversal:');
while (iterator.valid()) {
  console.log(iterator.next());
}

console.log('');
console.log('Reverse traversal:');
const reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
  console.log(reverseIterator.next());
}
