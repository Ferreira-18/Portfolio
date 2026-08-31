

// Efeito "escrevendo código"
const phrases = [
  'const dev = "Felipe Ferreira";',
  'const curso = "Análise e Desenvolvimento\n de Sistemas";'
];

const TYPE_SPEED = 45;   // ms por caractere ao digitar
const DELETE_SPEED = 25; // ms por caractere ao apagar
const HOLD_TIME = 1400;  // pausa com a linha completa
const GAP_TIME = 400;    // pausa com a linha vazia antes da próxima

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

// Navegação entre telas 
const homeScreen = document.getElementById('home-screen');
const projectsScreen = document.getElementById('projects-screen');

function showProjects(){
  homeScreen.classList.remove('active');
  projectsScreen.classList.add('active');
  history.pushState(null, '', '#projetos');
}
function showHome(){
  projectsScreen.classList.remove('active');
  homeScreen.classList.add('active');
  history.pushState(null, '', '#inicio');
}

document.getElementById('go-projects').addEventListener('click', showProjects);
document.getElementById('go-home').addEventListener('click', showHome);

window.addEventListener('popstate', () => {
  if(location.hash === '#projetos') showProjects();
  else showHome();
});

if(location.hash === '#projetos') showProjects();