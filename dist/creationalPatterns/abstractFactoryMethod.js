"use strict";
/**
 * Abstract Factory Method
 */
class VictorianFurnitureFactory {
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
class ModernFurnitureFactory {
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
class VictorianChair {
    hasLegs() {
        console.log('victorian chair has legs');
    }
    sitOn() {
        console.log('sit on victorian chair');
    }
}
class ModernChair {
    hasLegs() {
        console.log('modern chair has legs');
    }
    sitOn() {
        console.log('sit on modern chair');
    }
}
class VictorianCoffeeTable {
    hasLegs() {
        console.log('victorian coffee table has legs');
    }
    putOn() {
        console.log('put on victorian coffee table');
    }
}
class ModernCoffeeTable {
    hasLegs() {
        console.log('modern coffee table has legs');
    }
    putOn() {
        console.log('put on modern coffee table');
    }
}
class VictorianSofa {
    hasLegs() {
        console.log('victorian sofa has legs');
    }
    sitOn() {
        console.log('sit on victorian sofa');
    }
}
class ModernSofa {
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
