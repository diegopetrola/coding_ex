from typing import List


class Solution:
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

            return [i+1, j-1]

        Max = [0, 0]
        for i in range(1, size):
            pair1 = longestPalindrome(s, i-1, i+1)
            pair2 = longestPalindrome(s, i-1, i)
            bigger = max(pair1, pair2, key=lambda ar: ar[1] - ar[0])
            Max = max(bigger, Max, key=lambda ar: ar[1] - ar[0])

        return s[Max[0]: Max[1]+1]

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
                if nums1[i+index] != nums2[j+index]:
                    return False
                index += 1
            return True

        def checkSubArr(i, j):
            size = j-i
            for index in range(size2-size):
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
                res = max(_findLength(i+1, j),
                          _findLength(i, j-1))
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
            step = max(2*numR - 2, 1)
            complement = step
            if i not in (0, numR-1):
                complement = 2*i
                step -= complement
            alternate = True
            while n < size:
                yield n
                n += step if alternate else complement
                alternate = not alternate

        res = ''
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
            a = nums[index-1] if index-1 > -1 else float('-inf')
            c = nums[index+1] if index+1 < size else float('-inf')

            if nums[index] < a:
                return -1
            if nums[index] < c:
                return 1
            return 0

        size = len(nums)
        l = 0
        r = size
        while l < r:
            i = (l+r)//2
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

        return ''.join(sorted(str, key=lambda c: d.get(c, -1)))


if __name__ == "__main__":
    s = Solution()
    # breakpoint()
    print((s.customSortString('cba', 'abcd')))
