const phrases = [
  'const dev = "Felipe Ferreira";',
  'const curso = "Análise e Desenvolvimento\n de Sistemas";'
];

const TYPE_SPEED = 45;   
const DELETE_SPEED = 25; 
const HOLD_TIME = 1400;  
const GAP_TIME = 400;    

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

const textEl = document.getElementById('rotating-text');

function tick(){
  const current = phrases[phraseIndex];

  if(!isDeleting){
    charIndex++;
    textEl.textContent = current.slice(0, charIndex);

    if(charIndex === current.length){
      isDeleting = true;
      setTimeout(tick, HOLD_TIME);
      return;
    }
    setTimeout(tick, TYPE_SPEED);
  } else {
    charIndex--;
    textEl.textContent = current.slice(0, charIndex);

    if(charIndex === 0){
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(tick, GAP_TIME);
      return;
    }
    setTimeout(tick, DELETE_SPEED);
  }
}
tick();

