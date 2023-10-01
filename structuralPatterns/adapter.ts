/**
 * Adapter Pattern
 */

// Overview
// Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

// WHy use it?
// Use the Adapter class when you want to use some existing class, but its interface isn’t compatible with the rest of your code.
// Use the pattern when you want to reuse several existing subclasses that lack some common functionality that can’t be added to the superclass.

// Pros:
// Single Responsibility Principle. You can separate the interface or data conversion code from the primary business logic of the program.
// Open/Closed Principle. You can introduce new types of adapters into the program without breaking the existing client code, as long as they work with the adapters through the client interface.

// Cons:
// The overall complexity of the code increases because you need to introduce a set of new interfaces and classes. Sometimes it’s simpler just to change the service class so that it matches the rest of your code.

// Adapter in TypeScript

class RoundHole {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  fits(peg: RoundPeg) {
    return this.radius >= peg.radius;
  }
}

class RoundPeg {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }
}

class SquarePeg {
  width: number;

  constructor(width: number) {
    this.width = width;
  }

  getWidth() {
    return this.width;
  }
}

class SquarePegAdapter extends RoundPeg {
  peg: SquarePeg;

  constructor(peg: SquarePeg) {
    super(peg.getWidth());
    this.peg = peg;
  }

  getRadius() {
    return this.peg.getWidth() * Math.sqrt(2) / 2;
  }
}

const hole = new RoundHole(5);
const rpeg = new RoundPeg(5);
console.log(hole.fits(rpeg));

const smallSqPeg = new SquarePeg(5);
const largeSqPeg = new SquarePeg(10);
// hole.fits(smallSqPeg); // error
// hole.fits(largeSqPeg); // error

const smallSqPegAdapter = new SquarePegAdapter(smallSqPeg);
const largeSqPegAdapter = new SquarePegAdapter(largeSqPeg);
console.log(hole.fits(smallSqPegAdapter));
console.log(hole.fits(largeSqPegAdapter));
