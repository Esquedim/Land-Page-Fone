
window.addEventListener('load', function() {

  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('.conteiner-lista');
  const icon = menuToggle.querySelector('i'); // pega o ícone dentro do botão
  
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    
    if (menu.classList.contains("show")) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-x")
    }else{
      icon.classList.remove("fa-x")
      icon.classList.add("fa-bars")
    }
  });
  
  
  
});

