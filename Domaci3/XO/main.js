// define first player X
let player = "X";
// define empty table 
let table = ["","","","","","","","",""];
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

// events

cell.forEach(function(item, index){
    item.addEventListener("click", function(){
        if (item.innerHTML === "" && table.includes("")){
            item.textContent = player;
            table[index] = player;
        }
        else{
            table = ["","","","","","","","",""];
            player = "X";
        }
        checkState();
        // console.log(index);
        console.log(table);
        playerChange();
    })
});
// player change
function playerChange(){
    if (player === "X"){
        player = "O";
    }else{
        player = "X";
    }
    return player;
}

// check status 

function checkState(){
    for (let i = 0; i < win.length; i++){
        if (table[win[i][0]] === table[win[i][1]] && table[win[i][2]] === "X"){
            return "Player X won!";
            // console.log("Player X won!");
        }
        else if(table[win[i][0]] === table[win[i][1]] && table[win[i][2]] === "O"){
            return "Player O won!";
            // console.log("Player O won!");
        }
        else if (table.includes("") === false){
            return "Even!";
            // console.log("Even!");
        }
    }
}