/**
 * Composite Pattern
 */

// Overview
// Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.

// Why use it?
// Use the Composite pattern when you have to implement a tree-like object structure.
// Use the pattern when you want the client code to treat both simple and complex elements uniformly.

// Pros:
// You can work with complex tree structures more conveniently: use polymorphism and recursion to your advantage.
// Open/Closed Principle. You can introduce new element types into the app without breaking the existing code, which now works with the object tree.

// Cons:
// It might be difficult to provide a common interface for classes whose functionality differs too much. In certain scenarios, you’d need to overgeneralize the component interface, making it harder to comprehend.

// Composite in TypeScript

interface Component {
  operation(): string;
}

class Leaf implements Component {
  operation() {
    return 'Leaf';
  }
}

class Composite implements Component {
  protected children: Component[] = [];

  add(component: Component) {
    this.children.push(component);
  }

  remove(component: Component) {
    this.children = this.children.filter((child) => child !== component);
  }

  operation() {
    return `Branch(${this.children.map((child) => child.operation()).join('+')})`;
  }
}

function clientCode(component: Component) {
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


