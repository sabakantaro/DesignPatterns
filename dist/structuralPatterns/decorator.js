"use strict";
/**
 * Decorator Pattern
 */
class ConcreteComponent {
    operation() {
        return 'ConcreteComponent';
    }
}
class Decorator {
    constructor(component) {
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
function _clientCode(component) {
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
