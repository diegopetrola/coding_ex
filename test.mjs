import {
    isPowerOfThree, romanToInt, hammingDistance,
    generate, reverseKGroup, arrayToListNode, TreeNode, lowestCommonAncestor
} from './utils.mjs';
import { expect } from 'chai';

describe('PowerOfThree', function () {

    context('1st test', function () {
        it('should return true', function () {
            expect(isPowerOfThree(9)).to.equals(true);
        })
    })

    context('2st test', function () {
        it('should return false', function () {
            expect(isPowerOfThree(45)).to.equals(false);
        })
    })

    context('3st test', function () {
        it('should return true', function () {
            debugger;
            expect(isPowerOfThree(43046721)).to.equals(true);
        })
    })

});

describe('romanToInt', function () {
    const testCases = [
        { param: 'IX', expected: 9, debug: true },
    ];

    for (const t of testCases) {
        it(`Testing ${t.param} expecting ${t.expected}`, function () {
            expect(romanToInt(t.param, t.debug)).to.equals(t.expected);
        });
    }
});

describe('hammingDistance', function () {
    const testCases = [
        { params: [4, 1], expected: 2, debug: false },
        { params: [3, 1], expected: 1, debug: false },
        { params: [0, 1], expected: 1, debug: false },
        { params: [0, 0], expected: 0, debug: false },
    ];

    for (const t of testCases) {
        it(`Testing ${t.params} expecting ${t.expected}`, function () {
            expect(hammingDistance(...t.params, t.debug)).to.equals(t.expected);
        });
    }
});

describe('pascalTriangle', function () {
    const testCases = [
        { params: 1, expected: [[1]], debug: false },
        {
            params: 5,
            expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
            debug: false
        },

    ];

    for (const t of testCases) {
        it(`Testing ${t.params} expecting ${t.expected}`, function () {
            expect(generate(t.params, t.debug)).to.deep.equals(t.expected);
        });
    }
});


describe('reverseKGroup', function () {
    const testCases = [
        {
            ar: [1, 2, 3, 4, 5],
            k: 2,
            expected: [2, 1, 4, 3, 5],
        },
        {
            ar: [1, 2, 3, 4, 5],
            k: 3,
            expected: [3, 2, 1, 4, 5],
        },
        {
            ar: [1],
            k: 1,
            expected: [1],
        },

    ];

    for (const t of testCases) {
        it(`Testing ${t.ar} expecting ${t.expected}`, function () {
            expect(
                reverseKGroup(arrayToListNode(t.ar), t.k).toArray()
            ).to.deep.equals(t.expected);
        });
    }
});

describe('lowestCommonAncestor', function () {
    let tree1 = new TreeNode(6);
    tree1.left = new TreeNode(2); tree1.right = new TreeNode(8);
    tree1.left.left = new TreeNode(0); tree1.left.right = new TreeNode(4);
    tree1.left.right.left = new TreeNode(3); tree1.left.right.right = new TreeNode(5);

    const testCases = [
        { root: tree1, p: new TreeNode(2), q: new TreeNode(8), expected: 6, debug: false, },
        { root: tree1, p: new TreeNode(2), q: new TreeNode(4), expected: 2, debug: false, },
        { root: tree1, p: new TreeNode(3), q: new TreeNode(5), expected: 4, debug: false, },
        { root: tree1, p: new TreeNode(7), q: new TreeNode(9), expected: 8, debug: false, },
    ];

    for (const t of testCases) {
        // if (t.debug) { debugger };
        it(`Testing ${t.root.val} expecting ${t.expected}`, function () {
            if (t.debug) debugger;
            expect(
                lowestCommonAncestor(t.root, t.p, t.q).val
            ).to.equals(t.expected);
        });
    }
});