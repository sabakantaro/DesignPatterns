/**
 * Observer Pattern
 */

// Overview
// Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

// Why use it?
// Use the Observer pattern when changes to the state of one object may require changing other objects, and the actual set of objects is unknown beforehand or changes dynamically.
// Use the pattern when some objects in your app must observe others, but only for a limited time or in specific cases.

// Pros:
// Open/Closed Principle. You can introduce new subscriber classes without having to change the publisher’s code (and vice versa if there’s a publisher interface).
// You can establish relations between objects at runtime.

// Cons:
// Subscribers are notified in random order.

// Observer in TypeScript

interface Subject {
  state: number;

  attach(observer: Observer): void;

  detach(observer: Observer): void;

  notify(): void;
}

class ConcreteSubject implements Subject {
  public state!: number;

  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer has been attached already.');
    }

    console.log('Subject: Attached an observer.');
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }

  public notify(): void {
    console.log('Subject: Notifying observers...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public someBusinessLogic(): void {
    console.log('\nSubject: I\'m doing something important.');
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log(`Subject: My state has just changed to: ${this.state}`);
    this.notify();
  }
}

interface Observer {
  update(subject: Subject): void;
}

class ConcreteObserverA implements Observer {
  public update(subject: Subject): void {
    if (subject.state < 3) {
      console.log('ConcreteObserverA: Reacted to the event.');
    }
  }
}

class ConcreteObserverB implements Observer {
  public update(subject: Subject): void {
    if (subject.state === 0 || subject.state >= 2) {
      console.log('ConcreteObserverB: Reacted to the event.');
    }
  }
}

