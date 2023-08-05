let str = "the sky is blue";

function ReverseWords(string) {
  let word = "";
  let result = [];
  let final = [];
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (element == " ") {
      console.log(element);
      result[result.length] = word;
      word = "";
    } else {
      word += element;
    }
  }

  for (let index = result.length - 1; index >= 0; index--) {
    const element = result[index];
    console.log(element);
    final[final.length] = element;
  }
  return final;
}

console.log(ReverseWords(str + " "));
