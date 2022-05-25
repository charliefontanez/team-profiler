const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
  const test = new Engineer('David', '1', 'email@gmail.com', 'david@github.com');

  expect(test.name).toBe('David');
  expect(test.id).toBe('1');
  expect(test.email).toBe('email@gmail.com');
  expect(test.github).toBe('david@github.com')
});

test('test for methods on Engineer object', () => {
  const david = new Engineer('David', '1', 'email@gmail.com', 'david@github.com');

  expect(david.getName()).toBe(david.name);
  expect(david.getId()).toBe(david.id);
  expect(david.getEmail()).toBe(david.email);
  expect(david.getRole()).toBe('Engineer');
  expect(david.getGithub()).toBe('david@github.com');
})