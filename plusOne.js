var plusOne = function (digits) {
  let str = "";

  let arr = [];
  for (let index = 0; index < digits.length; index++) {
    const element = digits[index];
    str += element;
  }

  let add = (BigInt(str) + BigInt(1)).toString();
  console.log(add);
  for (let index = 0; index < add.length; index++) {
    const element = add[index];
    arr[arr.length] = Number(element);
  }
  return arr;
};
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
