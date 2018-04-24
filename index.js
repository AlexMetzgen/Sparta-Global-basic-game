var playerDisplayScore=0;
var computerDisplayScore=0;
var matches=0;
while(matches<5){

  //ask the player to enter what they want to choose
  var playerChoice =prompt("choose (rock) or (paper) or (scissors)");

  //var computerChoice =prompt("choose (1)rock or (2)papper or (3)scissors");
  var computerChoice = Math.floor((Math.random()*3)+1);

  //based off the numbers the variables are assigned strings
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
}



/*else {
  alert("enter a number between 1-3")
}
}
else {
  alert
}*/
