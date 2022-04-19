// Swipper Slide
var slide_thumbnail = new Swiper(".slide-thumbnail", {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20, // 20px space between thumbnail
    watchSlidesProgress: true // check the progress of slide to change accordingly
  });

var slide_hero = new Swiper(".slide-principal", {
    effect: 'fade', // efeito de fade
    thumbs: {
        swiper: slide_thumbnail,
    }
  });