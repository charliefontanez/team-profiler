const Intern = require('../lib/Intern.js');

test('Creates a Intern object', () => {
  const test = new Intern('David', '1', 'email@gmail.com', 'schoolname');

  expect(test.name).toBe('David');
  expect(test.id).toBe('1');
  expect(test.email).toBe('email@gmail.com');
  expect(test.school).toBe('schoolname');
});

test('Test for methods on Intern Object', () => {
  const test = new Intern('David', '1', 'email@gmail.com', 'schoolname');

  expect(test.getName()).toBe(test.name);
  expect(test.getId()).toBe(test.id);
  expect(test.getEmail()).toBe(test.email);
  expect(test.getSchool()).toBe(test.school);
  expect(test.getRole()).toBe('Intern');
});