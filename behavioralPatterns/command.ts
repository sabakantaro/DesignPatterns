/**
 * Command Pattern
 */

// Overview
// Command pattern is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.

// Why use it?
// Use the Command pattern when you want to parametrize objects with operations.
// Use the Command pattern when you want to queue operations, schedule their execution, or execute them remotely.
// Use the pattern when you want to implement reversible operations.

// Pros:
// Single Responsibility Principle. You can decouple classes that invoke operations from classes that perform these operations.
// Open/Closed Principle. You can introduce new commands into the app without breaking existing client code.
// You can implement undo/redo.
// You can implement deferred execution of operations.
// You can assemble a set of simple commands into a complex one.

// Cons:
// The code may become more complicated since you’re introducing a lot of new classes.

// Command in TypeScript

interface Command {
  execute(): void;
}

class SimpleCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  execute(): void {
    console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
  }
}

class ComplexCommand implements Command {
  private receiver: Receiver;

  private a: string;

  private b: string;

  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  execute(): void {
    console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}

class Receiver {
  public doSomething(a: string): void {
    console.log(`Receiver: Working on (${a}.)`);
  }

  public doSomethingElse(b: string): void {
    console.log(`Receiver: Also working on (${b}.)`);
  }
}

class Invoker {
  private onStart!: Command;

  private onFinish!: Command;

  setOnStart(command: Command): void {
    this.onStart = command;
  }

  setOnFinish(command: Command): void {
    this.onFinish = command;
  }

  doSomethingImportant(): void {
    console.log('Invoker: Does anybody want something done before I begin?');
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log('Invoker: ...doing something really important...');

    console.log('Invoker: Does anybody want something done after I finish?');
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  private isCommand(object: any): object is Command {
    return object.execute !== undefined;
  }
}

function CommandClientCode() {
  const invoker = new Invoker();
  invoker.setOnStart(new SimpleCommand('Say Hi!'));
  const receiver = new Receiver();
  invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));

  invoker.doSomethingImportant();
}

CommandClientCode();
