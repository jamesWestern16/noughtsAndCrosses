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
    console.log('\n', grid[0], '\n', grid[1], '\n', grid[2], '\n');    
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
let goesTaken = 0;
let finished = false;

let playerCharacter = prompt("Which player would like to start, X or O?");
if (playerCharacter !== "X" && playerCharacter !== "O" ) {
    playerCharacter = Math.random() < 0.5 ? "X" : "O";
    console.log(`No player selected, player ${playerCharacter} will start`);
}

while (finished === false) {
    // if (playerCharacter === "X") {
    //     playerCharacter = "O";
    // } else {
    //     playerCharacter = "X";
    // }
    
    let row = prompt(`Player ${playerCharacter}, which row would you like to choose?`);
    let column = prompt('Player ' + playerCharacter + ', which column would you like to choose?');
    if (row === "exit") {
        finished = true;
        continue;
    }
    row = Number(row);
    column = Number(column);
    
    if ((row !== 1 && row !== 2 && row !== 3) || (column !== 1 && column !== 2 && column !== 3)) {
        console.log("Please choose a row and column between 1 and 3");
        continue;
    }
    let selectedGridSpace = grid[row - 1][column - 1];
    if (selectedGridSpace === "-" || selectedGridSpace === "X" || selectedGridSpace === "O") {
        
        if (selectedGridSpace === "-") {
            grid[row - 1][column - 1] = playerCharacter;
            drawGrid();
            if (hasWon(playerCharacter) === true) {
                console.log(`Player ${playerCharacter} wins!`);
                finished = true;
            }
            playerCharacter = playerCharacter === "X" ? "O" : "X";
            // goesTaken = goesTaken + 1;
            goesTaken += 1;
            if (goesTaken === 9) {
                console.log("It's a draw!");
                finished = true;
            }
        } else {
            console.log("Space already taken");
        }
    } else {
        console.log("Please choose a row and column between 1 and 3");
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


    // 1. Make not break if wrong row or column entered
    // 2. Let players choose who goes first - only X or O (include lower case and no space etc.)
    // 3. Ascii art grid (Bonus)


