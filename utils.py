from collections import deque
from typing import List
from collections import defaultdict


class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        memo = {}

        def dfs(cur: int = 0, d: int = 0):
            if d == len(nums):
                return 1 if cur == target else 0
            if (cur, d) in memo:
                return memo[(cur, d)]

            memo[(cur, d)] = dfs(cur - nums[d], d + 1) + dfs(cur + nums[d], d + 1)
            return memo[(cur, d)]

        return dfs(0, 0)

    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        """
        Return the kth smallest element in a square matrix
        """
        d = {}
        size = len(matrix[0])
        n = 0
        for i in range(size):
            for j in range(i, size):
                val = d.get(matrix[i][j], 0)
                d[matrix[i][j]] = val + 1
                if i == j:
                    continue
                val = d.get(matrix[j][i], 0)
                d[matrix[j][i]] = val + 1
                n += 1
                if n > k:
                    break

        keys = list(d.keys())
        keys.sort()
        n = 0
        for key in keys:
            n += d[key]
            if n >= k:
                return key

        return matrix[-1][-1]

    def permute(self, nums: List[int]) -> List[List[int]]:
        """
        Return all permutations os :nums:
        """
        if len(nums) == 1:
            return [nums[:]]

        res = []
        for i in range(len(nums)):
            head = nums.pop(i)
            perm = self.permute(nums)

            for ar in perm:
                ar.append(head)
            res.extend(perm)
            nums.insert(i, head)

        return res

    def longestPalindrome(self, s: str) -> str:
        """
        Return the longest palyndrome inside 's'
        """
        size = len(s)

        def longestPalindrome(s, i, j):
            while i >= 0 and j < size:
                if s[i] != s[j]:
                    break
                i -= 1
                j += 1

            return [i + 1, j - 1]

        Max = [0, 0]
        for i in range(1, size):
            pair1 = longestPalindrome(s, i - 1, i + 1)
            pair2 = longestPalindrome(s, i - 1, i)
            bigger = max(pair1, pair2, key=lambda ar: ar[1] - ar[0])
            Max = max(bigger, Max, key=lambda ar: ar[1] - ar[0])

        return s[Max[0] : Max[1] + 1]

    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
        """
        Not finished yet
        """
        size1 = len(nums1)
        size2 = len(nums2)
        maxSub = 0

        def check(i, j, size):
            index = 0
            while index < size:
                if nums1[i + index] != nums2[j + index]:
                    return False
                index += 1
            return True

        def checkSubArr(i, j):
            size = j - i
            for index in range(size2 - size):
                if check(i, index, size):
                    # maxSub = max(maxSub, size)
                    return True
            return False

        def _findLength(i, j):
            if i >= j:
                return 0

            if checkSubArr(i, j):
                return len(nums2)
            else:
                res = max(_findLength(i + 1, j), _findLength(i, j - 1))
                return res

        breakpoint()
        return _findLength(0, len(nums1))

    def convert(self, s: str, numRows: int) -> str:
        """
        Return a zig zag pattern of a strin

        More info: https://leetcode.com/problems/zigzag-conversion/
        """

        def zigzag_gen(i, numR, size):
            n = i
            step = max(2 * numR - 2, 1)
            complement = step
            if i not in (0, numR - 1):
                complement = 2 * i
                step -= complement
            alternate = True
            while n < size:
                yield n
                n += step if alternate else complement
                alternate = not alternate

        res = ""
        size = len(s)

        for i in range(numRows):
            for j in zigzag_gen(i, numRows, size):
                res += s[j]

        return res

        # for i in range(numRows):
        #     res += ''.join([s[c] for c in range(i, size, step)])
        #     for j in range():
        #         pass

        #     res += ''.join([s[c] for c in range(i, size, 2)])

        # return res

    def findPeakElement(self, nums: List[int]) -> int:
        """LeetCode: Find Peak Element"""

        def isPeak(nums, index, size):
            a = nums[index - 1] if index - 1 > -1 else float("-inf")
            c = nums[index + 1] if index + 1 < size else float("-inf")

            if nums[index] < a:
                return -1
            if nums[index] < c:
                return 1
            return 0

        size = len(nums)
        l = 0
        r = size
        while l < r:
            i = (l + r) // 2
            p = isPeak(nums, i, size)
            if p > 0:
                l = i
            elif p < 0:
                r = i
            else:
                return i

    def customSortString(self, order: str, str: str) -> str:
        """LeeCode: Custom Sort String"""
        d = {}
        for i, c in enumerate(order):
            d[c] = i

        return "".join(sorted(str, key=lambda c: d.get(c, -1)))

    # def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
    #     class Tree:
    #         def __init__(self, val, parent=None) -> None:
    #             self.val = val
    #             self.parent = parent

    #         def contains(self, s):
    #             c = self
    #             while c.parent:
    #                 if c.val == s:
    #                     return True
    #                 c = c.parent
    #             return False

    #     def sim(s1: str, s2: str):
    #         s = 0
    #         for i in range(len(s1)):
    #             if s1[i] == s2[i]:
    #                 s += 1
    #         return s

    #     dic = {}
    #     wordList.append(beginWord)
    #     for i in range(len(wordList)):
    #         for j in range(i+1, len(wordList)):
    #             if sim(wordList[i], wordList[j]) == len(wordList[0])-1:
    #                 val = dic.get(wordList[i], set())
    #                 val.add(wordList[j])
    #                 val2 = dic.get(wordList[j], set())
    #                 val2.add(wordList[i])
    #                 dic[wordList[i]] = val
    #                 dic[wordList[j]] = val2
    #     wordList.pop()
    #     # breakpoint()
    #     q = [Tree(beginWord)]
    #     end_nodes = []
    #     level = 0
    #     while q:
    #         print(level := level+1)
    #         new_q = []
    #         # breakpoint()
    #         for node in q:
    #             for val in dic[node.val]:
    #                 if not node.contains(val):
    #                     new_q.append(Tree(val, node))

    #             # for word in wordList:
    #             #     if not node.contais(word) and sim(node.val, word) == len(word)-1:
    #             #         new_q.append(Tree(word, parent=node))
    #             #         if word == endWord:
    #             #             end_nodes.append(new_q[-1])
    #         q = new_q
    #         if end_nodes != []:
    #             break

    #     res = []
    #     for node in end_nodes:
    #         c = node
    #         ar = []
    #         while c.parent:
    #             ar.append(c.val)
    #             c = c.parent
    #         ar.reverse()
    #         res.append(ar)
    #     return res


