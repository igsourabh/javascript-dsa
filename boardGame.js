/* The code is defining a function called `exist` that takes in two parameters: `board` and `word`. */
var exist = function (board, word) {
    let map = {};
    for (let index = 0; index < board.length; index++) {
      const element = board[index];
      for (let j = 0; j < element.length; j++) {
        const element1 = element[j];
        console.log(element1);
        if (map[element1]) {
          map[element1] += 1;
        } else {
          map[element1] = 1;
        }
      }
    }
  
    for (let index = 0; index < word.length; index++) {
      const str = word[index];
      console.log(str);
      if (map[str]) {
        map[str] -= 1;
      } else {
        return false;
      }
    }
    return true;
  };
  
  console.log(
    exist(
      [
        ["a", "b"],
        ["c", "d"],
      ],
      "abcd"
    )
  );
  