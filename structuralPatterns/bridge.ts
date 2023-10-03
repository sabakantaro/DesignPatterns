/**
 * Bridge Pattern
 */

// Overview
// Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

// Why use it?
// Use the Bridge pattern when you want to divide and organize a monolithic class that has several variants of some functionality (for example, if the class can work with various database servers).

// Pros:
// Single Responsibility Principle. You can split a large class or a set of closely related classes into two separate hierarchies.
// Open/Closed Principle. You can introduce new abstractions or implementations into the system without breaking the existing client code.

// Cons:
// The overall complexity of the code increases since you have to introduce multiple new interfaces and classes.

// Bridge in TypeScript

interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(percent: number): void;
  getChannel(): number;
  setChannel(channel: number): void;
}

class Radio implements Device {
  private on: boolean = false;
  private volume: number = 30;
  private channel: number = 1;

  isEnabled() {
    return this.on;
  }

  enable() {
    this.on = true;
  }

  disable() {
    this.on = false;
  }

  getVolume() {
    return this.volume;
  }

  setVolume(percent: number) {
    this.volume = percent;
  }

  getChannel() {
    return this.channel;
  }

  setChannel(channel: number) {
    this.channel = channel;
  }
}

class Tv implements Device {
  private on: boolean = false;
  private volume: number = 30;
  private channel: number = 1;

  isEnabled() {
    return this.on;
  }

  enable() {
    this.on = true;
  }

  disable() {
    this.on = false;
  }

  getVolume() {
    return this.volume;
  }

  setVolume(percent: number) {
    this.volume = percent;
  }

  getChannel() {
    return this.channel;
  }

  setChannel(channel: number) {
    this.channel = channel;
  }
}

interface Remote {
  power(): void;
  volumeDown(): void;
  volumeUp(): void;
  channelDown(): void;
  channelUp(): void;
}

class BasicRemote implements Remote {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  power() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown() {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp() {
    this.device.setChannel(this.device.getChannel() + 1);
  }
}

class AdvancedRemote extends BasicRemote {
  constructor(device: Device) {
    super(device);
  }

  mute() {
    this.device.setVolume(0);
  }
}

const radio = new Radio();
const tv = new Tv();

const radioRemote = new BasicRemote(radio);
const tvRemote = new AdvancedRemote(tv);

radioRemote.power();
radioRemote.volumeUp();