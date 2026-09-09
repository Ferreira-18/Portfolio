const homeScreen = document.getElementById('home-screen');
const projectsScreen = document.getElementById('projects-screen');

function hideAllScreens(){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
}

function showHome(){
  hideAllScreens();
  homeScreen.classList.add('active');
  history.pushState(null, '', '#inicio');
}

function showProjects(){
  hideAllScreens();
  projectsScreen.classList.add('active');
  history.pushState(null, '', '#projetos');
}

document.getElementById('go-projects').addEventListener('click', showProjects);
document.getElementById('go-home-projects').addEventListener('click', showHome);