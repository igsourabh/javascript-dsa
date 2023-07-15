function checkisprime(params) {
    let num = params;
    let result = true;
  
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        result = false;
      }
    }
    return result;
  }
  
  var countPrimes = function (n) {
    let result = [];
  
    for (let index = 2; index < n; index++) {
      let d = checkisprime(index);
      if (d) {
        result[result.length] = index;
      }
    }
    return result.length;
  };
  
  console.log(countPrimes(499979));
  