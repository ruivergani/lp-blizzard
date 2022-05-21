// Swipper Slide
var slide_thumbnail = new Swiper(".slide-thumbnail", {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20, // 20px space between thumbnail
    watchSlidesProgress: true, // check the progress of slide to change accordingly
    breakpoints: { // for responsive
      320: {
        direction: 'horizontal'
      },
      1150: {
        direction: 'vertical'
      }

    }
  });

const progressSlide = document.querySelector('.js-progress'); // get progress bar

var slide_hero = new Swiper(".slide-principal", {
    effect: 'fade', // efeito de fade
    thumbs: { // link the thumnail with slide
        swiper: slide_thumbnail,
    },
    autoplay: { // autoplay for the slide
      delay: 5000,
      disableOnInteraction: false // autoplay nao para de funcionar
    },
    on: { // get some elements from swiper slide
      init : function () { // when slide starts
        progressSlide.classList.remove('animate');
        progressSlide.classList.remove('active');
        progressSlide.classList.add('animate'); // faz a barra crescer
        progressSlide.classList.add('active'); // da opacidade
      }, 
      slideChangeTransitionStart : function (){ // when the transition start
        progressSlide.classList.remove('animate');
        progressSlide.classList.remove('active');
        progressSlide.classList.add('active');
      }, 
      slideChangeTransitionEnd : function (){ // when the transiction finish
        progressSlide.classList.add('animate'); // um apos o outro - nao pode adicionar junto
      }
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

// Configure the dropdown menu
const btnMenu = document.querySelectorAll('.js-btn-menu');
const MenuDropdown = document.querySelectorAll('.js-menu');

// link which menu dropdown you need to click
btnMenu.forEach((btn, index) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault(); // negar o comportamento da tag A

    // remove from all the active
    MenuDropdown.forEach(itemMenu => {
      itemMenu.classList.remove('active');
      // if the user leave mouse from the menu section => close the event
      itemMenu.addEventListener('mouseleave', () => {
        itemMenu.classList.remove('active');
        btnMenu.forEach(itemBtn => {
          itemBtn.classList.remove('active');
        })
      })
    })
    // remove the class active from all
    btnMenu.forEach(itemBtn => {
      itemBtn.classList.remove('active');
    })
    // put active class to one menu
    btn.classList.add('active');
    // add active
    MenuDropdown[index].classList.add('active');
  })
})

// this is the progress bar
