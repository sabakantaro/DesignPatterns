"use strict";
/**
 * Bridge Pattern
 */
class Radio {
    constructor() {
        this.on = false;
        this.volume = 30;
        this.channel = 1;
    }
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
    setVolume(percent) {
        this.volume = percent;
    }
    getChannel() {
        return this.channel;
    }
    setChannel(channel) {
        this.channel = channel;
    }
}
class Tv {
    constructor() {
        this.on = false;
        this.volume = 30;
        this.channel = 1;
    }
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
    setVolume(percent) {
        this.volume = percent;
    }
    getChannel() {
        return this.channel;
    }
    setChannel(channel) {
        this.channel = channel;
    }
}
class BasicRemote {
    constructor(device) {
        this.device = device;
    }
    power() {
        if (this.device.isEnabled()) {
            this.device.disable();
        }
        else {
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
    constructor(device) {
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
class BasicRadioRemote {
    constructor(device) {
        this.device = device;
    }
    power() {
        if (this.device.isEnabled()) {
            this.device.disable();
        }
        else {
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
class BasicTvRemote {
    constructor(device) {
        this.device = device;
    }
    power() {
        if (this.device.isEnabled()) {
            this.device.disable();
        }
        else {
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
