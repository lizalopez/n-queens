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
  var solution = new Board({n : n});
  for (var i = 0; i < n; i ++) {
    solution.togglePiece(i, i); 
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = [];
  var solutionCount = 0;

  function subroutine(rounds, combo) {
    combo = combo || new Board({n : n});

    if (rounds === 0) {
      // solution.push( combo.rows() );
      solutionCount++;
      return;
    }

    for (var ir = 0; ir < n; ir++) {
      for (var ic = 0; ic < n; ic ++) {
        if ( !combo.hasRowConflictAt(ir) && !combo.hasColConflictAt(ic) ) {
          combo.togglePiece(ir, ic);
          subroutine( rounds - 1, combo );
        }
      }
    }
  }
  //base case - n === 0 (for this round) 
    // push combination

  //iterate through n rows, n columns
    //if no conflict
      // recurse(n - 1, toggle rook concat)
  //subroutine(n)
  subroutine(n);
  debugger;
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
