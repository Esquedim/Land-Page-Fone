


window.addEventListener('load', function() {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-next", prevEl: ".swiper-prev" },
    slidesPerView: 2
  });



  const cardsSwiper = new Swiper('.cards-swiper', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }
  });

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

