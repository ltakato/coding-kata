const fizzbuzz = require('./fizzbuzz');

describe('kata 01 - fizzbuzz', () => {
    it('it should return the number if not divisible by 3 or 5', () => {
        expect(fizzbuzz(1)).toBe(1);
    });

    it('it should return \'fizz\' if divisible 3', () => {
        expect(fizzbuzz(3)).toBe('fizz');
    });

    it('it should return \'buzz\' if divisible 5', () => {
        expect(fizzbuzz(5)).toBe('buzz');
    });

    it('it should return \'fizzbuzz\' if divisible 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
    });
});