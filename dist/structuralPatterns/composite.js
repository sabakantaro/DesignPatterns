"use strict";
/**
 * Composite Pattern
 */
class Leaf {
    operation() {
        return 'Leaf';
    }
}
class Composite {
    constructor() {
        this.children = [];
    }
    add(component) {
        this.children.push(component);
    }
    remove(component) {
        this.children = this.children.filter((child) => child !== component);
    }
    operation() {
        return `Branch(${this.children.map((child) => child.operation()).join('+')})`;
    }
}
function clientCode(component) {
    console.log(`RESULT: ${component.operation()}`);
}
const simple = new Leaf();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');
const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log('Client: Now I\'ve got a composite tree:');
clientCode(tree);
console.log('');
