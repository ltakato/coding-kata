const { divisionDetect, digitDetect, foobarqix }= require('./foobarqix');

describe('kata 02 - foobarqix - divisionDetect', () => {
    it('should return \'Foo\' if divisible by 3', () => {
        expect(divisionDetect(3)).toBe('Foo');
    });
    it('should return \'Bar\' if divisible by 5', () => {
        expect(divisionDetect(5)).toBe('Bar');
    });
    it('should return \'Qix\' if divisible by 7', () => {
        expect(divisionDetect(7)).toBe('Qix');
    });
    it('should return \'FooBar\' if divisible by 3 and 5', () => {
        expect(divisionDetect(15)).toBe('FooBar');
    });
    it('should return \'FooQix\' if divisible by 3 and 7', () => {
        expect(divisionDetect(21)).toBe('FooQix');
    });
    it('should return \'BarQix\' if divisible by 5 and 7', () => {
        expect(divisionDetect(35)).toBe('BarQix');
    });
    it('should return empty string if not divisible by 3, 5 or 7', () => {
        expect(divisionDetect(1)).toBe('');
        expect(divisionDetect(11)).toBe('');
    });
});

describe('kata 02 - foobarqix - digitDetect', () =>  {
    it('should return Foo for each 3', () => {
        expect(digitDetect(3)).toBe('Foo');
        expect(digitDetect(33)).toBe('FooFoo');
    });
    it('should return Bar for each 5', () => {
        expect(digitDetect(5)).toBe('Bar');
        expect(digitDetect(55)).toBe('BarBar')
    });
    it('should return Qix for each 7', () => {
        expect(digitDetect(7)).toBe('Qix');
        expect(digitDetect(77)).toBe('QixQix')
    });
    it('should return Foo and Bar if contains 3 and 5', () => {
        expect(digitDetect(35)).toBe('FooBar');
    });
    it('should return nothing if not 3, 5 or 7', () => {
        expect(digitDetect(1)).toBe('');
        expect(digitDetect(2)).toBe('');
        expect(digitDetect(4)).toBe('');
    });
});

describe('kata 02 - foobarqix - foobarqix', () =>  {
    it('should return number if not divisible or contains 3, 5 or 7', () => {
        expect(foobarqix(1)).toBe(1);
    });
    it('should not return number if divisible or contains 3, 5 or 7', () => {
        expect(foobarqix(17)).toEqual(expect.not.stringContaining('17'));
    });
});