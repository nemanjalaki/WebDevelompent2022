// define first player X
let player = "X";
// define empty table 
let table = ["","","","","","","","",""];
// state of the game
let gameActive = true;
// win state
const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
   ];
//selektor

let cell = document.querySelectorAll(".cell");
let statusMessage = document.querySelector(".status");

// messages

const winMsg = () => `Player ${player} has won!`;
const evenMsg = () => `There is no winner!`;
const playerTurn = () => `Player ${player} is on Move!`;

// player on move

statusMessage.innerHTML = playerTurn();

// events

cell.forEach(function(item, index){
    item.addEventListener("click", function(){
        if (item.innerHTML === "" && table.includes("") && gameActive === true){
            item.textContent = player;
            table[index] = player;
            checkState();
        }
    })
});

// player change
function playerChange(){
    if (player === "X"){
        player = "O";
        statusMessage.innerHTML = playerTurn();
    }else{
        player = "X";
        statusMessage.innerHTML = playerTurn();
    }
    return player;
}

// check status 

function checkState(){

    for (let i = 0; i < win.length; i++){
        // console.log(table[win[i][0]]);
        // console.log(table[win[i][1]]);
        // console.log(table[win[i][2]]);
        if (table[win[i][0]] === "X" && table[win[i][1]] === "X" && table[win[i][2]] === "X"){
            // return "Player X won!";
            statusMessage.innerHTML = winMsg();
            gameActive = false;
            return;
            // console.log("Player X won!");
            // return;
        }
        else if(table[win[i][0]] === "O" && table[win[i][1]] === "O" && table[win[i][2]] === "O"){
            // return "Player O won!";
            statusMessage.innerHTML = winMsg();
            gameActive = false;
            return;
            // console.log("Player O won!");
            // return;
        }
        else if (table.includes("") === false){
            // return "Even!";
            statusMessage.innerHTML = evenMsg();
            gameActive = false;
            return;
            // console.log("Even!");
            // return;
        }
    }
    playerChange();
}