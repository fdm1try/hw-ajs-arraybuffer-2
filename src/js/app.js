export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = new ArrayBuffer(buffer.byteLength);
    const input = new Uint8Array(buffer);
    const output = new Uint8Array(this.buffer);
    for (let i = 0; i < input.length; i += 1) {
      output[i] = input[i];
    }
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    return bufferView.reduce((acc, item) => acc + String.fromCharCode(item), '');
  }
}
