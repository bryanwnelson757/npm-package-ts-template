import { HelloWorld } from '../index';

test('Hello World', () => {
  const hw = new HelloWorld();
 
  expect(hw.sayHello()).toBe('Hello World!');
});
