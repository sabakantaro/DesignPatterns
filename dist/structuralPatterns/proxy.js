"use strict";
/**
 * Proxy Pattern
 */
class Cash {
    pay(amount) {
        console.log(`Paid ${amount} with cash.`);
    }
}
class Card {
    pay(amount) {
        console.log(`Paid ${amount} with card.`);
    }
}
class PaymentProxy {
    constructor(cash, card) {
        this.cash = cash;
        this.card = card;
    }
    pay(amount) {
        if (amount > 100) {
            this.card.pay(amount);
        }
        else {
            this.cash.pay(amount);
        }
    }
}
const cash = new Cash();
const card = new Card();
const payment = new PaymentProxy(cash, card);
payment.pay(50);
payment.pay(150);
