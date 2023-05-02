const str1 = "hello";
const str2 = "lelho";

function checkanagram(string1, string2) {
  let counter = {};
  if (string1.length !== string2.length) {
    return "length not match";
  }
  for (const item of string1) {
    counter[item] = (counter[item] || 0) + 1;
    // this will create map
    console.log(counter)  
  }
  console.log(counter);
  for (const items of string2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
    // this wil check items value in chrater if this will zero then itll will return false value 
  }
  return true;
}

const s = checkanagram(str1, str2);
console.log(s);
