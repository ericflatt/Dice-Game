//global variables
 
//Here are my DOM variables
    var player1Name = document.getElementById("player1Name");
    var player2Name = document.getElementById("player2Name");
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var firstDice = document.getElementById("firstDice");
    var secondDice = document.getElementById("secondDice");
    var p1Score = document.getElementById("player1Score");
    var p2Score = document.getElementById("player2Score");

    // var player1 = prompt("what is your name, player 1?");
    // var player2 = prompt("What is your name, player 2?");
    // player1Name.innerHTML = player1+"'s score:";
    // player2Name.innerHTML = player2+"'s score:";

//Here are the main booleans and intergers needed to create the rules for my game
    var turn = false;
    var diceImages = new Array("img/dice1.png", "img/dice2.png", "img/dice3.png", "img/dice4.png", "img/dice5.png", "img/dice6.png");
    var score1 = 0;
    var score2 = 0;
    var win = 50;

//When the new game button is pressed, it resets the names of the players
function newGame() {
    player1 = prompt("what is your name, player 1?");
    player2 = prompt("What is your name, player 2?");
    player1Name.innerHTML = player1+"'s score:";
    player2Name.innerHTML = player2+"'s score:";
    score1 = 0;
    score2 = 0;
    p1Score.innerHTML = score1;
    p2Score.innerHTML = score2;
    player1Name.className = "highlight";
    player2Name.className = null;
}

//This is my main function that handles the logic for dice rolling, and setting up and reseting the game.  
function rollDice() {
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    
//these values iterate throuhg the src link in my dice images array, adjusting to the current die face
    firstDice.src = diceImages[d1-1];
    secondDice.src = diceImages[d2-1];
    status.innerHTML = "You rolled "+diceTotal+".";
    
//Conditions to determine score the players score, and whose turn it is. Also assigns corect die images
        if (turn == false) {
            if (d1 == 1 && d2 == 1) { // if both dice equal 1, set the score to equal 0
                diceTotal = 0;
                turn = false;
                score1 = 0;
                score2 = 0;
                d1 = 0;
                d2 = 0;
                die1.innerHTML = d1;
                die2.innerHTML = d2;
                firstDice.src = diceImages[d1];
                secondDice.src = diceImages[d2];
                p1Score.innerHTML = score1;
                p2Score.innerHTML = score2;
                status.innerHTML += "Game over! "+player1+" rolled double 1's.";
                player1Name.className = "highlight";
                player2Name.className = null;
                alert("Game over! "+player1+" rolled two 1's and lost the game.");
                console.log(diceTotal);
            } else {
                if(d1 == d2) {        //if both dice are the same, double player 1's score
                    diceTotal = diceTotal*2;
                    score1 = score1 + diceTotal;
                    p1Score.innerHTML = score1;
                    status.innerHTML += " Doubled to "+(diceTotal)+".";
                    turn = true;
                    player2Name.className = "highlight";
                    player1Name.className = null;
                    console.log(diceTotal);
                } else{               //If neither are true, add dice total to the player 1's score
                    score1 = score1 + diceTotal;
                    p1Score.innerHTML = score1;
                    status.innerHTML += " Your Turn "+player2+".";
                    turn = true;
                    player2Name.className = "highlight";
                    player1Name.className = null;
                    console.log(diceTotal);
                }
            }
        } else {
            if (d1 == 1 && d2 == 1) { // if both dice equal 1, set the score to equal 0
                diceTotal = 0;
                turn = false;
                score1 = 0;
                score2 = 0;
                d1 = 0;
                d2 = 0;
                die1.innerHTML = d1;
                die2.innerHTML = d2;
                firstDice.src = diceImages[d1];
                secondDice.src = diceImages[d2];
                p1Score.innerHTML = score1;
                p2Score.innerHTML = score2;
                status.innerHTML += "Game over! "+player2+" rolled double 1's.";
                player1Name.className = "highlight";
                player2Name.className = null;
                alert("Game over! "+player1+" rolled two 1's and lost the game.");
                console.log(diceTotal);
            } else {
                if(d1 == d2) {        //if both dice are the same, double player 2's score
                    diceTotal = diceTotal*2;
                    score2 = score2 + diceTotal;
                    p2Score.innerHTML = score2;
                    status.innerHTML += " Doubled to "+(diceTotal)+".";
                    turn = false;
                    player1Name.className = "highlight";
                    player2Name.className = null;
                    console.log(diceTotal);
                } else {                //If neither are true, add dice total to the player 2's score
                    score2 = score2 + diceTotal;
                    p2Score.innerHTML = score2;
                    status.innerHTML += " Your Turn "+player1+".";
                    console.log(score2);
                    turn = false;
                    player1Name.className = "highlight";
                    player2Name.className = null;
                    console.log(diceTotal);
                }
            }  
        }
//Conditions to reset if game is over
        if (score1 >= win) {
            alert("Game over! "+player1+" wins! "+player1+"'s score was: "+score1);
            var startNewGame = confirm("Would you like to play with new players?");
            score1 = 0;
            score2 = 0;
            d1 = 0;
            d2 = 0;
            die1.innerHTML = d1;
            die2.innerHTML = d2;
            firstDice.src = diceImages[d1];
            secondDice.src = diceImages[d2];
            p1Score.innerHTML = score1;
            p2Score.innerHTML = score2;
            status.innerHTML = " Game over. "+player1+" wins!"+" Roll to play again.";
            if (startNewGame == true) {
                newGame();
            }
        }
        if (score2 >= win) {
            alert("Game Over! "+player2+" wins! "+player1+"'s score was: "+score2);
            var startNewGame = confirm("Would you like to play with new players?");
            score1 = 0;
            score2 = 0;
            d1 = 0;
            d2 = 0;
            die1.innerHTML = d1;
            die2.innerHTML = d2;
            firstDice.src = diceImages[d1];
            secondDice.src = diceImages[d2];
            p1Score.innerHTML = score1;
            p2Score.innerHTML = score2;
            status.innerHTML = " Game over. "+player2+" wins!"+" Roll to play again.";
            player1Name.className = "highlight";
            player2Name.className = null;
            if (startNewGame == true) {
                newGame();
            }
        }
}