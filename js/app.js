let playerOneScore = document.getElementById("player_one_score");
let playerTwoScore = document.getElementById("player_two_score");

let btnStartGame = document.getElementById("btn_start_game");
let btnRollDice = document.getElementById("btn_roll_dice");
let btnRules = document.getElementById("btn_rules");

let playerOneName = document.getElementById("player_one_name");
let playerTwoName = document.getElementById("player_two_name");

let playerOneEvents = document.getElementById("player_one_events");
let playerTwoEvents = document.getElementById("player_two_events");

function startNewGame() {
    playerOneScore.innerHTML = 0;
    playerTwoScore.innerHTML = 0;
    playerOneName.innerHTML = prompt("Enter a name for player one...");
    playerTwoName.innerHTML = prompt("Enter a name for player two...");
    playerOneEvents.innerHTML = "The game is starting";
    playerTwoEvents.innerHTML = "The game is starting";
}

function rollDice() {

}

function rules() {

}