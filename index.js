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
function hasWon(character) {
    if (grid[0][0] === character && grid[0][1] === character && grid[0][2] === character) {
        return true;
    }
    if (grid[1][0] === character && grid[1][1] === character && grid[1][2] === character) {
        return true;
    }    
    if (grid[2][0] === character && grid[2][1] === character && grid[2][2] === character) {
        return true;
    }
    if (grid[0][0] === character && grid[1][0] === character && grid[2][0] === character) {
        return true;
    }    
    if (grid[0][1] === character && grid[1][1] === character && grid[2][1] === character) {
        return true;
    }
    if (grid[0][2] === character && grid[1][2] === character && grid[2][2] === character) {
        return true;
    }
    if (grid[0][0] === character && grid[1][1] === character && grid[2][2] === character) {
        return true;
    }
    if (grid[2][0] === character && grid[1][1] === character && grid[0][2] === character) {
        return true;
    }
    return false;
}

// function finalWin() {
//     if (hasWon("O")) {
//         return true;
//     }
//     if (hasWon("X")) {
//         return true;
//     }
//     return false;
// }

function drawGrid() {
    console.log('', grid[0], '\n', grid[1], '\n', grid[2]);    
}

drawGrid();

// [ORIGINAL]
// let won = false
// while (won === false){
//     let row = prompt('which row would you like to choose?');
//     let column = prompt('which column would you like to choose?');
//     row = Number(row);
//     column = Number(column);
    
//     grid[row - 1][column - 1] = 'x';
//     console.log('', grid[0], '\n', grid[1], '\n', grid[2]);
//     let won = hasWon();
//     if (won) {
//         console.log("You win!");
//     }
// }
// // [ORIGINAL]

let playerCharacter = "X"
let won = false
while (won === false){
    // if (playerCharacter === "X") {
    //     playerCharacter = "O";
    // } else {
    //     playerCharacter = "X";
    // }
    
    let row = prompt(`Player ${playerCharacter}, which row would you like to choose?`);
    let column = prompt('Player ' + playerCharacter + ', which column would you like to choose?');
    row = Number(row);
    column = Number(column);
    if (grid[row - 1][column - 1] === "-") {
        grid[row - 1][column - 1] = playerCharacter;
        drawGrid();
        if (hasWon(playerCharacter) === true) {
            console.log(`Player ${playerCharacter} wins!`);
            won = true;
        }
        playerCharacter = playerCharacter === "X" ? "O" : "X";
    } else {
        console.log("Space already taken");

    }
   
}
    
   



// Working notes: POA:
// 1. Setup github account [DONE]
// 2. Get console log to create a 3 line grid in node [DONE]
// 3. create working win and draw conditions to close out while loop [Not closing out while loop?]
// 4. Setup player X and player O [DONE]

// Notes - fought with git for a while but figured out online, used  rm .git/index.lock
// Can't see why while loop isnt closing out on win condition
// Brain hurting at the thought of 2 players. - Now added 2 players
// won a function at the end?

// Quetions for Tom / next tasks
// 1. while loop close out on victory
// 2. Need to add draw condition
// 3. Not giving win message now - because need a cariable as well as a function
// 4. Block out already chosen spaces in grid and return to prompt for error input (not 0,1 or 2)
// 

    // if (userChoice === randomNumber){
    //     console.log("You win!");
    //     valid = true;
    // } else if (userChoice < randomNumber){
    //     console.log("Too low");
    // } else if (userChoice > randomNumber){
    //     console.log("Too high");
    // }