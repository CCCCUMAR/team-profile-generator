const Employee = require('../lib/Employee');
const employee = new Employee('cumar', '123', 'umar-19@live.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('cumar');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('umar-19@live.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('cumar');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('123');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('umar-19@live.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});