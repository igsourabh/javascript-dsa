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
  
  /* The line `console.log(isPalindrome(-121));` is calling the `isPalindrome` function and passing
  `-121` as an argument. It then logs the result of the function to the console. In this case, it
  will log `true` because `-121` is a palindrome. */
  console.log(isPalindrome(-121));
  