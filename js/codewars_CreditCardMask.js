// https://www.codewars.com/kata/5412509bd436bd33920011bc
// return masked string
function maskify(cc) {
  if (cc.length <= 4) return cc;

  let ccarr = cc.split("");

  for (let i in ccarr) {
    if (ccarr.length - i > 4) {
      ccarr.splice (i, 1,'#');
    }
  }

  return ccarr.join("").toString();
}
