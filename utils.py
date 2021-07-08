from typing import List


class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
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

    def longestPalindrome(self, s: str) -> str:
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


if __name__ == "__main__":
    s = Solution()
    breakpoint()
    print(s.longestPalindrome('ac'))
