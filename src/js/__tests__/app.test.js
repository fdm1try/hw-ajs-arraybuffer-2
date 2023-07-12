import ArrayBufferConverter, { getBuffer } from '../app';

test('Test arraybuffer', () => {
  const sampleBuffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(sampleBuffer);
  const result = converter.toString();
  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
