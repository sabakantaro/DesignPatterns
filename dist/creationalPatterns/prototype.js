"use strict";
/**
 * Prototype
 */
// Overview
// Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.
// Why use it?
// Use the Prototype pattern when your code shouldn’t depend on the concrete classes of objects that you need to copy.
// Use the pattern when you want to reduce the number of subclasses that only differ in the way they initialize their respective objects. Somebody could have created these subclasses to be able to create objects with a specific configuration.
// Pros:
// You can clone objects without coupling to their concrete classes.
// You can get rid of repeated initialization code in favor of cloning pre-built prototypes.
// You can produce complex objects more conveniently.
// You get an alternative to inheritance when dealing with configuration presets for complex objects.
// Cons:
// Cloning complex objects that have circular references might be very tricky.
// Prototype in TypeScript
class Shape {
    constructor(source) {
        if (source) {
            this.x = source.x;
            this.y = source.y;
            this.color = source.color;
        }
    }
}
class Rectangle extends Shape {
    constructor(source) {
        super(source);
        if (source) {
            this.width = source.width;
            this.height = source.height;
        }
    }
    clone() {
        return new Rectangle(this);
    }
}
class Circle extends Shape {
    constructor(source) {
        super(source);
        if (source) {
            this.radius = source.radius;
        }
    }
    clone() {
        return new Circle(this);
    }
}
const shapes = [];
const circle = new Circle();
circle.x = 10;
circle.y = 10;
circle.color = 'red';
circle.radius = 20;
shapes.push(circle);
console.log(shapes);