if __name__ == "__main__":
    s = Solution()
    # breakpoint()
    # beginWord = "hit"
    # endWord = "cog"
    # wordList = ["hot", "dot", "dog", "lot", "log"]
    beginWord = "cet"
    endWord = "ism"
    wordList = [
        "kid",
        "tag",
        "pup",
        "ail",
        "tun",
        "woo",
        "erg",
        "luz",
        "brr",
        "gay",
        "sip",
        "kay",
        "per",
        "val",
        "mes",
        "ohs",
        "now",
        "boa",
        "cet",
        "pal",
        "bar",
        "die",
        "war",
        "hay",
        "eco",
        "pub",
        "lob",
        "rue",
        "fry",
        "lit",
        "rex",
        "jan",
        "cot",
        "bid",
        "ali",
        "pay",
        "col",
        "gum",
        "ger",
        "row",
        "won",
        "dan",
        "rum",
        "fad",
        "tut",
        "sag",
        "yip",
        "sui",
        "ark",
        "has",
        "zip",
        "fez",
        "own",
        "ump",
        "dis",
        "ads",
        "max",
        "jaw",
        "out",
        "btu",
        "ana",
        "gap",
        "cry",
        "led",
        "abe",
        "box",
        "ore",
        "pig",
        "fie",
        "toy",
        "fat",
        "cal",
        "lie",
        "noh",
        "sew",
        "ono",
        "tam",
        "flu",
        "mgm",
        "ply",
        "awe",
        "pry",
        "tit",
        "tie",
        "yet",
        "too",
        "tax",
        "jim",
        "san",
        "pan",
        "map",
        "ski",
        "ova",
        "wed",
        "non",
        "wac",
        "nut",
        "why",
        "bye",
        "lye",
        "oct",
        "old",
        "fin",
        "feb",
        "chi",
        "sap",
        "owl",
        "log",
        "tod",
        "dot",
        "bow",
        "fob",
        "for",
        "joe",
        "ivy",
        "fan",
        "age",
        "fax",
        "hip",
        "jib",
        "mel",
        "hus",
        "sob",
        "ifs",
        "tab",
        "ara",
        "dab",
        "jag",
        "jar",
        "arm",
        "lot",
        "tom",
        "sax",
        "tex",
        "yum",
        "pei",
        "wen",
        "wry",
        "ire",
        "irk",
        "far",
        "mew",
        "wit",
        "doe",
        "gas",
        "rte",
        "ian",
        "pot",
        "ask",
        "wag",
        "hag",
        "amy",
        "nag",
        "ron",
        "soy",
        "gin",
        "don",
        "tug",
        "fay",
        "vic",
        "boo",
        "nam",
        "ave",
        "buy",
        "sop",
        "but",
        "orb",
        "fen",
        "paw",
        "his",
        "sub",
        "bob",
        "yea",
        "oft",
        "inn",
        "rod",
        "yam",
        "pew",
        "web",
        "hod",
        "hun",
        "gyp",
        "wei",
        "wis",
        "rob",
        "gad",
        "pie",
        "mon",
        "dog",
        "bib",
        "rub",
        "ere",
        "dig",
        "era",
        "cat",
        "fox",
        "bee",
        "mod",
        "day",
        "apr",
        "vie",
        "nev",
        "jam",
        "pam",
        "new",
        "aye",
        "ani",
        "and",
        "ibm",
        "yap",
        "can",
        "pyx",
        "tar",
        "kin",
        "fog",
        "hum",
        "pip",
        "cup",
        "dye",
        "lyx",
        "jog",
        "nun",
        "par",
        "wan",
        "fey",
        "bus",
        "oak",
        "bad",
        "ats",
        "set",
        "qom",
        "vat",
        "eat",
        "pus",
        "rev",
        "axe",
        "ion",
        "six",
        "ila",
        "lao",
        "mom",
        "mas",
        "pro",
        "few",
        "opt",
        "poe",
        "art",
        "ash",
        "oar",
        "cap",
        "lop",
        "may",
        "shy",
        "rid",
        "bat",
        "sum",
        "rim",
        "fee",
        "bmw",
        "sky",
        "maj",
        "hue",
        "thy",
        "ava",
        "rap",
        "den",
        "fla",
        "auk",
        "cox",
        "ibo",
        "hey",
        "saw",
        "vim",
        "sec",
        "ltd",
        "you",
        "its",
        "tat",
        "dew",
        "eva",
        "tog",
        "ram",
        "let",
        "see",
        "zit",
        "maw",
        "nix",
        "ate",
        "gig",
        "rep",
        "owe",
        "ind",
        "hog",
        "eve",
        "sam",
        "zoo",
        "any",
        "dow",
        "cod",
        "bed",
        "vet",
        "ham",
        "sis",
        "hex",
        "via",
        "fir",
        "nod",
        "mao",
        "aug",
        "mum",
        "hoe",
        "bah",
        "hal",
        "keg",
        "hew",
        "zed",
        "tow",
        "gog",
        "ass",
        "dem",
        "who",
        "bet",
        "gos",
        "son",
        "ear",
        "spy",
        "kit",
        "boy",
        "due",
        "sen",
        "oaf",
        "mix",
        "hep",
        "fur",
        "ada",
        "bin",
        "nil",
        "mia",
        "ewe",
        "hit",
        "fix",
        "sad",
        "rib",
        "eye",
        "hop",
        "haw",
        "wax",
        "mid",
        "tad",
        "ken",
        "wad",
        "rye",
        "pap",
        "bog",
        "gut",
        "ito",
        "woe",
        "our",
        "ado",
        "sin",
        "mad",
        "ray",
        "hon",
        "roy",
        "dip",
        "hen",
        "iva",
        "lug",
        "asp",
        "hui",
        "yak",
        "bay",
        "poi",
        "yep",
        "bun",
        "try",
        "lad",
        "elm",
        "nat",
        "wyo",
        "gym",
        "dug",
        "toe",
        "dee",
        "wig",
        "sly",
        "rip",
        "geo",
        "cog",
        "pas",
        "zen",
        "odd",
        "nan",
        "lay",
        "pod",
        "fit",
        "hem",
        "joy",
        "bum",
        "rio",
        "yon",
        "dec",
        "leg",
        "put",
        "sue",
        "dim",
        "pet",
        "yaw",
        "nub",
        "bit",
        "bur",
        "sid",
        "sun",
        "oil",
        "red",
        "doc",
        "moe",
        "caw",
        "eel",
        "dix",
        "cub",
        "end",
        "gem",
        "off",
        "yew",
        "hug",
        "pop",
        "tub",
        "sgt",
        "lid",
        "pun",
        "ton",
        "sol",
        "din",
        "yup",
        "jab",
        "pea",
        "bug",
        "gag",
        "mil",
        "jig",
        "hub",
        "low",
        "did",
        "tin",
        "get",
        "gte",
        "sox",
        "lei",
        "mig",
        "fig",
        "lon",
        "use",
        "ban",
        "flo",
        "nov",
        "jut",
        "bag",
        "mir",
        "sty",
        "lap",
        "two",
        "ins",
        "con",
        "ant",
        "net",
        "tux",
        "ode",
        "stu",
        "mug",
        "cad",
        "nap",
        "gun",
        "fop",
        "tot",
        "sow",
        "sal",
        "sic",
        "ted",
        "wot",
        "del",
        "imp",
        "cob",
        "way",
        "ann",
        "tan",
        "mci",
        "job",
        "wet",
        "ism",
        "err",
        "him",
        "all",
        "pad",
        "hah",
        "hie",
        "aim",
        "ike",
        "jed",
        "ego",
        "mac",
        "baa",
        "min",
        "com",
        "ill",
        "was",
        "cab",
        "ago",
        "ina",
        "big",
        "ilk",
        "gal",
        "tap",
        "duh",
        "ola",
        "ran",
        "lab",
        "top",
        "gob",
        "hot",
        "ora",
        "tia",
        "kip",
        "han",
        "met",
        "hut",
        "she",
        "sac",
        "fed",
        "goo",
        "tee",
        "ell",
        "not",
        "act",
        "gil",
        "rut",
        "ala",
        "ape",
        "rig",
        "cid",
        "god",
        "duo",
        "lin",
        "aid",
        "gel",
        "awl",
        "lag",
        "elf",
        "liz",
        "ref",
        "aha",
        "fib",
        "oho",
        "tho",
        "her",
        "nor",
        "ace",
        "adz",
        "fun",
        "ned",
        "coo",
        "win",
        "tao",
        "coy",
        "van",
        "man",
        "pit",
        "guy",
        "foe",
        "hid",
        "mai",
        "sup",
        "jay",
        "hob",
        "mow",
        "jot",
        "are",
        "pol",
        "arc",
        "lax",
        "aft",
        "alb",
        "len",
        "air",
        "pug",
        "pox",
        "vow",
        "got",
        "meg",
        "zoe",
        "amp",
        "ale",
        "bud",
        "gee",
        "pin",
        "dun",
        "pat",
        "ten",
        "mob",
    ]
    print(s.findLadders2(beginWord, endWord, wordList))
