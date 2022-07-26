// https://www.codewars.com/kata/5390bac347d09b7da40006f6
String.prototype.toJadenCase = function () {
  let strArr = this.split(" ");

  const newArr = strArr.map((elem) => {
    return (elem.charAt(0).toUpperCase() + elem.substring(1));
  });

  return newArr.join(" ");
};
