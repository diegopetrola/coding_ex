"use strict";

import _ from "lodash";

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
export function romanToInt(s) {
    const intValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

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
export function hammingDistance(x, y) {
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
export function generate(numRows,) {
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
            lastTail = rev ? rev.tail : head;
            rev = reverse(kprev, k);
            lastTail.next = rev.head;
            kprev = cur;
            rev.tail.next = cur;
        }
    }
    return res;
};


/**
 * Definition of a node for binary tree
 */
export class TreeNode {
    /**
     * 
     * @param val 
     * @param {TreeNode} parent 
     */
    constructor(val, parent = null, left = null, right = null) {
        this.val = val;
        this.parent = parent;
        this.left = left;
        this.right = right;
    }

    /**
     * Converts a binary tree to an Array
     * @returns {Array}
     */
    toArray() {
        let ar = [];
        let stack = [this];

        while (stack.length > 0) {
            let new_stack = [];
            for (let i = 0; i < stack.length; i++) {

                ar.push(stack[i] ? stack[i].val : null);
                if (stack[i] !== null && stack[i].left === null && stack[i].right === null) continue;
                if (stack[i] !== null) {
                    new_stack.push(stack[i].left);
                    new_stack.push(stack[i].right);
                }
            }
            stack = new_stack;
        }
        return ar;
    }

    /**
     * Converts an array into a binary tree
     * @param {Array} ar 
     * @returns {TreeNode}
     */
    static fromArray(ar, i = 0) {
        function addFromArray(ar, index) {
            if (index >= ar.length || ar[index] === null) return null;
            return new TreeNode(ar[index]);
        }

        if (ar.length == 0) return null;
        let root = new TreeNode(ar[0]);
        let stack = [root];
        let j = 1;
        while (stack.length > 0) {
            let new_stack = []
            for (let i = 0; i < stack.length; i++) {
                if (stack[i] !== null) {
                    stack[i].left = addFromArray(ar, j++);
                    stack[i].right = addFromArray(ar, j++);
                    new_stack.push(stack[i].left, stack[i].right);
                }
            }
            stack = new_stack;
        }
        return root;
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

/**
 * LeetCode: Partition Array into Disjoint Intervals
 * @param {number[]} nums
 * @return {number}
 */
export function partitionDisjoint(nums) {
    let partition = { i: 1, val: nums[0] }
    let maxN = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // if we find a dip, go to the next value higher than maxN
        if (nums[i] < partition.val) {
            while (nums[i] < maxN) {
                // if we get to the end of the array, return the last partition found
                if (i == nums.length - 1) return partition.i;
                i++;
            }
            partition.i = i;
            partition.val = maxN;
        }
        maxN = Math.max(nums[i], maxN);
    }

    return partition.i;

};

/**
 * LeetCode: Binary Tree Pruning
 * @param {TreeNode} root
 * @return {TreeNode}
 */
export function pruneTree(root) {
    if (root === null) return null;
    if (root.left == null && root.right == null) {
        if (root.val == 1) return root;
        return null;
    }

    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);

    if (root.left === null && root.right === null && root.val == 0)
        root = null;

    return root;
};

/**
 * LeetCode: Convert Sorted Array to Binary Search Tree
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 * @return {TreeNode}
 */
export function sortedArrayToBST(nums, start = 0, end = nums.length) {
    if (start == end) return null;
    if (end - start == 1) return new TreeNode(nums[start]);

    const middle = Number.parseInt((start + end) / 2);
    const node = new TreeNode(nums[middle]);
    node.left = sortedArrayToBST(nums, start, middle);
    node.right = sortedArrayToBST(nums, middle + 1, end);
    return node;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export function threeSumClosest(nums, target) {
    let bestSum = Infinity;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            const sum = nums[i] + nums[start] + nums[end];
            const compare = sum - target;
            if (compare == 0) {
                return sum;
            } else if (compare > 0) {
                end--;
            } else {
                start++;
            }
            if (Math.abs(compare) < Math.abs(bestSum - target)) {
                bestSum = sum;
            }
        }
    }
    return bestSum;
};

/**
 * LeetCode: Beautiful Array
 * @param {number} n
 * @return {number[]}
 */
