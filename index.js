var playerDisplayScore=0;
var computerDisplayScore=0;
var matches=0;
while(matches<3){
  //ask the player to enter what they want to choose
  var playerChoice =prompt("choose (rock) or (paper) or (scissors)");
  //choosen a ranim number between 1 and 3 for the computer
  var computerChoice = Math.floor((Math.random()*3)+1);
  //based off the computerchoice number  the variables are assigned strings
  if( computerChoice == 1 ){
    computerChoice = "rock" ;
  }
  else if( computerChoice == 2 ){
    computerChoice ="paper";
  }
  else{
    computerChoice = "scissors";
  }
  //tied
  if(( playerChoice == "rock" && computerChoice == "rock" )||( playerChoice == "paper" && computerChoice == "paper" )||( playerChoice == "scissors" && computerChoice == "scissors" )){
    playerDisplayScore++;
    computerDisplayScore++;
    matches++;
    alert("Draw " + playerChoice + " vs " + computerChoice + " Your score " + playerDisplayScore + " - " + computerDisplayScore + " Computer score");
  }
  //win
  else if(( playerChoice == "rock" && computerChoice == "scissors" )||( playerChoice == "paper" && computerChoice == "rock" )||( playerChoice == "scissors" && computerChoice == "paper" )){
    playerDisplayScore++;
    matches++;
    alert("You Win " + playerChoice + " vs " + computerChoice + " Your score " + playerDisplayScore + " - " + computerDisplayScore + " Computer score");
  }
  //lose
  else if(( playerChoice == "rock" && computerChoice == "paper" )||( playerChoice == "paper" && computerChoice == "scissors" )||( playerChoice == "scissors" && computerChoice == "rock" )){
    computerDisplayScore++;
    matches++;
    alert("You lose " + playerChoice + " vs " + computerChoice + " Your score " + playerDisplayScore + " - " + computerDisplayScore + " Computer score");
  }
  //detects that is the player or computer has a score of 2 whihc is greater than the opponent so they can win as its the best out of 3
  if ((computerDisplayScore==2&&playerDisplayScore<2)||(playerDisplayScore==2&&computerDisplayScore<2)){
    matches=3;
  }
  //when 3 matches have been played it shows who the winner is and asks if you want to play again
  if(matches==3){
    endResult();
  }
}
//shows winner
function endResult(){
  if(computerDisplayScore>playerDisplayScore){
    alert("Computer wins");
  }
  else if (computerDisplayScore<playerDisplayScore) {
    alert("You win");
  }
  else if (computerDisplayScore==playerDisplayScore) {
    alert("Its a draw")
  }
  //restarts the game
  restart();
}
function restart(){
  var retry=  prompt('Play again? (yes) or (no)');
  if (retry=="yes") {
    matches=0;
    computerDisplayScore=0;
    playerDisplayScore=0;
  }
  else {
    alert("GoodBye comeback soon");
  }
}
