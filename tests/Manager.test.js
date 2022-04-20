const Manager = require('../lib/Manager');
const manager = new Manager('cumar', '123', 'umar-19@live.com', '250');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('cumar');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('umar-19@live.com');
    expect(manager.officeNum).toBe('250');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('cumar');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('123');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('umar-19@live.com');
});

test('test if we can get the office number from the getOfficeNum() method', () => {
    expect(manager.getOfficeNum()).toBe('250');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});