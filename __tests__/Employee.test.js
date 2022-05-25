const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const david = new Employee('David', '1', 'email@gmail.com');

  expect(david.name).toBe('David');
  expect(david.id).toBe('1');
  expect(david.email).toBe('email@gmail.com');
});

test('test for methods on Employee object', () => {
  const david = new Employee('David', '1', 'email@gmail.com');

  expect(david.getName()).toBe(david.name);
  expect(david.getId()).toBe(david.id);
  expect(david.getEmail()).toBe(david.email);
  expect(david.getRole()).toBe('Employee');
});