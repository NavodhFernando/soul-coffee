var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});

// Initial render
document.querySelector(`#bg_${swiper.activeIndex}`).style.opacity = 1;

// On Slider Update
swiper.on("slideChange", function () {
  let prevSlide = document.querySelector(`#bg_${swiper.previousIndex}`);
  let activelide = document.querySelector(`#bg_${swiper.activeIndex}`);

  prevSlide.style.transition = "opacity 1s ease";
  prevSlide.style.transitionDelay = "500ms";

  activelide.style.opacity = 1;
  prevSlide.style.opacity = 0;
  activelide.style.transition = "opacity 1s ease";

  if (swiper.activeIndex == 0) {
    document.querySelector(".spinner").style.opacity = 0;
    document.querySelector(".spinner").style.visibility = "hidden";
  }
  else {
    document.querySelector(".spinner").style.opacity = 1;
    document.querySelector(".spinner").style.visibility = "visible";
  }

});


