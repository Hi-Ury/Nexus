const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // bolinhas de navegação
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Flexas de navegação
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // autoplay
    autoplay: {
        delay: 3000,
    },

    // Quantidades de slides
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },

    // Alinhas Slides
    centeredSlides: true,

    // Mover com setas do teclado
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

});