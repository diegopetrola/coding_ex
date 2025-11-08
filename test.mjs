import { cases } from "./testCases.js";

import {
  numTrees,
  quickSort,
  mergeSort,
  badNeighbors,
  zigzag,
  coinChange,
  partitionDisjoint,
  pruneTree,
  sortedArrayToBST,
  threeSumClosest,
  updateMatrix,
  trap,
  pushDominoes,
  climbStairsFib,
  combinationSum,
  splitString,
  partition,
  exist,
  subsetsWithDup,
  permute,
  minEatingSpeed,
  findMin,
  searchRot,
  isPowerOfThree,
  romanToInt,
  hammingDistance,
  generate,
  reverseKGroup,
  arrayToListNode,
  TreeNode,
  lowestCommonAncestor,
  search,
  searchInsert,
  subsets,
  minDistanceDP,
  numDecodings,
  numberOfArithmeticSlices,
  maxProduct,
  maximalSquare,
  isInterleave,
  nthSuperUglyNumber,
  integerBreak,
  maxRotateFunction,
} from "./utils.mjs";

import { expect } from "chai";
import { describe, it } from "mocha";

describe("PowerOfThree", function () {
  const testCases = [
    { n: 9, Output: true },
    { n: 45, Output: false },
    { n: 43046721, Output: true },
  ];
  for (let t of testCases) {
    it("should return true", function () {
      expect(isPowerOfThree(t.n)).to.equals(t.Output);
    });
  }
});

describe("romanToInt", function () {
  const testCases = [{ param: "IX", expected: 9 }];

  for (const t of testCases) {
    it(`Testing ${t.param} expecting ${t.expected}`, function () {
      expect(romanToInt(t.param)).to.equals(t.expected);
    });
  }
});

describe("hammingDistance", function () {
  const testCases = [
    { params: [4, 1], expected: 2 },
    { params: [3, 1], expected: 1 },
    { params: [0, 1], expected: 1 },
    { params: [0, 0], expected: 0 },
  ];

  for (const t of testCases) {
    it(`Testing ${t.params} expecting ${t.expected}`, function () {
      expect(hammingDistance(...t.params)).to.equals(t.expected);
    });
  }
});

describe("pascalTriangle", function () {
  const testCases = [
    { params: 1, expected: [[1]] },
    {
      params: 5,
      expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
    },
  ];

  for (const t of testCases) {
    it(`Testing ${t.params} expecting ${t.expected}`, function () {
      expect(generate(t.params)).to.deep.equals(t.expected);
    });
  }
});

describe("reverseKGroup", function () {
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
      expect(reverseKGroup(arrayToListNode(t.ar), t.k).toArray()).to.deep.equals(
        t.expected
      );
    });
  }
});

describe("lowestCommonAncestor", function () {
  let tree1 = new TreeNode(6);
  tree1.left = new TreeNode(2);
  tree1.right = new TreeNode(8);
  tree1.left.left = new TreeNode(0);
  tree1.left.right = new TreeNode(4);
  tree1.left.right.left = new TreeNode(3);
  tree1.left.right.right = new TreeNode(5);

  const testCases = [
    {
      root: tree1,
      p: new TreeNode(2),
      q: new TreeNode(8),
      expected: 6,
    },
    {
      root: tree1,
      p: new TreeNode(2),
      q: new TreeNode(4),
      expected: 2,
    },
    {
      root: tree1,
      p: new TreeNode(3),
      q: new TreeNode(5),
      expected: 4,
    },
    {
      root: tree1,
      p: new TreeNode(7),
      q: new TreeNode(9),
      expected: 8,
    },
  ];

  for (const t of testCases) {
    it(`Testing ${t.root.val} expecting ${t.expected}`, function () {
      expect(lowestCommonAncestor(t.root, t.p, t.q).val).to.equals(t.expected);
    });
  }
});

