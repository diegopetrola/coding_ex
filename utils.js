"use strict";

/**
* @param {number} n
* @return {boolean}
*/
exports.isPowerOfThree = function (n) {
    let l = Math.log10(n) / Math.log10(3);

    return Math.abs(Number.parseInt(l) - l) == 0;
};

/**
 * @param {string} s
 * @return {number}
 */
exports.romanToInt = function (s, debug = false) {
    const intValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    if (debug) debugger;

    let value = intValues[s[s.length - 1]];
    for (let i = s.length - 2; i > -1; i--) {
        const n = intValues[s[i]];
        if (n < intValues[s[i + 1]]) {
            value -= n;
        } else {
            value += n;
        }
    }
    return value;
};

/**
* @param {number} x
* @param {number} y
* @return {number}
*/
exports.hammingDistance = function (x, y, debug = false) {
    if (debug) debugger;
    let res = x ^ y;

    let count = 0;
    while (res > 0) {
        count += res % 2;
        res >>= 1;
    }
    return count;
};

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
exports.reverseBits = function (n) {
    let s = n.toString(2);

    if (s.length < 32) {
        s = '0'.repeat(32 - s.length) + s;
    }
    s = s.split('').reverse().join('');
    return Number.parseInt(s, 2);
};

/**
 * Generate a Pascal triangle with numRows levels
 * @param {number} numRows
 * @return {number[][]}
 */
exports.generate = function (numRows, debug = false) {
    if (debug) debugger;

    function generateLevel(ar) {
        let level = [1];

        for (let i = 1; i < ar.length; i++) {
            level.push(ar[i] + ar[i - 1]);
        }
        level.push(1);
        return level;
    }

    let triangle = [[1]];
    let i = 1;
    while (i++ < numRows) {
        triangle.push(generateLevel(triangle[triangle.length - 1]));
    }
    return triangle;
};
