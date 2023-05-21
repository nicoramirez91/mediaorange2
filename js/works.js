document.addEventListener('DOMContentLoaded', () => {
    const swiper2 = new Swiper('.swiper-work', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 20000,
        slidesPerView: 1,
        spaceBetween: 20,
        simulateTouch: false, // desactiva los eventos de touch en el contenedor swiper
        allowTouchMove: false,
      });

      const swiper3 = new Swiper('.swiper-soluciones', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 10000,
        slidesPerView: 'auto',
        // spaceBetween: 'auto',
        simulateTouch: false, // desactiva los eventos de touch en el contenedor swiper
        allowTouchMove: false,
      });
})