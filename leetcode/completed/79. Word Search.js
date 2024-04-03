/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let markBoard = [];
  let i = 0;
  do {markBoard.push(new Array(board[0].length).fill(false)); i++} while (i < board.length);

  i = 0
  
  do {
    let j = 0;
    do {
      if(board[i][j] == word[0]){
        markBoard[i][j] = true

        if(checkNearbyLetters(i, j, 0)){
          return true
        } else {
          markBoard[i][j] = false
        }
      }
      j++
    } while (j < board[i].length);
    i++
  } while (i < board.length);

  return false

  function checkNearbyLetters(i, j, currentLetterIndex){
    if(currentLetterIndex == word.length - 1) return true

    if(board[i - 1]?.[j] == word[currentLetterIndex + 1] && markBoard[i - 1]?.[j] == false){
      markBoard[i - 1][j] = true
      if(checkNearbyLetters(i - 1, j, currentLetterIndex + 1)){
        return true
      } else {
        markBoard[i - 1][j] = false
      }
    }
    
    if(board[i + 1]?.[j] == word[currentLetterIndex + 1] && markBoard[i + 1]?.[j] == false){
      markBoard[i + 1][j] = true
      if(checkNearbyLetters(i + 1, j, currentLetterIndex + 1)){
        return true
      } else {
        markBoard[i + 1][j] = false
      }
    }
    
    if(board[i][j - 1] == word[currentLetterIndex + 1] && markBoard[i][j - 1] == false){
      markBoard[i][j - 1] = true
      if(checkNearbyLetters(i, j - 1, currentLetterIndex + 1)){
        return true
      } else {
        markBoard[i][j - 1] = false
      }
    }
    
    if(board[i][j + 1] == word[currentLetterIndex + 1] && markBoard[i][j + 1] == false){
      markBoard[i][j + 1] = true
      if(checkNearbyLetters(i, j + 1, currentLetterIndex + 1)){
        return true
      } else {
        markBoard[i][j + 1] = false
      }
    }

    return false
  }
};
// console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"))
console.log(exist([["a","b"]],"ba"))

/**
 * ["A","B","C","E"]
 * ["S","F","C","S"]
 * ["A","D","E","E"]
 */