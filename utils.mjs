"use strict";

/**
* LeetCode: Is Power of Three
* @param {number} n
* @return {boolean}
*/
export function isPowerOfThree(n) {
    let l = Math.log10(n) / Math.log10(3);

    return Math.abs(Number.parseInt(l) - l) == 0;
}

/**
 * LeetCode: Roman to Integer
 * @param {string} s
 * @return {number}
 */
export function romanToInt(s, debug = false) {
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
}

/**
* LeetCode: Hamming Distance
* @param {number} x
* @param {number} y
* @return {number}
*/
export function hammingDistance(x, y, debug = false) {
    if (debug) debugger;
    let res = x ^ y;

    let count = 0;
    while (res > 0) {
        count += res % 2;
        res >>= 1;
    }
    return count;
}

/**
 * LeetCode: Reverse Bits
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
export function reverseBits(n) {
    let s = n.toString(2);

    if (s.length < 32) {
        s = '0'.repeat(32 - s.length) + s;
    }
    s = s.split('').reverse().join('');
    return Number.parseInt(s, 2);
}

/**
 * LeetCode: Pascal's triangle
 * Generate a Pascal triangle with numRows levels
 * @param {number} numRows
 * @return {number[][]}
 */
export function generate(numRows, debug = false) {
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
}


/**
 * Linked list definition
 */
export class ListNode {

    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    /**
     * Convents the list to Array O(n).
     * @returns {Array}
     */
    toArray() {
        let ar = [];
        let c = this;
        while (c != null) {
            ar.push(c.val);
            c = c.next;
        }
        return ar;
    }
}

/**
 * Reverses a linked list.
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
export function reverse(head, k = Infinity) {
    let cur = head;
    let prev = null;
    let rev = null;
    let step = 0;
    while (cur != null && step++ < k) {
        rev = cur;
        cur = cur.next;
        rev.next = prev;
        prev = rev;
    }
    return { "head": rev, "tail": head };
}

/**
 * Converts an array to a linked list
 * @param {Array} ar 
 * @returns {ListNode}
 */
export function arrayToListNode(ar) {
    let head = new ListNode(0);
    let cur = head;
    for (const val of ar) {
        cur.next = new ListNode(val);
        cur = cur.next;
    }
    return head.next;
}

/**
 * LeetCode: Reverse Nodes in k-Group 
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
export function reverseKGroup(head, k) {
    let cur = head;
    let res = head;
    let kprev = head;
    // kprev.next = head;
    let i = 0;
    let rev = null;
    let prev = null;
    let lastTail = head;
    while (cur != null) {
        if (++i == k) res = cur;
        prev = cur;
        cur = cur.next;
        if (i % k == 0) {
            debugger;
            lastTail = rev ? rev.tail : head;
            rev = reverse(kprev, k);
            lastTail.next = rev.head;
            kprev = cur;
            rev.tail.next = cur;
        }
    }
    debugger;
    return res;
};


/**
 * Definition of a node for binary tree
 */
export class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}


/**
 * LeetCode: Lowest Common Ancestor of a Binary Search Tree
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
export function lowestCommonAncestor(root, p, q) {
    let cur = root;
    let M = Math.max(p.val, q.val);
    let m = Math.min(p.val, q.val);

    while (cur !== null) {
        if (m <= cur.val && cur.val <= M) {
            return cur;
        } else if (M < cur.val) {
            cur = cur.left;
        } else if (cur.val < m) {
            cur = cur.right;
        }
    }
    return null;
};


/**
 * LeetCode: ArrayShuffler
 */
export class Solution {
    /**
     * @param {Array} nums 
     */
    constructor(nums) {
        this.original = nums;
        this.shuffled = [...nums];
    }
}

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    this.shuffled = [...this.original];
    return this.shuffled;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    for (let i = 0; i < this.shuffled.length; i++) {
        let j = Number.parseInt(i + Math.random() * (this.shuffled.length - i));
        [this.shuffled[i], this.shuffled[j]] = [this.shuffled[j], this.shuffled[i]];
    }
    return this.shuffled;
};

/**
 * LeetCode: Push Dominoes
 * @param {string} dominoes
 * @return {string}
 */
export function pushDominoes(dominoes) {
    let force = 0;
    let res = Array(dominoes.length);

    for (let i = 0; i < dominoes.length; i++) {
        switch (dominoes[i]) {
            case '.':
                res[i] = force;
                force /= 2;
                break;
            case 'L':
                res[i] = 'L';
                force = 0;
                break;
            case 'R':
                res[i] = 'R';
                force = 1;
                break;
        }
    }
    force = 0;
    for (let i = res.length - 1; i > -1; i--) {
        switch (res[i]) {
            case 'L':
                force = -1;
                break;
            case 'R':
                force = 0;
                break;
            default:
                res[i] = res[i] + force;
                if (res[i] < 0) {
                    res[i] = 'L';
                } else if (res[i] > 0) {
                    res[i] = 'R';
                } else {
                    res[i] = '.';
                }
                force /= 2;
        }
    }

    return res.join('');
};

