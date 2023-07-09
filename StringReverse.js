/**
 * The code defines a function called `checkanagram` that checks if two strings are anagrams of each
 * other.
 * @param string1 - "hello"
 * @param string2 - The `string2` parameter is a string that is being compared to `string1` to check if
 * they are anagrams of each other.
 * @returns The code will return `true` if the two strings `str1` and `str2` are anagrams of each
 * other, and `false` otherwise.
 */
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
