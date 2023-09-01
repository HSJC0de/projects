const score = JSON.parse(localStorage.getItem('score')) ||{
  heads: 0,
  tails: 0
};

document.querySelector('.score').innerText = `Heads: ${score.heads} Tails: ${score.tails}`;


function saveScore(){
  localStorage.setItem('score', JSON.stringify(score));
}

function flip(){
  const randomNum = Math.floor(Math.random() * 2);
  if (randomNum === 0){
    score.heads++;
  } else{
    score.tails++;
  }
  updateScore();
  saveScore();
}

function updateScore(){
  document.querySelector('.score').innerText = `Heads: ${score.heads} Tails: ${score.tails}`;
}

function reset(){
  score.heads = 0;
  score.tails = 0;
  updateScore();
  localStorage.removeItem('score');
}

function displayStoredScore(){
  console.log(JSON.parse(localStorage.getItem('score')));

}