"use strict";var slide_thumbnail=new Swiper(".slide-thumbnail",{slidesPerView:5,direction:"vertical",spaceBetween:20,watchSlidesProgress:!0,breakpoints:{320:{direction:"horizontal"},1150:{direction:"vertical"}}}),slide_hero=new Swiper(".slide-principal",{effect:"fade",thumbs:{swiper:slide_thumbnail},autoplay:{delay:5e3,disableOnInteraction:!1}}),allFilters=document.querySelectorAll(".js-nav-games li a"),tabPane=document.querySelectorAll(".tab-pane-games"),btnOpenModal=(allFilters.forEach(function(t,n){return t.addEventListener("click",function(e){e.preventDefault(),allFilters.forEach(function(e){e.classList.remove("active")}),tabPane.forEach(function(e){e.classList.remove("active")}),tabPane[n].classList.add("active"),t.classList.add("active")})}),document.querySelector(".js-open-modal")),btnCloseModal=document.querySelector(".js-close"),btnMenu=(btnOpenModal.addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.add("show-modal")}),btnCloseModal.addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.remove("show-modal")}),document.querySelectorAll(".js-btn-menu")),MenuDropdown=document.querySelectorAll(".js-menu");btnMenu.forEach(function(t,n){t.addEventListener("click",function(e){e.preventDefault(),MenuDropdown.forEach(function(e){e.classList.remove("active"),e.addEventListener("mouseleave",function(){e.classList.remove("active"),btnMenu.forEach(function(e){e.classList.remove("active")})})}),btnMenu.forEach(function(e){e.classList.remove("active")}),t.classList.add("active"),MenuDropdown[n].classList.add("active")})});