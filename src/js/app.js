// TODO: write your code here
import sum from './basic';
import ArrayBufferConverter from './ArrayBufferConverter'

console.log('worked');

console.log(sum([1, 2]));

function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      console.log('arraybuffer', buffer)
      console.log('bufferview', bufferView)
      for (let i = 0; i < input.length; i++) {
        console.log('charcode', input.charCodeAt(i))
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }

  export default getBuffer;

console.log(getBuffer())

const buffer = new ArrayBufferConverter()


