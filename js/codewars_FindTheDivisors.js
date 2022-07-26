// https://www.codewars.com/kata/544aed4c4a30184e960010f4
function divisors(integer) {
  let divisors = [];

  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) divisors.push(i);
  }

  if (divisors.length === 0) return (`${integer} is prime`);

  return divisors;
};
