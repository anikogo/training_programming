// https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function(s) {

  if (s.length == 0 || s.length == 1) return s.length;

  let newStr = "";
  let numArr = 0;

  for (let i = 0; i < s.length; i++) {
    if (newStr.indexOf(s.charAt(i)) !== -1) {
      if (numArr < newStr.length) numArr = newStr.length;

      newStr = newStr.slice(newStr.indexOf(s.charAt(i)) + 1);
      newStr += s.charAt(i);
    } else {

      newStr += s.charAt(i);
      if (i === s.length -1 && numArr < newStr.length) numArr = newStr.length;
    }
  }

  return numArr;
};
