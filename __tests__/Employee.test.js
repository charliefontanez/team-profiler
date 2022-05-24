const Employee = require('Employee');

jest.mock('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee();

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.title).toEqual(expect.any(String));
});