document.addEventListener('DOMContentLoaded', ()=> {
    const swiper = new Swiper('.swiper1', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 10000,
        slidesPerView: 1,
        spaceBetween: 0,
        simulateTouch: false, // desactiva los eventos de touch en el contenedor swiper
        allowTouchMove: false,
      });

      const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        speed: 10000,
        slidesPerView: 1,
        spaceBetween: 0,
        simulateTouch: false, // desactiva los eventos de touch en el contenedor swiper
        allowTouchMove: false,
      });

      const swiper3 = new Swiper('.swiper3', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 10000,
        slidesPerView: 1,
        spaceBetween: 0,
        simulateTouch: false, // desactiva los eventos de touch en el contenedor swiper
        allowTouchMove: false,
      });

      const swiper4 = new Swiper('.swiper-divisor', {
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