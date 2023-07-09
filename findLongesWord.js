/**
 * The function `findLongestWord` takes a string as input and returns the longest word in that string.
 * @param data - The parameter `data` is a string that contains a sentence or a collection of words.
 * @returns The function `findLongestWord` returns the longest word in the given string.
 */
function findLongestWord(data) {
    let str = data.split(" ");
    let result=str[0]
    for (let index = 0; index < str.length; index++) {
      const element = str[index];
      // console.log(element);
      if (result.length<element.length) {
        result=element
      }
    }
    return result
  }
  console.log(findLongestWord("hi my sourabh name is "));
  