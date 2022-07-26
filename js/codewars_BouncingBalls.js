// https://www.codewars.com/kata/5544c7a5cb454edb3c000047
function bouncingBall(h,  bounce,  window) {
  if (bounce > 0 && bounce < 1 && window > 0 && window < h) {
    let bouncesNumber = 0;
    while (h > window) {
      bouncesNumber++;
      h = h * bounce;
      if (h > window) {
        bouncesNumber++;
      }
    }
    return bouncesNumber;
  }

  return -1;
}
