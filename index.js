console.log("Welcome to Noughts and Crosses");

const prompt = require('prompt-sync')();
// const n = prompt('How many more times? ');

// console.log(n);

let grid = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
]

// console.log(grid);

// // grid[1][1] = "x";

// console.log(grid);
// // let row = prompt('which row would you like to choose?');
// // let column = prompt('which column would you like to choose?');

// // row = Number(row);
// // column = Number(column);

// // grid[row - 1][column - 1] = 'x';

// console.log(grid);
function hasWon() {
    if (grid[0][0] === "x" && grid[0][1] === "x" && grid[0][2] === "x") {
        return true;
    }
    if (grid[1][0] === "x" && grid[1][1] === "x" && grid[1][2] === "x") {
        return true;
    }
    return false;
}


console.log(grid);

let won = false
while (won === false){
    let row = prompt('which row would you like to choose?');
    let column = prompt('which column would you like to choose?');
    row = Number(row);
    column = Number(column);
    
    grid[row - 1][column - 1] = 'x';
    console.log(grid);
    let won = hasWon();
    if (won) {
        console.log("You win!");
    }
}

    // if (userChoice === randomNumber){
    //     console.log("You win!");
    //     valid = true;
    // } else if (userChoice < randomNumber){
    //     console.log("Too low");
    // } else if (userChoice > randomNumber){
    //     console.log("Too high");
    // }