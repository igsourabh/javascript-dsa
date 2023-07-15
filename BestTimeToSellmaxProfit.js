var maxProfit = function (prices) {
    let temp = 0;
    const buyprice = prices[1];
    for (let index = 2; index < prices.length; index++) {
      const element = prices[index];
      let cal = element - buyprice;
      if (temp<cal) {
        temp = element - buyprice;
      }
    }
    return temp;
  };
  
  console.log(maxProfit([7, 1, 5, 3, 6, 4]));
  