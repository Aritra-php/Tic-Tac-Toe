const gameBoard = document.getElementById("box");
const squares = document.getElementsByClassName("square");
const players = ['X','O'];
let currentPlayer = players[0];

const endMessage = document.createElement('h2');
endMessage.textContent = "Player X's Turn";
endMessage.style.textAlign = "center";
gameBoard.after(endMessage); 

//array of winning combinations

const winning_combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


for(let i=0; i<squares.length; i++){
    squares[i].addEventListener('click', ()=> {
        if(squares[i].textContent!==''){
            return;
        }
        squares[i].textContent=currentPlayer;
        if(checkWin(currentPlayer)){
            endMessage.textContent = `Game Over, Player ${currentPlayer} has Won`;
            return;
        }
        if(checkForTie(currentPlayer)){
            endMessage.textContent = "Game Tied!!";
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0]
        if(currentPlayer==players[0]){
            endMessage.textContent="Player X's turn";
        }else if(currentPlayer==players[1]){
            endMessage.textContent="Player O's turn";
        }
    })
}

function checkWin(currentPlayer){
    for(let i=0; i<winning_combinations.length; i++){
        const [a,b,c] = winning_combinations[i];
        if(squares[a].textContent===currentPlayer && squares[b].textContent===currentPlayer && squares[c].textContent===currentPlayer){
            return true;
        }
    }
    return false;
}

function checkForTie(){
    for(let i=0; i<squares.length; i++){
        if(squares[i].textContent===""){
            return false;
        }
    }
    return true; 
}

function restartButton(){
    for(let i=0; i<squares.length; i++){
        squares[i].textContent="";
    }
    endMessage.textContent=" Player X's Turn";
    currentPlayer = players[0];
}
