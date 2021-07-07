let u = require('./utils');
let expect = require('chai').expect;

describe('PowerOfThree', function () {

    context('1st test', function () {
        it('should return true', function () {
            expect(u.isPowerOfThree(9)).to.equals(true);
        })
    })

    context('2st test', function () {
        it('should return false', function () {
            expect(u.isPowerOfThree(45)).to.equals(false);
        })
    })

    context('3st test', function () {
        it('should return true', function () {
            debugger;
            expect(u.isPowerOfThree(43046721)).to.equals(true);
        })
    })

});

describe('romanToInt', function () {
    testCases = [
        { param: 'IX', expected: 9, debug: true },
    ];

    for (const t of testCases) {
        it(`Testing ${t.param} expecting ${t.expected}`, function () {
            expect(u.romanToInt(t.param, t.debug)).to.equals(t.expected);
        });
    }
});

describe('hammingDistance', function () {
    testCases = [
        { params: [4, 1], expected: 2, debug: false },
        { params: [3, 1], expected: 1, debug: false },
        { params: [0, 1], expected: 1, debug: false },
        { params: [0, 0], expected: 0, debug: false },
    ];

    for (const t of testCases) {
        it(`Testing ${t.params} expecting ${t.expected}`, function () {
            expect(u.hammingDistance(...t.params, t.debug)).to.equals(t.expected);
        });
    }
});

describe('pascalTriangle', function () {
    testCases = [
        { params: 1, expected: [[1]], debug: false },
        {
            params: 5,
            expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
            debug: false
        },

    ];

    for (const t of testCases) {
        it(`Testing ${t.params} expecting ${t.expected}`, function () {
            expect(u.generate(t.params, t.debug)).to.deep.equals(t.expected);
        });
    }
});
