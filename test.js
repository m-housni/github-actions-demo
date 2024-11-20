// test.js
const sum = require('./index');

test('adds 1 to 2 to be 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 to 1 to be 2', () => {
  expect(sum(1, 1)).toBe(2);
});