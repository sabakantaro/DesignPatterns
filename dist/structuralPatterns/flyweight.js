"use strict";
/**
 * Flyweight Pattern (Known as: Cache)
 */
// Overview
// Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM
// by sharing common parts of state between multiple objects instead of keeping all of the data in each object.
// Why use it?
// Use the Flyweight pattern only when your program must support a huge number of objects which barely fit into available RAM.
// Pros:
// You can save lots of RAM, assuming your program has tons of similar objects.
// Cons:
// You might be trading RAM over CPU cycles when some of the context data needs to be recalculated each time somebody calls a flyweight method.
// The code becomes much more complicated. New team members will always be wondering why the state of an entity was separated in such a way.
// Flyweight in TypeScript
class Flyweight {
    constructor(sharedState) {
        this.sharedState = sharedState;
    }
    operation(uniqueState) {
        const s = JSON.stringify(this.sharedState);
        const u = JSON.stringify(uniqueState);
        console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
    }
}
class FlyweightFactory {
    constructor(initialFlyweights) {
        this.flyweights = {};
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }
    getKey(state) {
        return state.join('_');
    }
    getFlyweight(sharedState) {
        const key = this.getKey(sharedState);
        if (!(key in this.flyweights)) {
            console.log('FlyweightFactory: Can\'t find a flyweight, creating new one.');
            this.flyweights[key] = new Flyweight(sharedState);
        }
        else {
            console.log('FlyweightFactory: Reusing existing flyweight.');
        }
        return this.flyweights[key];
    }
    listFlyweights() {
        const count = Object.keys(this.flyweights).length;
        console.log(`\nFlyweightFactory: I have ${count} flyweights:`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}
const factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white'],
]);
factory.listFlyweights();
function addCarToPoliceDatabase(ff, plates, owner, brand, model, color) {
    console.log('\nClient: Adding a car to database.');
    const flyweight = ff.getFlyweight([brand, model, color]);
    flyweight.operation([plates, owner]);
}
addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');
addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');
factory.listFlyweights();
