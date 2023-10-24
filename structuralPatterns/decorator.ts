/**
 * Decorator Pattern
 */

// Overview
// Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

// Why use it?
// Use the Decorator pattern when you need to be able to assign extra behaviors to objects at runtime without breaking the code that uses these objects.
// Use the pattern when it’s awkward or not possible to extend an object’s behavior using inheritance.

// Pros:
// You can extend an object’s behavior without making a new subclass.
// You can add or remove responsibilities from an object at runtime.
// You can combine several behaviors by wrapping an object into multiple decorators.
// Single Responsibility Principle. You can divide a monolithic class that implements many possible variants of behavior into several smaller classes.

// Cons:
// It’s hard to remove a specific wrapper from the wrappers stack.
// It’s hard to implement a decorator in such a way that its behavior doesn’t depend on the order in the decorators stack.
// The initial configuration code of layers might look pretty ugly.

// Decorator in TypeScript

interface Component {
  operation(): string;
}

class ConcreteComponent implements Component {
  operation() {
    return 'ConcreteComponent';
  }
}

class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  operation() {
    return this.component.operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  operation() {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

class ConcreteDecoratorB extends Decorator {
  operation() {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

function _clientCode(component: Component) {
  console.log(`RESULT: ${component.operation()}`);
}

const _simple = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
_clientCode(_simple);
console.log('');

const decorator1 = new ConcreteDecoratorA(_simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
_clientCode(decorator2);
console.log('');

