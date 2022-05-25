const Manager = require('../lib/Manager.js');

test('Creates an Manager object', () => {
  const test = new Manager('David', '1', 'email@gmail.com', 1);

  expect(test.name).toBe('David');
  expect(test.id).toBe('1');
  expect(test.email).toBe('email@gmail.com');
  expect(test.officeNumber).toEqual(expect.any(Number));
});

test('Test for methods on Manager object', () => {
  const test = new Manager('David', '1', 'email@gmail.com', 1);

  expect(test.getName()).toBe(test.name);
  expect(test.getId()).toBe(test.id);
  expect(test.getEmail()).toBe(test.email);
  expect(test.getRole()).toBe('Manager');
});