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



window.findNRooksSolution = function(n) {
  var board = board || new Board ({n: n});
// wrap with diagonal loop]
  for (var i = 0; i < n; i ++) {
      if ( !board.hasAnyRooksConflicts() ) {
          board.togglePiece(i, i);
      }
  }
  return board.rows();
  // var solutionCount = 0;
  // var newBoard = new Board({n : n});

  // function numPieces(board) {
  //   return _.reduce(board.rows(), function(memo, row) {
  //     return memo + _.reduce(row, function(memo, col) {
  //       return memo + col;
  //     }, 0);
  //   }, 0);
  // };

  // function subroutine(row, board) {
  //   if (row === n - 1) {
  //     solutionCount++;
  //     if (numPieces(board) === 2) {
  //       return board.rows();
  //     }
  //     // return;
  //   }

  //   for (var i = 0; i < n; i ++) {
  //     board.togglePiece(row, i);
  //     if ( !board.hasAnyRooksConflicts() ) {
  //       subroutine(row + 1, board);
  //     }
  //     board.togglePiece(row, i);
  //   }
  // }

  // var test = subroutine(0, newBoard);
  // console.log('test: ', test);
  // return test;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var newBoard = new Board({n : n});

  function subroutine(row, board) {
    if (row === n) {
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
  // if (n === 0) {
  //   return 1;
  // }
  var solution = new Board ({n: n});
  var results = undefined;
  console.log(solution.rows());
  var findSubroutine = function(row, board) {
    if (row === n) { //row is row index, n is column index
      results = board;
      console.log('results before map:', results, 'at n:', n)
      results =  results.rows().map(function(row) {
        return row.slice();
      });
      console.log('Single solution for ' + n + ' queens:', results);
      return results;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if ( !board.hasAnyQueensConflicts() ) {
        return findSubroutine(row+1, board);
      }
      board.togglePiece(row, i);
    }
  };
  
  if (n === 0 || n === 2 || n === 3) {
    return new Board({n: n}).rows();
  }
  return findSubroutine(0, solution);
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var newBoard = new Board({n : n});

  function subroutine(row, board) {
    if (row === n) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < n; i ++) {
      board.togglePiece(row, i);
      if ( !board.hasAnyQueensConflicts() ) {
        subroutine(row + 1, board);
      }
      board.togglePiece(row, i);
    }
  }
  subroutine(0, newBoard);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
