/**
 * Proxy Pattern
 */

// Overview
// Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

// Why use it?
// Use the Proxy pattern when you want to add some additional logic around the object used by the client.

// Pros:
// You can control the service object without clients knowing about it.
// You can manage the lifecycle of the service object when clients don’t care about it.
// The proxy works even if the service object isn’t ready or is not available.
// Open/Closed Principle. You can introduce new proxies without changing the service or clients.

// Cons:
// The code may become more complicated since you need to introduce a lot of new classes.
// The response from the service might get delayed.

// Proxy in TypeScript

interface Payment {
  pay(amount: number): void;
}

class Cash implements Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} with cash.`);
  }
}

class Card implements Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} with card.`);
  }
}

class PaymentProxy implements Payment {
  private cash: Cash;
  private card: Card;

  constructor(cash: Cash, card: Card) {
    this.cash = cash;
    this.card = card;
  }

  pay(amount: number) {
    if (amount > 100) {
      this.card.pay(amount);
    } else {
      this.cash.pay(amount);
    }
  }
}

const cash = new Cash();
const card = new Card();
const payment = new PaymentProxy(cash, card);

payment.pay(50);
payment.pay(150);