describe("pushDominoes", function () {
  const testCases = [
    { dominoes: ".L.R...LR..L..", expected: "LL.RR.LLRRLL.." },
    { dominoes: ".", expected: "." },
    { dominoes: "L.", expected: "L." },
    { dominoes: ".L", expected: "LL" },
    { dominoes: "RR.L", expected: "RR.L" },
  ];

  for (const t of testCases) {
    it(`Testing ${t.dominoes} expecting ${t.expected}`, function () {
      expect(pushDominoes(t.dominoes)).to.equals(t.expected);
    });
  }
});

describe("partitionDisjoint", function () {
  const testCases = [
    { nums: [4, 2, 3, 1, 5, 8, 7, 5], expected: 4 },
    { nums: [5, 0, 3, 8, 6], expected: 3 },
    { nums: [1, 2], expected: 1 },
    { nums: [1, 1, 2], expected: 1 },
    { nums: [1, 2, 2], expected: 1 },
    { nums: [1, 1, 1, 0, 6, 12], expected: 4 },
    { nums: [1, 2, 1, 2, 2, 5, 4], expected: 1 },
    { nums: [1, 2, 6, -3, 9, 4, 8, 15], expected: 7 },
    {
      nums: [26, 51, 40, 58, 42, 76, 30, 48, 79, 91],
      expected: 1,
    },
    {
      nums: [81, 27, 39, 71, 54, 88, 85, 90, 93, 93],
      expected: 5,
    },
  ];

  for (const t of testCases) {
    it(`Testing ${t.nums} expecting ${t.expected}`, function () {
      expect(partitionDisjoint(t.nums)).to.equals(t.expected);
    });
  }
});

describe("pruneTree", function () {
  const testCases = [
    {
      root: [1, 1, 0, 1, 1, 0, 1, 0],
      expected: [1, 1, 0, 1, 1, null, 1],
    },
    {
      root: [1, 0, 1, 0, 0, 0, 1],
      expected: [1, null, 1, null, 1],
    },
    { root: [1, null, 0, 0, 1], expected: [1, null, 0, null, 1] },
  ];

  for (const t of testCases) {
    it(`Testing ${t.root} expecting ${t.expected}`, function () {
      expect(pruneTree(TreeNode.fromArray(t.root)).toArray()).to.deep.equals(
        t.expected
      );
    });
  }
});

describe("pruneTree", function () {
  const testCases = [
    {
      root: [1, 1, 0, 1, 1, 0, 1, 0],
      expected: [1, 1, 0, 1, 1, null, 1],
    },
    {
      root: [1, 0, 1, 0, 0, 0, 1],
      expected: [1, null, 1, null, 1],
    },
    { root: [1, null, 0, 0, 1], expected: [1, null, 0, null, 1] },
  ];

  for (const t of testCases) {
    it(`Testing ${t.root} expecting ${t.expected}`, function () {
      expect(pruneTree(TreeNode.fromArray(t.root)).toArray()).to.deep.equals(
        t.expected
      );
    });
  }
});

describe("sortedArrayToBST", function () {
  const testCases = [
    {
      nums: [1, 2, 3, 5, 9],
      expected: [3, 2, 9, 1, null, 5, null],
    },
  ];

  for (const t of testCases) {
    it(`Testing ${t.nums} expecting ${t.expected}`, function () {
      expect(sortedArrayToBST(t.nums).toArray()).to.deep.equals(t.expected);
    });
  }
});

describe("threeSumClosest", function () {
  const testCases = [
    { nums: [-1, 2, 1, -4], target: 1, expected: 2 },
    { nums: [-5, 4, 0, 2], target: 3, expected: 1 },
    { nums: [1, 2, 4, 8, 16, 32, 64, 128], target: 82, expected: 82 },
  ];

  for (const t of testCases) {
    it(`Testing ${t.nums} expecting ${t.expected}`, function () {
      expect(threeSumClosest(t.nums, t.target)).to.equals(t.expected);
    });
  }
});

