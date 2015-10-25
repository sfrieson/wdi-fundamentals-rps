////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move= move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move= move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove){
		winner= 'tie';
	}else if (playerMove === 'rock'){
		if (computerMove === 'paper'){
			winner='computer';
		}else {
			winner='player';
		}
	}else if (playerMove === 'paper'){
		if (computerMove === 'scissor'){
			winner='computer';
		}else {
			winner='player';
		}
	}else if (playerMove === 'scissor'){
		if (computerMove === 'rock'){
			winner='computer';
		}else {
			winner='player';
		}
	}
	
	
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors!");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
	for (var round=1; playerWins<5 && computerWins<5; round++){
		var play=getPlayerMove();
		var comp=getComputerMove();
		var winner=getWinner(play, comp);
	    console.log("In round "+round+", Player chose "+play+" and the computer chose "+comp+". The winner is the "+winner+".");
		if (winner==="player"){
			playerWins++;
		}else {
			computerWins++;
		}
		
	}
	return [playerWins, computerWins];
}

alert("The score was "+playToFive()+ "( Player, Computer).");