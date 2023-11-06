/**
 * Mediator Pattern (Known as Controller)
 */

// Overview
// Mediator is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

// Why use it?
// Use the Mediator pattern when it’s hard to change some of the classes because they are tightly coupled to a bunch of other classes.
// Use the pattern when you can’t reuse a component in a different program because it’s too dependent on other components.
// Use the Mediator when you find yourself creating tons of component subclasses just to reuse some basic behavior in various contexts.

// Pros:
// Single Responsibility Principle. You can extract the communications between various components into a single place, making it easier to comprehend and maintain.
// Open/Closed Principle. You can introduce new mediators without having to change the actual components.
// You can reduce coupling between various components of a program.
// You can reduce individual components more easily.

// Cons:
// Over time a mediator can evolve into a God Object.

// Mediator in TypeScript

interface Mediator {
  notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
  private component1: Component1;

  private component2: Component2;

  constructor(c1: Component1, c2: Component2) {
    this.component1 = c1;
    this.component1.setMediator(this);
    this.component2 = c2;
    this.component2.setMediator(this);
  }

  public notify(sender: object, event: string): void {
    if (event === 'A') {
      console.log('Mediator reacts on A and triggers following operations:');
      this.component2.doC();
    }

    if (event === 'D') {
      console.log('Mediator reacts on D and triggers following operations:');
      this.component1.doB();
      this.component2.doC();
    }
  }
}

class BaseComponent {
  protected mediator!: Mediator;

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

class Component1 extends BaseComponent {
  public doA(): void {
    console.log('Component 1 does A.');
    this.mediator.notify(this, 'A');
  }

  public doB(): void {
    console.log('Component 1 does B.');
    this.mediator.notify(this, 'B');
  }
}

class Component2 extends BaseComponent {
  public doC(): void {
    console.log('Component 2 does C.');
    this.mediator.notify(this, 'C');
  }

  public doD(): void {
    console.log('Component 2 does D.');
    this.mediator.notify(this, 'D');
  }
}

function mediatorClientCode() {
  const c1 = new Component1();
  const c2 = new Component2();
  const mediator = new ConcreteMediator(c1, c2);

  console.log('Client triggers operation A.');
  c1.doA();

  console.log('');
  console.log('Client triggers operation D.');
  c2.doD();
}

mediatorClientCode();