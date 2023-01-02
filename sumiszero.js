let array = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  for (let j = 0 + 1; j < array.length; j++) {
    const insideelement = array[j];
    // console.log();
    if (element + insideelement == 0) {
      console.log(element, insideelement,true);
    }
  }
}
