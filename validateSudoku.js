var solution =
		[
			[8,6,9,1,2,3,4,7,5],
			[7,2,1,9,4,5,6,3,8],
			[4,3,5,8,6,7,2,1,9],
			[6,1,8,7,9,2,3,5,4],
			[3,5,2,4,8,1,9,6,7],
			[9,7,4,5,3,6,1,8,2],
			[2,4,6,3,5,8,7,9,1],
			[5,9,7,6,1,4,8,2,3],
			[1,8,3,2,7,9,5,4,6]
		]

// Run code here:
// Above is a corret sudoku matrix, see the input return "correct" in the replit link here:
// https://repl.it/IMHG
// Try changing a value in the matrix and you will get an incorrct resonse

function validate (solution) {
	var cube = solution;
	// add groups
	for (var anchor_row = 0; anchor_row < 9; anchor_row += 3) {
      for (var anchor_col = 0; anchor_col < 9; anchor_col += 3) {
        temp_arr_gr = []
        for (var row1 = anchor_row; row1 < (anchor_row + 3); row1++) {
          for (var col1 = anchor_col; col1 < (anchor_col + 3); col1++) {
            temp_arr_gr.push(cube[row1][col1])
          }
        }
        cube.push(temp_arr_gr)
      }
    }
	// add columns
	for (var col2 = 0; col2 < 9; col2++) {
	  var temp_arr_col = [];
		for (var row2 = 0; row2 < 9; row2++) {
		// console.log(cube[row2][col])
		temp_arr_col.push(cube[row2][col2]);
	  }
	  cube.push(temp_arr_col)
	}
	// check solutions
	var correct = '123456789'
	for (var i = 0; i < cube.length; i ++) {
		if (cube[i].sort().join('') != correct) {
		  console.log(cube[i].sort(), correct)
			console.log("incorrect")
			return
		}
	}
	console.log("solution is correct")
}

validate(solution)
