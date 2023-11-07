/**
 * State Pattern
 */

// Overview
// State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

// Why use it?
// Use the State pattern when you have an object that behaves differently depending on its current state, the number of states is enormous, and the state-specific code changes frequently. 
// Use the pattern when you have a class polluted with massive conditionals that alter how the class behaves according to the current values of the class’s fields.
// Use the State when you have a lot of duplicate code across similar states and transitions of a condition-based state machine.

// Pros:
// Single Responsibility Principle. Organize the code related to particular states into separate classes.
// Open/Closed Principle. Introduce new states without changing existing state classes or the context.
// Simplify the code of the context by eliminating bulky state machine conditionals.

// Cons:
// Applying the pattern can be overkill if a state machine has only a few states or rarely changes.
// The pattern requires creating several new classes which can be confusing.

// State in TypeScript

interface State {
  order: Order;

  cancelOrder(): void;

  verifyPayment(): void;

  shipOrder(): void;
}

class Order {
  public cancelledOrderState: State;

  public paymentPendingState: State;

  public orderShippedState: State;

  public orderBeingPreparedState: State;

  public currentState!: State;

  constructor() {
    this.cancelledOrderState = new CancelledOrderState(this);
    this.paymentPendingState = new PaymentPendingState(this);
    this.orderShippedState = new OrderShippedState(this);
    this.orderBeingPreparedState = new OrderBeingPreparedState(this);

    this.setState(this.paymentPendingState);
  }

  public setState(state: State) {
    this.currentState = state;
  }

  public getState(): State {
    return this.currentState;
  }
}

class PaymentPendingState implements State {
  public order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  public cancelOrder(): void {
    console.log('Cancelling your unpaid order...');
    this.order.setState(this.order.cancelledOrderState);
  }

  public verifyPayment(): void {
    console.log('Payment verified! Shipping soon.');
    this.order.setState(this.order.orderBeingPreparedState);
  }

  public shipOrder(): void {
    console.log('Cannot ship the order when payment is pending!');
  }
}

class CancelledOrderState implements State {
  public order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  public cancelOrder(): void {
    console.log('Your order has already been cancelled.');
  }

  public verifyPayment(): void {
    console.log('Order cancelled, you cannot verify payment.');
  }

  public shipOrder(): void {
    console.log('Order cannot ship, it was cancelled.');
  }
}

class OrderBeingPreparedState implements State {
  public order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  public cancelOrder(): void {
    console.log('Cancelling your order...');
    this.order.setState(this.order.cancelledOrderState);
  }

  public verifyPayment(): void {
    console.log('Already verified your payment.');
  }

  public shipOrder(): void {
    console.log('Shipping your order now!');
    this.order.setState(this.order.orderShippedState);
  }
}

class OrderShippedState implements State {
  public order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  public cancelOrder(): void {
    console.log('You cannot cancel, already shipped!');
  }

  public verifyPayment(): void {
    console.log('You cannot verify payment, already shipped!');
  }

  public shipOrder(): void {
    console.log('You cannot ship it again, already shipped!');
  }
}

function stateClientCode() {
  const order = new Order();

  order.getState().verifyPayment();
  order.getState().shipOrder();
  order.getState().cancelOrder();
  console.log('Order state: ' + (<any> order.getState()).constructor.name);
}

stateClientCode();
