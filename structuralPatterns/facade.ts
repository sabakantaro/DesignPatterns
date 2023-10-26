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
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

class OggCompressionCodec {
  public compress(videoFile: VideoFile): string {
    console.log('OggCompressionCodec');
    return '';
  }
}

class MPEG4CompressionCodec {
  public compress(videoFile: VideoFile): string {
    console.log('MPEG4CompressionCodec');
    return '';
  }
}

class CodecFactory {
  public extract(file: VideoFile): string {
    console.log('CodecFactory');
    return '';
  }
}

class BitrateReader {
  public read(file: VideoFile, codec: CodecFactory): string {
    console.log('BitrateReader');
    return '';
  }

  public convert(buffer: string, codec: CodecFactory): string {
    console.log('BitrateReader');
    return '';
  }
}

class AudioMixer {
  public fix(result: string): string {
    console.log('AudioMixer');
    return '';
  }
}

class VideoConverter {
  public convert(filename: string, format: string): string {
    let file = new VideoFile(filename);
    let sourceCodec = new CodecFactory().extract(file);
    let destinationCodec;
    if (format === 'mp4') {
      destinationCodec = new MPEG4CompressionCodec();
    } else {
      destinationCodec = new OggCompressionCodec();
    }
    let buffer = new BitrateReader().read(file, sourceCodec as unknown as CodecFactory);
    let result = new BitrateReader().convert(buffer, destinationCodec as unknown as CodecFactory);
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