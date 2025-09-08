


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


  
  
});

