**My solution to a popular coding challenge:**

# The challenge: Sudoku Solution Validation

**Description**

Each puzzle consists of a 9x9 Sudoku grid containing areas surrounded by gray or dotted lines. The object is to fill all empty squares so that the numbers 1 to 9 appear exactly once in each row, column and 3x3 box.

The purpose of this exercise is to check whether or not any given solution is correct.

**Requirements**

*The program should check columns rows and 3x3 groups for 1-9 digits with no duplicates.

*The program should accept input formatted as an array of 9 sub arrays each containing 9 elements

**Examples**

VALID INPUT EXAMPLE 1:

The input:

```
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
```
In this case the output should be:

```
"solution is correct"
```

VALID INPUT EXAMPLE 2:

The input:

(notice the only change from example 1 is array[0][8] changed from 5 to 1)

```
[
	[8,6,9,1,2,3,4,7,1],
	[7,2,1,9,4,5,6,3,8],
	[4,3,5,8,6,7,2,1,9],
	[6,1,8,7,9,2,3,5,4],
	[3,5,2,4,8,1,9,6,7],
	[9,7,4,5,3,6,1,8,2],
	[2,4,6,3,5,8,7,9,1],
	[5,9,7,6,1,4,8,2,3],
	[1,8,3,2,7,9,5,4,6]
]
```
In this case the output should be:

```
"incorrect"
```

# My Solution / Getting Started


***Validating Inputs***

 	1) from the validateSudokuChallenge directory run 'node validateSudoku.js'
	2) you can change the solution input on line of 1 of validateSudoku.js
	3) results displayed in console
