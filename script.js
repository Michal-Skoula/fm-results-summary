console.log('working!');
let reactionResult = 10;
let memoryResult = 10;
let verbalResult = 10;
let visualResult = 9;
const averageScorePercent = 46; // calculated from original img would be 46%, but that doen't really make sense with higher numbers

function getResult() {
  const reactionArea = document.querySelector('.js-reaction');
  const memoryArea = document.querySelector('.js-memory');
  const verbalArea = document.querySelector('.js-verbal');
  const visualArea = document.querySelector('.js-visual'); 
  const resultArea = document.querySelector('.js-result');
  const scoreArea = document.querySelector('.js-score');
  const percentageArea = document.querySelector('.js-percentage');
  const higherLowerArea = document.querySelector('.js-higher-lower');
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
    higherLowerArea.innerHTML = 'higher';
    percentageArea.innerHTML = Math.round((finalResult / averageScorePercent) * 100) - 100;
  }
  else if(finalResult < averageScorePercent) {
    higherLowerArea.innerHTML = 'lower'
    percentageArea.innerHTML = 100 - Math.round((finalResult / averageScorePercent) * 100);
  }
  
  
  /* 
  Okay: 0-30
  Fine: 31 - 50
  Good 51 - 70
  Great - 71 - 90
  Excellent - 91+
  
  */
}