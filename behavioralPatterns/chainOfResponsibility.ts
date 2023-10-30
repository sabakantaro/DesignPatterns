/**
 * Chain of Responsibility
 */

// Overview:
// Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

// Why use it?
// Use the Chain of Responsibility pattern when you want to give more than one object a chance to handle a request. For example, if you want to implement a logging system, you could use a chain of loggers, each of which specializes in a different logging task.
// Use the Chain of Responsibility pattern when it’s essential to execute several handlers in a particular order.
// Use the pattern when the set of handlers and their order are supposed to change at runtime.

// Pros:
// You can control the order of request handling.
// Single Responsibility Principle. You can decouple classes that invoke operations from classes that perform operations.
// Open/Closed Principle. You can introduce new handlers into the app without breaking the existing client code.

// Cons:
// Some requests may end up unhandled.

// Chain of Responsibility in TypeScript

interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
  private nextHandler!: Handler;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}

class MonkeyHandler extends AbstractHandler {
  handle(request: string): string | null {
    if (request === 'Banana') {
      return `Monkey: I'll eat the ${request}.`;
    }

    return super.handle(request);
  }
}

class SquirrelHandler extends AbstractHandler {
  handle(request: string): string | null {
    if (request === 'Nut') {
      return `Squirrel: I'll eat the ${request}.`;
    }

    return super.handle(request);
  }
}

class DogHandler extends AbstractHandler {
  handle(request: string): string | null {
    if (request === 'MeatBall') {
      return `Dog: I'll eat the ${request}.`;
    }

    return super.handle(request);
  }
}

function CORclientCode(handler: Handler) {
  const foods = ['Nut', 'Banana', 'Cup of coffee'];

  for (const food of foods) {
    console.log(`Client: Who wants a ${food}?`);

    const result = handler.handle(food);
    if (result) {
      console.log(`  ${result}`);
    } else {
      console.log(`  ${food} was left untouched.`);
    }
  }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

console.log('Chain: Monkey > Squirrel > Dog');

CORclientCode(monkey);

console.log('');

console.log('Subchain: Squirrel > Dog');

CORclientCode(squirrel);
