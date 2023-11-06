/**
 * Memento Patterns
 */

// Overview
// Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.

// Why use it?
// Use the Memento pattern when you want to produce snapshots of the object’s state to be able to restore a previous state of the object.
// Use the pattern when direct access to the object’s fields/getters/setters violates its encapsulation.

// Pros:
// You can produce snapshots of the object’s state without violating its encapsulation.
// You can simplify the originator’s code by letting the caretaker maintain the history of the originator’s state.

// Cons:
// The app might consume lots of RAM if clients create mementos too often.
// Caretakers should track the originator’s lifecycle to be able to destroy obsolete mementos.
// Most dynamic programming languages, such as PHP, Python and JavaScript, can’t guarantee that the state within the memento stays untouched.

// Memento in TypeScript

interface Memento {
  getState(): string;
  getName(): string;
  getDate(): string;
}

class ConcreteMemento implements Memento {
  private state: string;

  private date: string;

  constructor(state: string) {
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  public getState(): string {
    return this.state;
  }

  public getName(): string {
    return `${this.date} / (${this.state.substr(0, 9)}...)`;
  }

  public getDate(): string {
    return this.date;
  }
}

class Originator {
  private state: string;

  constructor(state: string) {
    this.state = state;
    console.log(`Originator: My initial state is: ${state}`);
  }

  public doSomething(): void {
    console.log('Originator: I\'m doing something important.');
    this.state = this.generateRandomString(30);
    console.log(`Originator: and my state has changed to: ${this.state}`);
  }

  private generateRandomString(length: number = 10): string {
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return Array
      // @ts-ignore
      .apply(null, { length })
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join('');
  }

  public save(): Memento {
    return new ConcreteMemento(this.state);
  }

  public restore(memento: Memento): void {
    this.state = memento.getState();
    console.log(`Originator: My state has changed to: ${this.state}`);
  }
}

class Caretaker {
  private mementos: Memento[] = [];

  private originator: Originator;

  constructor(originator: Originator) {
    this.originator = originator;
  }

  public backup(): void {
    console.log('\nCaretaker: Saving Originator\'s state...');
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (!this.mementos.length) {
      return;
    }
    const memento = this.mementos.pop()!;

    console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
    this.originator.restore(memento);
  }

  public showHistory(): void {
    console.log('Caretaker: Here\'s the list of mementos:');
    for (const memento of this.mementos) {
      console.log(memento.getName());
    }
  }
}

function mementoClientCode() {
  const originator = new Originator('Super-duper-super-puper-super.');
  const caretaker = new Caretaker(originator);

  caretaker.backup();
  originator.doSomething();

  caretaker.backup();
  originator.doSomething();

  caretaker.backup();
  originator.doSomething();

  console.log('');
  caretaker.showHistory();

  console.log('\nClient: Now, let\'s rollback!\n');
  caretaker.undo();

  console.log('\nClient: Once more!\n');
  caretaker.undo();
}

mediatorClientCode();