describe("updateMatrix", function () {
  const testCases = [
    {
      mat: [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
      ],
      expected: [
        [0, 0, 0],
        [0, 1, 0],
        [1, 2, 1],
      ],
    },
    {
      mat: [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ],
      expected: [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ],
    },
    {
      mat: [
        [0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0],
      ],
      expected: [
        [0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0],
        [2, 1, 1, 1, 0],
        [3, 2, 2, 1, 1],
        [3, 2, 1, 0, 0],
      ],
    },
  ];

  for (const t of testCases) {
    it(`Testing ${t.mat} expecting ${t.expected}`, function () {
      expect(updateMatrix(t.mat)).to.deep.equals(t.expected);
    });
  }
});

describe("trapWater", function () {
  const testCases = [
    { height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], expected: 6 },
    { height: [4, 2, 0, 3, 2, 5], expected: 9 },
    { height: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1], expected: 6 },
    { height: [0, 5, 3, 2, 2, 4, 3, 3, 7], expected: 13 },
    { height: [0, 0, 0, 0], expected: 0 },
    { height: [0, 7, 0, 1], expected: 1 },
    { height: [0, 0, 0, 1], expected: 0 },
    { height: [0, 5, 1, 2, 8, 9, 11, 3, 7], expected: 11 },
    { height: [5, 4, 1, 2], expected: 1 },
  ];

  for (const t of testCases) {
    it(`Testing ${t.height} expecting ${t.expected}`, function () {
      expect(trap(t.height)).to.equals(t.expected);
    });
  }
});

describe("search", function () {
  const testCases = [
    { p1: [-1, 0, 3, 5, 9, 12], p2: 9, expected: 4 },
    { p1: [-1, 0, 3, 5, 9, 12], p2: 2, expected: -1 },
    { p1: [-1, 0, 3, 5, 9, 12], p2: 13, expected: -1 },
  ];

  for (const t of testCases) {
    it(`Testing ${t.p1} expecting ${t.expected}`, function () {
      expect(search(t.p1, t.p2)).to.equals(t.expected);
    });
  }
});

describe("searchInsert", function () {
  const testCases = [
    { p1: [-1, 0, 3, 5, 9, 12], p2: 9, expected: 4 },
    { p1: [-1, 0, 3, 5, 9, 12], p2: 2, expected: 2 },
    { p1: [-1, 0, 3, 5, 9, 12], p2: 13, expected: 6 },
    { p1: [-1, 0, 3, 5, 9, 12], p2: -2, expected: 0 },
    { p1: [1, 3, 5, 6], p2: 5, expected: 2 },
    { p1: [1, 3, 5, 6], p2: 2, expected: 1 },
    { p1: [1, 3, 5, 6], p2: 7, expected: 4 },
    { p1: [1, 3], p2: 2, expected: 1 },
  ];
  // const testCases = [{ p1: [1, 3], p2: 2, expected: 1 }];
  for (const t of testCases) {
    it(`Testing ${t.p1} and ${t.p2} expecting ${t.expected}`, function () {
      expect(searchInsert(t.p1, t.p2)).to.equals(t.expected);
    });
  }
});

describe("searchRot", function () {
  const testCases = [
    { p1: [-1, 0, 3, 5, 9, 12], p2: 9, expected: 4 },
    { p1: [-1, 0, 3, 5, 9, 12], p2: 2, expected: -1 },
    { p1: [-1, 0, 3, 5, 9, 12], p2: 13, expected: -1 },
    { p1: [-1, 0, 3, 5, 9, 12], p2: -2, expected: -1 },
    { p1: [1, 3, 5, 6], p2: 5, expected: 2 },
    { p1: [1, 3, 5, 6], p2: 2, expected: -1 },
    { p1: [1, 3, 5, 6], p2: 7, expected: -1 },
    { p1: [1, 3], p2: 2, expected: -1 },
    { p1: [4, 5, 6, 7, 0, 1, 2], p2: 0, expected: 4 },
    { p1: [4, 5, 6, 7, 0, 1, 2], p2: 3, expected: -1 },
    { p1: [1], p2: 0, expected: -1 },
  ];
  // const testCases = [{ p1: [1, 3], p2: 2, expected: 1 }];
  for (const t of testCases) {
    it(`Testing ${t.p1} and ${t.p2} expecting ${t.expected}`, function () {
      expect(searchRot(t.p1, t.p2)).to.equals(t.expected);
    });
  }
});

