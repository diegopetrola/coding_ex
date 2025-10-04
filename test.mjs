import {
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
} from "./utils.mjs";
import { expect } from "chai";
import { pushDominoes } from "./utils.mjs";
import { partitionDisjoint } from "./utils.mjs";
import { pruneTree } from "./utils.mjs";
import { sortedArrayToBST } from "./utils.mjs";
import { threeSumClosest } from "./utils.mjs";
import { updateMatrix } from "./utils.mjs";
import { trap } from "./utils.mjs";

describe("PowerOfThree", function () {
  context("1st test", function () {
    it("should return true", function () {
      expect(isPowerOfThree(9)).to.equals(true);
    });
  });

  context("2st test", function () {
    it("should return false", function () {
      expect(isPowerOfThree(45)).to.equals(false);
    });
  });

  context("3st test", function () {
    it("should return true", function () {
      expect(isPowerOfThree(43046721)).to.equals(true);
    });
  });
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
      expect(
        reverseKGroup(arrayToListNode(t.ar), t.k).toArray()
      ).to.deep.equals(t.expected);
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
