import test from './fuzzybuzz';

describe('wallaby test', () => {
    it('it should return passed number', () => {
        expect(test(1)).to.be(1);
    })
})
