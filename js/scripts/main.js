// Swipper Slide
var slide_thumbnail = new Swiper(".slide-thumbnail", {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20, // 20px space between thumbnail
    watchSlidesProgress: true // check the progress of slide to change accordingly
  });

var slide_hero = new Swiper(".slide-principal", {
    effect: 'fade', // efeito de fade
    thumbs: { // link the thumnail with slide
        swiper: slide_thumbnail,
    },
    autoplay: { // autoplay for the slide
      delay: 5000,
      disableOnInteraction: false // autoplay nao para de funcionar
    }
  });

// Games tab to change
const allFilters = document.querySelectorAll('.js-nav-games li a'); // get the item of list
const tabPane = document.querySelectorAll('.tab-pane-games');


// get the click of the nav for the tabs
allFilters.forEach((filter, index)=>
  filter.addEventListener('click', (Event) =>{
    Event.preventDefault();
     // remove active from all others
     allFilters.forEach(item => {
       item.classList.remove('active');
     })
     tabPane.forEach(item => {
      item.classList.remove('active');
    })
     // add active when click
     tabPane[index].classList.add('active'); // link the index from nav to the tab
     filter.classList.add('active'); // add active to the nav buttons 
  }))

// Configure the modal
const btnOpenModal = document.querySelector('.js-open-modal'); 
const btnCloseModal = document.querySelector('.js-close');

btnOpenModal.addEventListener('click', (Event) => {
  Event.preventDefault();
  let html = document.documentElement;
   // add the class to the html (not to the specific element)
   html.classList.add('show-modal'); // selecting 
})

btnCloseModal.addEventListener('click', (Event) => {
  Event.preventDefault();
  let html = document.documentElement;
   // add the class to the html (not to the specific element)
   html.classList.remove('show-modal'); // selecting 
})
