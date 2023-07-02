var isPalindrome = function (x) {
    let str = x.toString();
    let temp = "";
    for (let index = str.length - 1; index >= 0; index--) {
      const element = str[index];
      // console.log(element);
      temp += element;
    }
  
    if (Number(str) == Number(temp)) {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(isPalindrome(-121));
  