// https://www.codewars.com/kata/55908aad6620c066bc00002a
function XO(str) {
  const strArr = str.toLowerCase().split("");
  let mismatches = 0;

  for (let i of strArr) {
    if (i === "x") mismatches++;
    if (i === "o") mismatches--;
  }

  return mismatches ? false : true;
}