describe("findMin", function () {
  const testCases = [
    { p1: [-1, 0, 3, 5, 9, 12], expected: -1 },
    { p1: [1, 3, 5, 6], expected: 1 },
    { p1: [1, 3], expected: 1 },
    { p1: [4, 5, 6, 7, 0, 1, 2], expected: 0 },
    { p1: [1], expected: 1 },
    { p1: [3, 4, 5, 1, 2], expected: 1 },
    { p1: [3, 4, 5, 6, 7, 0, 1, 2], expected: 0 },
  ];
  for (const t of testCases) {
    it(`Testing ${t.p1} and ${t.p2} expecting ${t.expected}`, function () {
      expect(findMin(t.p1)).to.equals(t.expected);
    });
  }
});

describe("minEatingSpeed", function () {
  const testCases = [
    { p1: [30, 11, 23, 4, 20], p2: 6, expected: 23 },
    { p1: [30, 11, 23, 4, 20], p2: 5, expected: 30 },
    { p1: [3, 6, 7, 11], p2: 8, expected: 4 },
    { p1: [1, 1, 1, 1], p2: 5, expected: 1 },
  ];
  for (const t of testCases) {
    it(`Testing ${t.p1} and ${t.p2} expecting ${t.expected}`, function () {
      expect(minEatingSpeed(t.p1, t.p2)).to.equals(t.expected);
    });
  }
});

describe("subsets", function () {
  const testCases = [
    { p1: [1, 2], expected: 4 },
    { p1: [1, 2, 3], expected: 8 },
  ];
  for (const t of testCases) {
    it(`Testing ${t.p1} expecting ${t.expected}`, function () {
      expect(subsets(t.p1).length).to.equals(t.expected);
    });
  }
});

describe("permute", function () {
  const testCases = [
    // { p1: [1, 2], expected: 2 },
    { p1: [1, 2, 3], expected: 6 },
  ];
  for (const t of testCases) {
    it(`Testing ${t.p1} expecting ${t.expected}`, function () {
      expect(permute(t.p1).length).to.equals(t.expected);
    });
  }
});

describe("subsetsWithDup", function () {
  const testCases = [
    { p1: [1, 2, 2], expected: 6 },
    { p1: [0], expected: 2 },
  ];
  for (const t of testCases) {
    it(`Testing ${t.p1} expecting ${t.expected}`, function () {
      expect(subsetsWithDup(t.p1).length).to.equals(t.expected);
    });
  }
});

