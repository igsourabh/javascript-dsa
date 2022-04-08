const string1 = "hello";
const string2 = "leohl";
// map = {h:1 e:1 l:2 o:1}
function getstriganagram(string1, string2) {
  if (string1.length != string2.length) {
    console.log("length not matched");
    return;
  }
  let counter = {};
  for (let items of string1) {
    counter[items] = (counter[items] || 0) + 1;
    // inside key value pair
    //  h :1 and 1 is un defiend because we in insite objects 
    console.log(counter[items]);
  }
  for (let letters of string2) {
    if (!counter[letters]) {
      console.log(counter[letters]);
      return false;
    }
    counter[letters] -= 1.
  }
  return true;
}

const a = getstriganagram(string1, string2);
console.log(a);
