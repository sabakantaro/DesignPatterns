/**
 * Abstract Factory Method
 */

// Overview:
// Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

// Why use it?
// Abstract Factory is very similar to Factory Method. The main difference between these two patterns is that Factory Method is a single method, and Abstract Factory is an object. Abstract Factory groups individual factories that have a common theme.

// Pros:
// You can be sure that the products you’re getting from a factory are compatible with each other.
// You avoid tight coupling between concrete products and client code.
// Single Responsibility Principle. You can extract the product creation code into one place, making the code easier to support.
// Open/Closed Principle. You can introduce new variants of products without breaking existing client code.

// Cons:
// The code may become more complicated than it should be, since a lot of new interfaces and classes are introduced along with the pattern.

// Abstract Factory Method in TypeScript

interface FurnitureFactory {
  createChair(): Chair;
  createCoffeeTable(): CoffeeTable;
  createSofa(): Sofa;
}

class VictorianFurnitureFactory implements FurnitureFactory {
  createChair() {
    return new VictorianChair();
  }

  createCoffeeTable() {
    return new VictorianCoffeeTable();
  }

  createSofa() {
    return new VictorianSofa();
  }
}

class ModernFurnitureFactory implements FurnitureFactory {
  createChair() {
    return new ModernChair();
  }

  createCoffeeTable() {
    return new ModernCoffeeTable();
  }

  createSofa() {
    return new ModernSofa();
  }
}

interface Chair {
  hasLegs(): void;
  sitOn(): void;
}

class VictorianChair implements Chair {
  hasLegs() {
    console.log('victorian chair has legs');
  }

  sitOn() {
    console.log('sit on victorian chair');
  }
}

class ModernChair implements Chair {
  hasLegs() {
    console.log('modern chair has legs');
  }

  sitOn() {
    console.log('sit on modern chair');
  }
}

interface CoffeeTable {
  hasLegs(): void;
  putOn(): void;
}

class VictorianCoffeeTable implements CoffeeTable {
  hasLegs() {
    console.log('victorian coffee table has legs');
  }

  putOn() {
    console.log('put on victorian coffee table');
  }
}

class ModernCoffeeTable implements CoffeeTable {
  hasLegs() {
    console.log('modern coffee table has legs');
  }

  putOn() {
    console.log('put on modern coffee table');
  }
}

interface Sofa {
  hasLegs(): void;
  sitOn(): void;
}

class VictorianSofa implements Sofa {
  hasLegs() {
    console.log('victorian sofa has legs');
  }

  sitOn() {
    console.log('sit on victorian sofa');
  }
}

class ModernSofa implements Sofa {
  hasLegs() {
    console.log('modern sofa has legs');
  }

  sitOn() {
    console.log('sit on modern sofa');
  }
}

const victorianFactory = new VictorianFurnitureFactory();
const modernFactory = new ModernFurnitureFactory();

const victorianChair = victorianFactory.createChair();
victorianChair.hasLegs();
victorianChair.sitOn();

const modernChair = modernFactory.createChair();
modernChair.hasLegs();
modernChair.sitOn();