export function beautifulArray(n) {
    let ar = [1];

    while (ar.length < n) {
        let new_ar = [];
        for (let i = 0; i < ar.length; i++) {
            const odd = 2 * ar[i] - 1;
            if (odd <= n) new_ar.push(odd);
        }
        for (let i = 0; i < ar.length; i++) {
            const even = 2 * ar[i];
            if (even <= n) new_ar.push(even);
        }
        ar = new_ar;
    }

    return ar;
};

/**
 * LeetCode: telephone letter combination
 * @param {string} digits
 * @return {string[]}
 */
export function letterCombinations(digits) {
    const d = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }
    if (digits == '') return [];

    debugger;
    let stack = d[digits[0]];
    for (let i = 1; i < digits.length; i++) {
        let new_stack = [];
        for (let j = 0; j < stack.length; j++) {
            for (const digit of d[digits[i]]) {
                new_stack.push(stack[j] + digit);
            }
        }
        stack = new_stack;
    }
    return stack;
};

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
export function updateMatrix(mat) {
    function add_to_stack(mat, stack, i, j) {
        if (i > -1 && i < mat.length && j > -1 && j < mat[0].length
            && stack[`${i},${j}`] === undefined)
            stack[`${i},${j}`] = [i, j];
    }

    let res = new Array(mat.length);
    for (let i = 0; i < res.length; i++) {
        res[i] = new Array(mat[0].length);
    }

    let stack = {};
    let dist = 0;
    for (let o_i = 0; o_i < mat.length; o_i++) {
        for (let o_j = 0; o_j < mat[0].length; o_j++) {
            stack[`${o_i},${o_j}`] = [o_i, o_j];
            let new_stack = {};
            dist = 0;
            let keys = Object.values(stack);
            while (keys.length > 0) {
                for (const pair of keys) {
                    if (mat[pair[0]][pair[1]] === 0) {
                        res[o_i][o_j] = dist;
                        new_stack = {};
                        break;
                    } else {
                        add_to_stack(mat, new_stack, pair[0] + 1, pair[1]);
                        add_to_stack(mat, new_stack, pair[0] - 1, pair[1]);
                        add_to_stack(mat, new_stack, pair[0], pair[1] + 1);
                        add_to_stack(mat, new_stack, pair[0], pair[1] - 1);
                    }
                }
                dist++;
                stack = new_stack;
                keys = Object.values(stack);
            }
        }
    }
    return res;
};

/**
 * 
 */
export class MapSum {
    constructor() {
        this.dict = {};
        this.keys = [];
    }

};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    if (this.dict[key] === undefined) {
        this.keys.push(key);
        this.keys.sort();
    }
    this.dict[key] = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let re = new RegExp("^" + prefix);
    let index = this.keys.findIndex((val) => re.test(val));
    let sum = 0;
    if (index > -1 && index < this.keys.length) {
        while (re.test(this.keys[index])) {
            sum += this.dict[this.keys[index]];
            index++;
        }
    }
    return sum;
};

/**
 * @param {number[]} height
 * @return {number}
 */
export function trap(height) {
    if (height.length == 0) return 0;
    let s = 0;
    let e = height.length - 1;
    let level = Math.min(height[0], height[height.length - 1]);
    let vol = level * (height.length - 1);
    let i = height[e] > height[s] ? s : e;
    while (s < e) {
        vol -= Math.min(level, height[i]);
        if (height[i] > level) {
            const new_level = Math.min(height[s], height[e]);
            vol += (new_level - level) * (e - s - 1);
            level = new_level;
        }
        if (height[s] > height[e]) {
            e--;
            i = e;
        } else {
            s++;
            i = s;
        }
    }

    return vol;


    // let start = 0;
    // let totalVol = height[0] * (height.length - 2);
    // let vol = 0;
    // debugger;
    // for (let i = 1; i < height.length; i++) {
    //     if (height[i] >= height[start]) {
    //         totalVol += vol;
    //         vol = 0;
    //         start = i;
    //     } else {
    //         if (height[i] <= height[i - 1])
    //             vol += height[start] - height[i];
    //         else if (height[i] > height[i - 1]) {
    //             const volDiff = vol - (height[start] - height[i]) * (i - 1 - start);
    //             totalVol += volDiff;
    //             vol += height[start] - height[i];
    //             vol -= volDiff;
    //         }
    //     }
    // }
    // return totalVol;
};
