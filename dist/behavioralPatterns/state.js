"use strict";
/**
 * State Pattern
 */
class Order {
    constructor() {
        this.cancelledOrderState = new CancelledOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.setState(this.paymentPendingState);
    }
    setState(state) {
        this.currentState = state;
    }
    getState() {
        return this.currentState;
    }
}
class PaymentPendingState {
    constructor(order) {
        this.order = order;
    }
    cancelOrder() {
        console.log('Cancelling your unpaid order...');
        this.order.setState(this.order.cancelledOrderState);
    }
    verifyPayment() {
        console.log('Payment verified! Shipping soon.');
        this.order.setState(this.order.orderBeingPreparedState);
    }
    shipOrder() {
        console.log('Cannot ship the order when payment is pending!');
    }
}
class CancelledOrderState {
    constructor(order) {
        this.order = order;
    }
    cancelOrder() {
        console.log('Your order has already been cancelled.');
    }
    verifyPayment() {
        console.log('Order cancelled, you cannot verify payment.');
    }
    shipOrder() {
        console.log('Order cannot ship, it was cancelled.');
    }
}
class OrderBeingPreparedState {
    constructor(order) {
        this.order = order;
    }
    cancelOrder() {
        console.log('Cancelling your order...');
        this.order.setState(this.order.cancelledOrderState);
    }
    verifyPayment() {
        console.log('Already verified your payment.');
    }
    shipOrder() {
        console.log('Shipping your order now!');
        this.order.setState(this.order.orderShippedState);
    }
}
class OrderShippedState {
    constructor(order) {
        this.order = order;
    }
    cancelOrder() {
        console.log('You cannot cancel, already shipped!');
    }
    verifyPayment() {
        console.log('You cannot verify payment, already shipped!');
    }
    shipOrder() {
        console.log('You cannot ship it again, already shipped!');
    }
}
function stateClientCode() {
    const order = new Order();
    order.getState().verifyPayment();
    order.getState().shipOrder();
    order.getState().cancelOrder();
    console.log('Order state: ' + order.getState().constructor.name);
}
stateClientCode();
