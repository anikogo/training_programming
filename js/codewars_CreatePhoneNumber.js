// https://www.codewars.com/kata/525f50e3b73515a6db000b83
function createPhoneNumber(numbers){
  let phoneNum = ""
  for (let i = 0; i <= 9 ; i++) {
    if (i === 0) phoneNum += `(`;
    if (i === 3) phoneNum += `) `;
    if (i === 6) phoneNum += `-`;
    phoneNum += numbers[i];
  }

  return phoneNum;
}
