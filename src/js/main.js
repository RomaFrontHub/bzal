// $(function() {
//     $('.menu-wrapper').on('click', function() {
//         $('.hamburger-menu').toggleClass('animate');
//         $('.adaptive').slideToggle();
//     });
// });
new fullpage('#fullpage', {
  autoScrolling: true
})

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 3.3,
  spaceBetween: 60,
  loop: true,
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },
});

const swiperTwo = new Swiper('.swiper-two', {
  direction: 'horizontal',
  slidesPerView: 5,
  loop: true,
  navigation: {
    nextEl: '.arrow-next-two',
    prevEl: '.arrow-prev-two',
  },
});

//bar
let burger = document.querySelectorAll(".other-bar");
let barOne = document.querySelectorAll(".bar-one");
let barTwo = document.querySelectorAll(".bar-two");

for (let i = 0; i < burger.length; i++) {
  burger[i].addEventListener("click", function() {
    burger[i].classList.toggle("other-bar-active");
    barOne[i].classList.toggle("bar-one-active");
    barTwo[i].classList.toggle("bar-two-active");
  });
}