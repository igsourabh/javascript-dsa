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
  