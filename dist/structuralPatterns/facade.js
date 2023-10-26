"use strict";
/**
 * Facade Pattern
 */
// Overview
// Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.
// Why use it?
// Use the Facade pattern when you need to have a limited but straightforward interface to a complex subsystem.
// Use the pattern when you want to structure a subsystem into layers.
// Pros:
// You can isolate your code from the complexity of a subsystem.
// Cons:
// A facade can become a god object coupled to all classes of an app.
// Facade in TypeScript
class VideoFile {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class OggCompressionCodec {
    compress(videoFile) {
        console.log('OggCompressionCodec');
        return '';
    }
}
class MPEG4CompressionCodec {
    compress(videoFile) {
        console.log('MPEG4CompressionCodec');
        return '';
    }
}
class CodecFactory {
    extract(file) {
        console.log('CodecFactory');
        return '';
    }
}
class BitrateReader {
    read(file, codec) {
        console.log('BitrateReader');
        return '';
    }
    convert(buffer, codec) {
        console.log('BitrateReader');
        return '';
    }
}
class AudioMixer {
    fix(result) {
        console.log('AudioMixer');
        return '';
    }
}
class VideoConverter {
    convert(filename, format) {
        let file = new VideoFile(filename);
        let sourceCodec = new CodecFactory().extract(file);
        let destinationCodec;
        if (format === 'mp4') {
            destinationCodec = new MPEG4CompressionCodec();
        }
        else {
            destinationCodec = new OggCompressionCodec();
        }
        let buffer = new BitrateReader().read(file, sourceCodec);
        let result = new BitrateReader().convert(buffer, destinationCodec);
        result = new AudioMixer().fix(result);
        return result;
    }
}
function facadeClientCode() {
    let converter = new VideoConverter();
    let mp4 = converter.convert('youtubevideo.ogg', 'mp4');
    console.log(mp4);
}
facadeClientCode();
