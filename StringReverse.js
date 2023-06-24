let str = "hello";
let arr = [1, 2, 3, 4, 5];
function StringReverse(string) {
  let temp = "";
  for (let index = string.length-1; index >= 0; index--) {
    console.log(index);
    const element = string[index];
    temp += element;
  }
  return temp;
}

console.log(StringReverse(str));
