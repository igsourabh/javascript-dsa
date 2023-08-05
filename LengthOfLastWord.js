let str = "hello world";

function lengthOfLastWord(string) {
  let temp = "";
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (element == " ") {
        temp=""
    } else {
      temp += element;
    }
  }
  return temp.length;
}
console.log(lengthOfLastWord(str));
