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

//Slider-Image-Navigation
function handleslider() {
  let activeslide = document.querySelector(".swiper-slide-active");
  console.log(activeslide.id)

  let bgimages = document.querySelector(`#bg_${activeslide.id}`);
  console.log(bgimages)

  bgimages.style.opacity = 1;
}

// swiper.on('beforeInit', function () {
//   handleslider();
// });
handleslider(0);
swiper.on('slideChange', function () {
  handleslider(1);
});

