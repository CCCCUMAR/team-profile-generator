const Intern = require('../lib/Intern');
const intern = new Intern('cumar', '123', 'umar-19@live.com', 'Uofm');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('cumar');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('umar-19@live.com');
    expect(intern.school).toBe('Uofm');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('cumar');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('123');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('umar-19@live.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Uofm');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});