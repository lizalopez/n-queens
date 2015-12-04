/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n, board) {
  board = board || new Board ({n: n});
// wrap with diagonal loop]
  for (var i = 0; i < n; i ++) {
      if ( !board.hasAnyRooksConflicts() ) {
          board.togglePiece(i, i);
      }
  }
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var newBoard = new Board({n : n});

  function subroutine(row, board) {
    if (row === n - 1) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < n; i ++) {
      board.togglePiece(row, i);
      if ( !board.hasAnyRooksConflicts() ) {
        subroutine(row + 1, board);
      }
      board.togglePiece(row, i);
    }
  }
  subroutine(0, newBoard);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board ({n: n});
  for (var i = 0; i < n; i ++) {
      if ( !solution.hasAnyQueensConflicts() ) {
          solution.togglePiece(i, i);
      }
  }


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution.rows()));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
