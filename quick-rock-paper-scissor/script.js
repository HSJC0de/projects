function compChoice(playerChoice){
  const randomChoice = Math.random()* 3;
  let compAns = '';

  if (randomChoice >= 0 && randomChoice < 1){
    compAns = 'rock';
  } else if (randomChoice >= 1 && randomChoice < 2){
    compAns = 'paper';
  } else{
    compAns = 'scissor';
  }

  if (playerChoice === compAns){
    console.log('Tie: ' + playerChoice);

  } else if (playerChoice === 'rock' && compAns === 'paper'){
    console.log('Loss: Computer Wins with paper');

  } else if (playerChoice === 'paper' && compAns === 'rock'){
    console.log('Win: Player Wins with paper');

  } else if (playerChoice ==='scissor' && compAns ==='paper'){
    console.log('Win: Player Wins with scissor');

  } else if (playerChoice ==='paper' && compAns === 'scissor'){
    console.log('Loss: Computer Wins with scissor');

  } else if (playerChoice ==='rock' && compsAns ==='scissor'){
    console.log('Win: Player wins with rock');

  } else if (playerChoice == 'scissor' && compAns ==='rock'){
    console.log('Loss: Computer wins with rock');
  }
}