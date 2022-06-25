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
    if (grid[2][0] === "x" && grid[2][1] === "x" && grid[2][2] === "x") {
        return true;
    }
    if (grid[0][0] === "x" && grid[1][0] === "x" && grid[2][0] === "x") {
        return true;
    }    
    if (grid[0][1] === "x" && grid[1][1] === "x" && grid[2][1] === "x") {
        return true;
    }
    if (grid[0][2] === "x" && grid[1][2] === "x" && grid[2][2] === "x") {
        return true;
    }
    if (grid[0][0] === "x" && grid[1][1] === "x" && grid[2][2] === "x") {
        return true;
    }
    if (grid[2][0] === "x" && grid[1][1] === "x" && grid[0][2] === "x") {
        return true;
    }
    return false;
}


console.log('', grid[0], '\n', grid[1], '\n', grid[2]);


let won = false
while (won === false){
    let row = prompt('which row would you like to choose?');
    let column = prompt('which column would you like to choose?');
    row = Number(row);
    column = Number(column);
    
    grid[row - 1][column - 1] = 'x';
    console.log('', grid[0], '\n', grid[1], '\n', grid[2]);
    let won = hasWon();
    if (won) {
        console.log("You win!");
    }
}

// Working notes: POA:
// 1. Setup github account [DONE]
// 2. Get console log to create a 3 line grid in node [DONE]
// 3. create working win and draw conditions to close out while loop [Not closing out while loop?]
// 4. Setup player X and player O
// 


    // if (userChoice === randomNumber){
    //     console.log("You win!");
    //     valid = true;
    // } else if (userChoice < randomNumber){
    //     console.log("Too low");
    // } else if (userChoice > randomNumber){
    //     console.log("Too high");
    // }