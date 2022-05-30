const lightsaber = document.querySelector('#lightsaber');
const blaster = document.querySelector('#blaster');
const force = document.querySelector('#force');
const btns = document.querySelectorAll('a');
const scoreboxA = document.querySelector('.boxA');
const scoreboxB = document.querySelector('.boxB');
const message = document.querySelector('.message');
const clickMessage = document.querySelector('.clickMessage');
const options = ['lightsaber', 'blaster', 'force'];
const reset = document.querySelector('#reset');
const logoContainer = document.querySelector('.logoContainer')
const playerVsCompImg = document.querySelector('.playerVsCompImg')
const playerImg = document.querySelector('.playerImg')
const computerImg = document.querySelector('.computerImg')
let playerScore = 0;
let computerScore = 0;

const resetIt = () => {
  playerScore = 0;
  computerScore = 0;
  scoreboxA.textContent = `Player Score: ${playerScore}`;
  scoreboxB.textContent = `Computer Score: ${computerScore}`;
  message.textContent = "Choose your weapon...";
  clickMessage.textContent = "(by clicking an image below)";
  logoContainer.style.display = 'block';
  playerVsCompImg.style.display = 'none';
}

reset.addEventListener('click', resetIt);

btns.forEach((btn, idx) => btn.addEventListener('click', (e) => {
  const randomNum = Math.floor(Math.random()*3);
  const computerChoice = options[randomNum]; 
  const playerChoice = options[idx];
  const clickMessageUpdate = `${playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1)} vs ${computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1)}`
  logoContainer.style.display = 'none';
  playerVsCompImg.style.display = 'flex';
  switch(playerChoice){
      case 'lightsaber':
      playerImg.src = "https://cdn.glitch.global/da049abd-df12-418e-b340-95d803857dce/lightsaber.png?v=1653848230012";
      break;
      case 'blaster':
      playerImg.src = "https://cdn.glitch.global/da049abd-df12-418e-b340-95d803857dce/blaster.png?v=1653848221775";
      break;
      case 'force':
      playerImg.src = "https://cdn.glitch.global/da049abd-df12-418e-b340-95d803857dce/force.png?v=1653848227055";
      break;
  }
    switch(computerChoice){
      case 'lightsaber':
      computerImg.src = "https://cdn.glitch.global/da049abd-df12-418e-b340-95d803857dce/lightsaber.png?v=1653848230012";
      break;
      case 'blaster':
      computerImg.src = "https://cdn.glitch.global/da049abd-df12-418e-b340-95d803857dce/blaster.png?v=1653848221775";
      break;
      case 'force':
      computerImg.src = "https://cdn.glitch.global/da049abd-df12-418e-b340-95d803857dce/force.png?v=1653848227055";
      break;
  }
  console.log(playerChoice, computerChoice);
  if(playerChoice === 'lightsaber' && computerChoice === 'blaster' || playerChoice === 'blaster' && computerChoice === 'force' || playerChoice === 'force' && computerChoice === 'lightsaber'){
    playerScore++;
    scoreboxA.textContent = `Player Score: ${playerScore}`;
    message.textContent = `Player 1 wins! May the force be with you...`;
    clickMessage.textContent = `${clickMessageUpdate}`;
  } else if (playerChoice === 'blaster' && computerChoice === 'lightsaber' || playerChoice === 'force' && computerChoice === 'blaster' || playerChoice === 'lightsaber' && computerChoice === 'force'){
    computerScore++;
    scoreboxB.textContent = `Computerer Score: ${computerScore}`;
    message.textContent = `The Computer wins! May the force be with you... Next time`;
    clickMessage.textContent = `${clickMessageUpdate}`;
  } else {
    message.textContent = `Draw...`;
    clickMessage.textContent = `${clickMessageUpdate}`;
  }
}));

// btns.forEach((btn, idx) => btn.addEventListener('click', (e) => {
//   const randomNum = Math.floor(Math.random()*3);
//   const computerChoice = options[randomNum]; 
//   const playerChoice = options[idx];
//   const clickMessageUpdate = `${playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1)} vs ${computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1)}`
//   console.log(playerChoice, computerChoice);
//   if(playerChoice === 'lightsaber' && computerChoice === 'blaster' || playerChoice === 'blaster' && computerChoice === 'force' || playerChoice === 'force' && computerChoice === 'lightsaber'){
//     playerScore++;
//     scoreboxA.textContent = `Player Score: ${playerScore}`;
//     message.textContent = `Player 1 wins! May the force be with you...`;
//     clickMessage.textContent = `${clickMessageUpdate}`;
//   } else if (playerChoice === 'blaster' && computerChoice === 'lightsaber' || playerChoice === 'force' && computerChoice === 'blaster' || playerChoice === 'lightsaber' && computerChoice === 'force'){
//     computerScore++;
//     scoreboxB.textContent = `Computerer Score: ${computerScore}`;
//     message.textContent = `The Computer wins! May the force be with you... Next time`;
//     clickMessage.textContent = `${clickMessageUpdate}`;
//   } else {
//     message.textContent = `Draw...`;
//     clickMessage.textContent = `${clickMessageUpdate}`;
//   }
// }));


// const lightsaber = document.querySelector('#lightsaber');
// const blaster = document.querySelector('#blaster');
// const force = document.querySelector('#force');
// const btns = document.querySelectorAll('a');
// const scoreboxA = document.querySelector('.boxA');
// const scoreboxB = document.querySelector('.boxB');
// const message = document.querySelector('.message');

// btns.addEventListener('click', (e) => {
//   let playerScore = 0;
//   let computerScore = 0;
//   const randomNum = Math.floor(Math.random()*3);
//   const options = ['lightsaber', 'blaster', 'force'];
//   const computerChoice = options[randomNum]; 
//   const playerChoice = e.target;
//   console.log(e.target);
//   if(playerChoice === 'lightsaber' && computerChoice === 'blaster' || playerChoice === 'blaster' && computerChoice === 'force' || playerChoice === 'force' && computerChoice === 'lightsaber'){
//     playerScore++;
//     scoreboxA.textContent = `Player Score: ${playerScore}`;
//     message.textContent = `Player 1 wins! May the force be with you...`;
//   } else if (playerChoice === 'blaster' && computerChoice === 'lightsaber' || playerChoice === 'force' && computerChoice === 'blaster' || playerChoice === 'lightsaber' && computerChoice === 'force'){
//     computerScore++;
//     scoreboxB.textContent = `Computerer Score: ${computerScore}`;
//     message.textContent = `The Computer wins! May the force be with you... Next time`;
//   } else {
//     message.textContent = `Draw...`
//   }
// }
// )