import pytest
from utils import Solution


data = [
    ([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8, 13),
    ([[-5]], 1, -5),
    ([[1, 2], [1, 3]], 1, 1),
    ([[1, 4], [2, 5]], 2, 2),
]


@pytest.mark.parametrize('param, k , expected', data)
def test_kthSmallest(param, k, expected):
    s = Solution()
    assert s.kthSmallest(param, k) == expected


@pytest.mark.parametrize('st, expected', [
    ("babad", ["bab", "aba"]),
    ("cbbd", ("bb")),
    ("a", ("a")),
    ("ac", ["a", "c"]),
    ("bb", ["bb"]),
    ("babadbab", ("bab", "aba")),
    ("abbcccbbbcaaccbababcbcabca", ("bbcccbb", 'cbababc')),
    ("babaddtattarrattatddetartrateedredividerb", ('ddtattarrattatdd')),
    ("daomdukomcayjwgmmetypncdeixarhbectjcwftjjtwjrctixtrsehegwlfotpljeeqhntacfihecdjysgfmxxbjfeskvvfqdoedfxriujnoeteleftsjgdsagqvcgcdjbxgmguunhbjxyajutohgbdwqtjghdftpvidkbftqbpeahxbfyamonazvubzirhqseetaneptnpjbtrtitttxsyjckjvwtrmuwgidkofvobrwrffzrpnxbectsydbvswstfiqranjzhsebjnmprjoirqkgttahrivkcjtitdcpohwwerwgrdivqbltfnigavydxpmitttjjzyrmpaptkczzgnsovebvxezkkovgqegctxacvjfqwtiycnhartzczcgosiquhmdbljjzyrnmffcwnkyzytnsvyzayrieqyrfpxintbbiyrawxlguzaisedwabpzvevlejadztuclcpwvonehkhknicdksdcnjfaoeaqhcdkdtywilwewadcnaprcasccdcnvdgjdqirrsqwzhqqorlhbgpelpupdvuynzybcqkffnnpocidkkigimsa",
     ('daomdukomcayjwgmmetypncdeixarhbectjcwftjjtwjrctixtrsehegwlfotpljeeqhntacfihecdjysgfmxxbjfeskvvfqdoedfxriujnoeteleftsjgdsagqvcgcdjbxgmguunhbjxyajutohgbdwqtjghdftpvidkbftqbpeahxbfyamonazvubzirhqseetaneptnpjbtrtitttxsyjckjvwtrmuwgidkofvobrwrffzrpnxbectsydbvswstfiqranjzhsebjnmprjoirqkgttahrivkcjtitdcpohwwerwgrdivqbltfnigavydxpmitttjjzyrmpaptkczzgnsovebvxezkkovgqegctxacvjfqwtiycnhartzczcgosiquhmdbljjzyrnmffcwnkyzytnsvyzayrieqyrfpxintbbiyrawxlguzaisedwabpzvevlejadztuclcpwvonehkhknicdksdcnjfaoeaqhcdkdtywilwewadcnaprcasccdcnvdgjdqirrsqwzhqqorlhbgpelpupdvuynzybcqkffnnpocidkkigimsa'))
])
def test_longestPalindrome(st, expected):
    s = Solution()
    assert s.longestPalindrome(st) in expected
