console.log("Welcome to Noughts and Crosses");

const prompt = require('prompt-sync')();
// const n = prompt('How many more times? ');

// console.log(n);

let grid = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
]

console.log(grid);

// grid[1][1] = "x";

console.log(grid);
let row = prompt('which row would you like to choose?');
let column = prompt('which column would you like to choose?');

row = Number(row);
column = Number(column);

grid[row - 1][column - 1] = 'x';

console.log(grid);