describe("existBoard", function () {
  const testCases = [
    {
      p1: [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      p2: "ABCCED",
      expected: true,
    },
    {
      p1: [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      p2: "SEE",
      expected: true,
    },
    {
      p1: [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      p2: "ABCB",
      expected: false,
    },
    { p1: [["a", "b"]], p2: "ba", expected: true },
    {
      p1: [
        ["a", "b"],
        ["c", "d"],
      ],
      p2: "cdba",
      expected: true,
    },
    {
      p1: [
        ["A", "B", "C", "E"],
        ["S", "F", "E", "S"],
        ["A", "D", "E", "E"],
      ],
      p2: "ABCESEEEFS",
      expected: true,
    },
  ];
  for (const t of testCases) {
    it(`Testing ${t.p1} expecting ${t.expected}`, function () {
      expect(exist(t.p1, t.p2)).to.equals(t.expected);
    });
  }
});

describe("partition131", function () {
  const testCases = [
    { p1: "aabc", expected: 2 }, // [["aa", "b", "c"], ["a", "b", "c"]]
    { p1: "a", expected: 1 },
  ];
  for (const t of testCases) {
    it(`Testing ${t.p1} expecting ${t.expected}`, function () {
      expect(partition(t.p1).length).to.equals(t.expected);
    });
  }
});

describe("splitString", function () {
  const testCases = [
    { p1: "050043", expected: true },
    { p1: "9080701", expected: false },
    { p1: "0010", expected: true },
    { p1: "00", expected: false },
    { p1: "01000000", expected: true },
  ];
  for (const t of testCases) {
    it(`Testing ${t.p1} expecting ${t.expected}`, function () {
      expect(splitString(t.p1)).to.equals(t.expected);
    });
  }
});

describe("combinationSum", function () {
  const testCases = [
    { p1: [2, 3, 6, 7], target: 7, expected: [[2, 2, 3], [7]] },
    {
      p1: [2, 3, 5],
      target: 8,
      expected: [
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5],
      ],
    },
    { p1: [2], target: 1, expected: [] },
  ];
  for (const t of testCases) {
    it(`Testing ${t.p1} and ${t.target} expecting ${t.expected}`, function () {
      expect(combinationSum(t.p1, t.target).length).to.equals(t.expected.length);
    });
  }
});

describe("climbStairs", function () {
  const testCases = [
    { p1: 2, expected: 2 },
    { p1: 3, expected: 3 },
    { p1: 4, expected: 5 },
    { p1: 5, expected: 8 },
  ];

  for (const t of testCases) {
    it(`Testing ${t.p1}  expecting ${t.expected}`, function () {
      expect(climbStairsFib(t.p1)).to.equals(t.expected);
    });
  }
});

describe("coinChange", function () {
  const testCases = [
    { coins: [1, 2, 5], amount: 11, Output: 3 },
    { coins: [2], amount: 3, Output: -1 },
    { coins: [1], amount: 0, Output: 0 },
    { coins: [5, 6], amount: 11, Output: 2 },
  ];

  for (const t of testCases) {
    it(`Testing ${t.coins} expecting ${t.Output}`, function () {
      expect(coinChange(t.coins, t.amount)).to.equals(t.Output);
    });
  }
});

describe("zigzag", function () {
  const testCases = cases.zigzag;

  for (const t of testCases) {
    it(`Testing ${t.p1} expecting ${t.Returns}`, function () {
      expect(zigzag(t.p1)).to.equals(t.Returns);
    });
  }
});

describe("badNeighbors", function () {
  const testCases = cases.badNeighbors;

  for (const t of testCases) {
    it(`Testing ${t.p1} expecting ${t.Returns}`, function () {
      expect(badNeighbors(t.p1)).to.equals(t.Returns);
    });
  }
});

describe("mergeSort", function () {
  const testCases = [
    // { p1: [1, 3, 3, 3, 3, 5], Result: [1, 3, 3, 3, 3, 5].sort((a, b) => b - a) },
    {
      p1: [4, 9, 3, 7, -1, 0],
      Result: [4, 9, 3, 7, -1, 0].sort((a, b) => b - a),
    },
  ];

  for (const t of testCases) {
    it(`Testing ${t.p1} expecting ${t.Result}`, function () {
      expect(mergeSort(t.p1)).to.eqls(t.Result);
    });
  }
});

describe("quickSort", function () {
  const testCases = [
    {
      p1: [7, 12, 9, 8, 4, 11, 8],
      Result: [7, 12, 9, 8, 4, 11, 8].sort((a, b) => a - b),
    },
  ];

  for (const t of testCases) {
    it(`Testing ${t.p1} expecting ${t.Result}`, function () {
      expect(quickSort(t.p1)).to.eqls(t.Result);
    });
  }
});

describe("minDistance", function () {
  const cases = [{ word1: "intention", word2: "execution", Output: 5 }];

  for (let t of cases) {
    it(`Testing ${t.word1} and ${t.word2} expecting ${t.Output}`, () => {
      expect(minDistanceDP(t.word1, t.word2)).to.eqls(t.Output);
    });
  }
});

describe("numDecodings", function () {
  const cases = [
    { s: "12", Output: 2 },
    { s: "206", Output: 1 },
    { s: "406", Output: 0 },
    { s: "000", Output: 0 },
    { s: "226", Output: 3 },
    { s: "106", Output: 1 },
    { s: "2101", Output: 1 },
  ];

  for (let t of cases) {
    it(`Testing ${t.s} expecting ${t.Output}`, () => {
      expect(numDecodings(t.s, t.word2)).to.eqls(t.Output);
    });
  }
});

describe("numTrees", function () {
  const cases = [
    { n: 3, Output: 5 },
    {
      n: 1,
      Output: 1,
    },
    { n: 12, Output: 208012 },
    { n: 5, Output: 42 },
  ];

  for (let t of cases) {
    it(`Testing ${t.n} expecting ${t.Output}`, () => {
      expect(numTrees(t.n)).to.eqls(t.Output);
    });
  }
});

describe("numberOfArithmeticSlices", function () {
  const cases = [
    { nums: [1, 2, 3, 4], Output: 3 },
    { nums: [1, 2, 3, 4, 5], Output: 6 },
    { nums: [1, 2, 3, 4, 5, 6], Output: 10 },
    { nums: [1], Output: 0 },
    { nums: [2, 1, 3, 4, 2, 3], Output: 0 },
    { nums: [1, 2, 3, 8, 9, 10], Output: 2 },
  ];

  for (let t of cases) {
    it(`Testing ${t.nums} expecting ${t.Output}`, () => {
      expect(numberOfArithmeticSlices(t.nums)).to.eqls(t.Output);
    });
  }
});

describe("maxProduct", function () {
  const cases = [
    { nums: [2, 3, -2, 4], Output: 6 },
    // { nums: [-2, 0, -1], Output: 0 },
    // { nums: [-2, 3, -4], Output: 24 },
    // { nums: [1, 2, -1, -4, -2, 5, 0], Output: 40 },
  ];

  for (let t of cases) {
    it(`Testing ${t.nums} expecting ${t.Output}`, () => {
      expect(maxProduct(t.nums)).to.eqls(t.Output);
    });
  }
});

describe("maximalSquare", function () {
  const cases = [
    {
      matrix: [
        ["1", "0", "1", "0", "0"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"],
      ],
      Output: 4,
    },
    { matrix: [["0"]], Output: 0 },
    {
      matrix: [
        ["0", "1"],
        ["1", "0"],
      ],
      Output: 1,
    },
  ];

  for (let t of cases) {
    it(`Testing ${t.matrix} expecting ${t.Output}`, () => {
      expect(maximalSquare(t.matrix)).to.eqls(t.Output);
    });
  }
});

describe("isInterleave", function () {
  const cases = [
    { s1: "aabcc", s2: "dbbca", s3: "aadbbcbcac", Output: true },
    { s1: "aabcc", s2: "dbbca", s3: "aadbbbaccc", Output: false },
    { s1: "", s2: "", s3: "", Output: true },
  ];

  for (let t of cases) {
    it(`Testing ${t.matrix} expecting ${t.Output}`, () => {
      expect(isInterleave(t.s1, t.s2, t.s3)).to.eqls(t.Output);
    });
  }
});

describe("nthSuperUglyNumber", function () {
  const cases = [
    { n: 12, primes: [2, 7, 13, 19], Output: 32 },
    { n: 1, primes: [2, 3, 5], Output: 1 },
  ];

  for (let t of cases) {
    it(`Testing ${t.n}, ${t.primes} expecting ${t.Output}`, () => {
      expect(nthSuperUglyNumber(t.n, t.primes)).to.eqls(t.Output);
    });
  }
});

describe("integerBreak", function () {
  const cases = [
    { n: 8, Output: 18 },
    { n: 3, Output: 2 },
    { n: 58, Output: 1549681956 },
    { n: 33, Output: 177147 },
    { n: 10, Output: 36 },
    { n: 2, Output: 1 },
  ];

  for (let t of cases) {
    it(`Testing ${t.n} expecting ${t.Output}`, () => {
      expect(integerBreak(t.n)).to.eqls(t.Output);
    });
  }
});

describe("maxRotateFunc", function () {
  const cases = [
    { nums: [4, 3, 2, 6], Output: 26 },
    { nums: [100], Output: 0 },
  ];

  for (let t of cases) {
    it(`Testing ${t.nums} expecting ${t.Output}`, () => {
      expect(maxRotateFunction(t.nums)).to.eqls(t.Output);
    });
  }
});
