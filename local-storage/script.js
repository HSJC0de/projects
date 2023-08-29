const stats = JSON.parse(localStorage.getItem('stats')) || {
  heads:0 ,
  tails:0 ,
};

function saveStats(){
  localStorage.setItem('stats', JSON.stringify(stats));
}

function headsOrTails(){
  const randomNum = Math.floor(Math.random() * 2)
  if (randomNum === 0){
    stats.heads++;
  } else{
    stats.tails++;
  }
  console.log(randomNum);
  saveStats();
}



function alertStats(){
  alert(JSON.stringify(stats));
}

function reset(){
  localStorage.removeItem('stats');
  stats.heads = 0;
  stats.tails = 0;
}









/*
let timesClicked = localStorage.getItem('timesClicked') || 0;


function ifButtonClicked(){
  timesClicked++;
  console.log(timesClicked);
  localStorage.setItem('timesClicked', timesClicked);
}

function reset(){
  localStorage.removeItem('timesClicked');
  timesClicked = 0;
}

function alertTimesClicked(){
  alert(timesClicked)
}

function logTimesClicked(){
  console.log(timesClicked);
}
*/