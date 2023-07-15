var groupAnagrams = function (strs) {
  let result = {};
  let store = [];
  for (let index = 0; index < strs.length; index++) {
    let temp = [];
    const element = strs[index];
    for (const iterator of element) {
      temp[temp.length] = iterator;
    }
    for (let i = 0; i < temp.length; i++) {
      const element1 = temp[i];
      let j = i - 1;
      while (j >= 0 && temp[j] > element1) {
        temp[j + 1] = temp[j];
        j--;
      }
      temp[j + 1] = element1;
    }
    let tempstr = "";
    for (const iterator of temp) {
      tempstr += iterator;
    }
    result[tempstr]
      ? result[tempstr].push(element)
      : (result[tempstr] = [element]);
  }

  for (const iterator in result) {
    // console.log(result[iterator]);
    store[store.length] = result[iterator];
  }
  return store;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
//output [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]


// var groupAnagrams = function(strs) {
//     let obj = {}
//   for (let index = 0; index < strs.length; index++) {
//     const element = strs[index];
//     let sort =element.split("").sort().join("")
//     obj[sort] ? obj[sort].push(element) : obj[sort]=[element]
  
//   }
//     return Object.values(obj)
//   };
  
//   console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
  