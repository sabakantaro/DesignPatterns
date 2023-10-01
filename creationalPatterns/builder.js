"use strict";
/**
 * Builder Pattern
 */
// Overview
// Builder is a creational design pattern that lets you construct complex objects step by step.
// Why use it?
// Use the Builder pattern to get rid of a “telescopic constructor”.
// Pros:
// You can construct objects step-by-step, defer construction steps or run steps recursively.
// You can reuse the same construction code when building various representations of products.
// Single Responsibility Principle. You can isolate complex construction code from the business logic of the product.
// Cons:
// The overall complexity of the code increases since the pattern requires creating multiple new classes.
// The code becomes more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes.
// Builder in TypeScript
class Car {
    constructor(seats, engine, tripComputer, gps) {
        this.seats = seats;
        this.engine = engine;
        this.tripComputer = tripComputer;
        this.gps = gps;
    }
}
class CarBuilder {
    constructor() {
        this.reset();
    }
    reset() {
        this.car = new Car(0, '', false, false);
    }
    setSeats(seats) {
        this.car.seats = seats;
    }
    setEngine(engine) {
        this.car.engine = engine;
    }
    setTripComputer() {
        this.car.tripComputer = true;
    }
    setGPS() {
        this.car.gps = true;
    }
    getResult() {
        return this.car;
    }
}
class Director {
    setBuilder(builder) {
        this.builder = builder;
    }
    constructSportsCar(builder) {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine('sport engine');
        builder.setTripComputer();
        builder.setGPS();
    }
    constructSUV(builder) {
        builder.reset();
        builder.setSeats(4);
        builder.setEngine('suv engine');
        builder.setTripComputer();
        builder.setGPS();
    }
}
const director = new Director();
const carBuilder = new CarBuilder();
director.constructSportsCar(carBuilder);
const sportsCar = carBuilder.getResult();
console.log(sportsCar);
