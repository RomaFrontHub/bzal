// $(function() {
//     $('.menu-wrapper').on('click', function() {
//         $('.hamburger-menu').toggleClass('animate');
//         $('.adaptive').slideToggle();
//     });
// });
new fullpage('#fullpage', {
  autoScrolling: true,
  scrollingSpeed: 1000,
  afterLoad: function(anchor, index){
    if ( $('.section-changer').hasClass('active') ) {
      $('.header').css('display', 'none');
      $('.header-two').css('display', 'block');
      $('.section-counter__name').css("color", "#fff");
      $('.section-counter__hr').css("background", "#fff");
      $('.section-counter__number').css("color", "#fff");
    } else {
      $('.header').css('display', 'block');
      $('.header-two').css('display', 'none');
      $('.section-counter__name').css("color", "#000");
      $('.section-counter__hr').css("background", "#000");
      $('.section-counter__number').css("color", "#000");
    }

    if ( $('.geography').hasClass('active') ) {
      $('.section-counter__name').html("ГЕОГРАФИЯ");
      $('.section-counter__number').html("01");
    }
    if ( $('.about').hasClass('active') ) {
      $('.section-counter__name').html("О НАС");
      $('.section-counter__number').html("02");
    }
    if ( $('.work').hasClass('active') ) {
      $('.section-counter__name').html("КАК МЫ РАБОТАЕМ");
      $('.section-counter__number').html("03");
    }
    if ( $('.services').hasClass('active') ) {
      $('.section-counter__name').html("ПРОДУКЦИЯ");
      $('.section-counter__number').html("04");
    }
    if ( $('.partners').hasClass('active') ) {
      $('.section-counter__name').html("ПАРТНЕРЫ");
      $('.section-counter__number').html("05");
    }

    if ( $('.footer').hasClass('active') ) {
      $('.section-counter').css('display', 'none');
    } else {
      $('.section-counter').css('display', 'flex');
    }
  }
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
  breakpoints: {
    1280: {
      slidesPerView: 3.3,
      spaceBetween: 24
    },
    1365: {
      slidesPerView: 3.3,
      spaceBetween: 40
    },
    1680: {
      slidesPerView: 3.3,
      spaceBetween: 60
    }
  }
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

const swiperThree = new Swiper('.partners-list', {
  direction: 'horizontal',
  slidesPerView: 5,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.arrow-next-three',
    prevEl: '.arrow-prev-three',
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 24
    },
  }
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