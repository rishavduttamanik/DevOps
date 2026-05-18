const add = require('./math');

// 1. Successful Test Case
test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

// 2. Failed Test Case (Uncomment/modify this to demonstrate failure in CI)
test('deliberate failure: adds 1 + 2 to equal 5', () => {
    expect(add(1, 2)).toBe(5); 
});