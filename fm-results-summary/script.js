let reactionResult = 100;
let memoryResult = 0;
let verbalResult = 0;
let visualResult = 0;
const averageScorePercent = 46; // when calculated from original img it is 46%, not sure if that is how the system works though

function getResult() {
  const reactionArea = document.querySelector('.js-reaction');
  const memoryArea = document.querySelector('.js-memory');
  const verbalArea = document.querySelector('.js-verbal');
  const visualArea = document.querySelector('.js-visual'); 
  const resultArea = document.querySelector('.js-result');
  const scoreArea = document.querySelector('.js-score');
  const percentageArea = document.querySelector('.js-percentage');
  let finalResult = Math.round((reactionResult + memoryResult + verbalResult + visualResult) / 4);

  reactionArea.innerHTML = reactionResult;
  memoryArea.innerHTML = memoryResult;
  verbalArea.innerHTML = verbalResult;
  visualArea.innerHTML = visualResult;
  resultArea.innerHTML = finalResult;

  if(finalResult <= 30) scoreArea.innerHTML = 'Okay';
  else if(finalResult > 30 && finalResult <= 50) scoreArea.innerHTML = 'Fine';
  else if(finalResult > 50 && finalResult <= 70) scoreArea.innerHTML = 'Good';
  else if(finalResult > 71 && finalResult <= 90) scoreArea.innerHTML = 'Great';
  else if(finalResult > 91) scoreArea.innerHTML = 'Excellent';
  else scoreArea.innerHTML = 'unknown';

  if(finalResult >= averageScorePercent) {
    if(Math.round((finalResult / averageScorePercent) * 100) - 100 >= 100){
      percentageArea.innerHTML = 100;
    }
    else{
      percentageArea.innerHTML = Math.round((finalResult / averageScorePercent) * 100) - 100;
    }
  }
  else {
    percentageArea.innerHTML = 0;
  }
}