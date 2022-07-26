// https://leetcode.com/problems/reverse-integer/
var reverse = function(x) {
  xStr = x.toString();
  let xStrReverse = "";

  if (x < 0) xStrReverse = "-";

  for (let i = 0; i < xStr.length; i++) {
    xStrReverse += `${xStr.charAt(xStr.length-1-i)}`;
  }

  let xReverse = parseInt(xStrReverse, 10);

  if (xReverse < Math.pow(-2, 31) || xReverse > Math.pow(2, 31) -1) {
    return 0;
  } else {
    return xReverse;
  }
};
