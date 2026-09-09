const certificadosScreen = document.getElementById('certificados-screen');

function showCertificados(){
  hideAllScreens();
  certificadosScreen.classList.add('active');
  history.pushState(null, '', '#certificados');
}

document.getElementById('go-certificados').addEventListener('click', showCertificados);
document.getElementById('go-home-certificados').addEventListener('click', showHome);

window.addEventListener('popstate', () => {
  if(location.hash === '#projetos') showProjects();
  else if(location.hash === '#certificados') showCertificados();
  else showHome();
});

if(location.hash === '#certificados') showCertificados();
else if(location.hash === '#projetos') showProjects();