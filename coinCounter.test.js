const { coinCounterRecursive, coinCounterClosure } = require('./index');

// Test cases for coinCounterRecursive function
describe('coinCounterRecursive function', () => {
    test('should return correct change for $0.99', () => {
        const amount = 0.99;
        const expectedChange = { quarters: 3, dimes: 2, nickels: 0, pennies: 4 };
        expect(coinCounterRecursive(amount)).toEqual(expectedChange);
    });

    test('should return correct change for $1.23', () => {
        const amount = 1.23;
        const expectedChange = { quarters: 4, dimes: 2, nickels: 0, pennies: 3 };
        expect(coinCounterRecursive(amount)).toEqual(expectedChange);
    });

    test('should return correct change for $5.00', () => {
        const amount = 5.00;
        const expectedChange = { quarters: 20, dimes: 0, nickels: 0, pennies: 0 };
        expect(coinCounterRecursive(amount)).toEqual(expectedChange);
    });

    test('should return correct change for $10.58', () => {
        const amount = 10.58;
        const expectedChange = { quarters: 42, dimes: 0, nickels: 1, pennies: 3 };
        expect(coinCounterRecursive(amount)).toEqual(expectedChange);
    });

    test('should return empty object for $0.00', () => {
        const amount = 0.00;
        const expectedChange = {};
        expect(coinCounterRecursive(amount)).toEqual(expectedChange);
    });

    test('should return correct change for $0.01', () => {
        const amount = 0.01;
        const expectedChange = { quarters: 0, dimes: 0, nickels: 0, pennies: 1 };
        expect(coinCounterRecursive(amount)).toEqual(expectedChange);
    });
});

// Test cases for coinCounterClosure function
describe('coinCounterClosure function', () => {
    test('should return correct change for $0.99', () => {
        const amount = 0.99;
        const expectedChange = { quarters: 3, dimes: 2, nickels: 0, pennies: 4 };
        expect(coinCounterClosure(amount)).toEqual(expectedChange);
    });

    test('should return correct change for $1.23', () => {
        const amount = 1.23;
        const expectedChange = { quarters: 4, dimes: 2, nickels: 0, pennies: 3 };
        expect(coinCounterClosure(amount)).toEqual(expectedChange);
    });

    test('should return correct change for $5.00', () => {
        const amount = 5.00;
        const expectedChange = { quarters: 20, dimes: 0, nickels: 0, pennies: 0 };
        expect(coinCounterClosure(amount)).toEqual(expectedChange);
    });

    test('should return correct change for $10.58', () => {
        const amount = 10.58;
        const expectedChange = { quarters: 42, dimes: 0, nickels: 1, pennies: 3 };
        expect(coinCounterClosure(amount)).toEqual(expectedChange);
    });

    test('should return empty object for $0.00', () => {
        const amount = 0.00;
        const expectedChange = {};
        expect(coinCounterClosure(amount)).toEqual(expectedChange);
    });

    test('should return correct change for $0.01', () => {
        const amount = 0.01;
        const expectedChange = { quarters: 0, dimes: 0, nickels: 0, pennies: 1 };
        expect(coinCounterClosure(amount)).toEqual(expectedChange);
    });
});
