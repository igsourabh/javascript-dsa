let input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
let input2 = { a: 2, e: 12, f: 6, d: 10 };

function findSameValue(obj1, obj2) {
  let result = {};
  for (const key in obj1) {
    console.log();
    if (obj1[key] == obj2[key]) {
      result[key] = obj1[key];
    }
  }
  return result;
}

console.log(findSameValue(input1, input2));
