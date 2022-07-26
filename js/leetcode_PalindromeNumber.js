// https://leetcode.com/problems/palindrome-number/
var isPalindrome = function(x) {
  let xStr = x.toString()
  for (let i = 0; i <= xStr.length / 2; i++) {
    if (xStr.charAt(i) !== xStr.charAt(xStr.length - 1 - i)) {
      return false;
    }
  }
  return true;
};
