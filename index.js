/**
 * It loops through the array from the end to the beginning, and for each element, it checks if the
 * index is greater than or equal to the position, and if so, it sets the element at the next index to
 * the current element, and if the index is equal to the position, it sets the element at the current
 * index to the number to be inserted.
 * @param data - the array you want to insert into
 * @param position - the position in the array where you want to insert the number
 * @returns [ 11, 22, 444, 33, 44, 55 ]
 */
const arr = [11, 22, 33, 44, 55];
function insertnumberinarry(data, position) {
  for (let i = data.length - 1; i >= 0; i--) {
    if (i >= position) {
      data[i + 1] = data[i];
      if (i == position) {
        data[i] = 444;
      }
    }
  }
  return data;
}

const data = insertnumberinarry(arr, 3);
console.log(data);
