/**
 * Singleton
 */

// Overview:
// Singleton is a creational design pattern that lets you ensure that a class has only one instance,

// Pros:
// You can be sure that a class has only a single instance.
// You gain a global access point to that instance.
// The singleton object is initialized only when it’s requested for the first time.

// Cons:
// Violates the Single Responsibility Principle. The pattern solves two problems (One is the responsibility of the class, and the other is to control its instantiation).
// The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.
// The pattern requires special treatment in a multithreaded environment so that multiple threads won’t create a singleton object several times.
// It may be difficult to unit test the client code of the Singleton because many test frameworks rely on inheritance when producing mock objects. Since the constructor of the singleton class is private and overriding static methods is impossible in most languages, you will need to think of a creative way to mock the singleton. Or just don’t write the tests. Or don’t use the Singleton pattern.

// Why use it?
// Use the Singleton pattern when a class in your program should have just a single instance available to all clients;
// for example, a single database object shared by different parts of the program.

// Factory Method in TypeScript

class Singleton {
    private static instance: Singleton;

    private constructor() { }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

// Usage

function singletonDemo() {
    const singleton1 = Singleton.getInstance();
    const singleton2 = Singleton.getInstance();

    if (singleton1 === singleton2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

singletonDemo();