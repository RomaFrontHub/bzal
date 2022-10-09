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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICQoZnVuY3Rpb24oKSB7XHJcbi8vICAgICAkKCcubWVudS13cmFwcGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgJCgnLmhhbWJ1cmdlci1tZW51JykudG9nZ2xlQ2xhc3MoJ2FuaW1hdGUnKTtcclxuLy8gICAgICAgICAkKCcuYWRhcHRpdmUnKS5zbGlkZVRvZ2dsZSgpO1xyXG4vLyAgICAgfSk7XHJcbi8vIH0pO1xyXG5uZXcgZnVsbHBhZ2UoJyNmdWxscGFnZScsIHtcclxuICBhdXRvU2Nyb2xsaW5nOiB0cnVlLFxyXG4gIHNjcm9sbGluZ1NwZWVkOiAxMDAwLFxyXG4gIGFmdGVyTG9hZDogZnVuY3Rpb24oYW5jaG9yLCBpbmRleCl7XHJcbiAgICBpZiAoICQoJy5zZWN0aW9uLWNoYW5nZXInKS5oYXNDbGFzcygnYWN0aXZlJykgKSB7XHJcbiAgICAgICQoJy5oZWFkZXInKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAkKCcuaGVhZGVyLXR3bycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAkKCcuc2VjdGlvbi1jb3VudGVyX19uYW1lJykuY3NzKFwiY29sb3JcIiwgXCIjZmZmXCIpO1xyXG4gICAgICAkKCcuc2VjdGlvbi1jb3VudGVyX19ocicpLmNzcyhcImJhY2tncm91bmRcIiwgXCIjZmZmXCIpO1xyXG4gICAgICAkKCcuc2VjdGlvbi1jb3VudGVyX19udW1iZXInKS5jc3MoXCJjb2xvclwiLCBcIiNmZmZcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcuaGVhZGVyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICQoJy5oZWFkZXItdHdvJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgJCgnLnNlY3Rpb24tY291bnRlcl9fbmFtZScpLmNzcyhcImNvbG9yXCIsIFwiIzAwMFwiKTtcclxuICAgICAgJCgnLnNlY3Rpb24tY291bnRlcl9faHInKS5jc3MoXCJiYWNrZ3JvdW5kXCIsIFwiIzAwMFwiKTtcclxuICAgICAgJCgnLnNlY3Rpb24tY291bnRlcl9fbnVtYmVyJykuY3NzKFwiY29sb3JcIiwgXCIjMDAwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggJCgnLmdlb2dyYXBoeScpLmhhc0NsYXNzKCdhY3RpdmUnKSApIHtcclxuICAgICAgJCgnLnNlY3Rpb24tY291bnRlcl9fbmFtZScpLmh0bWwoXCLQk9CV0J7Qk9Cg0JDQpNCY0K9cIik7XHJcbiAgICAgICQoJy5zZWN0aW9uLWNvdW50ZXJfX251bWJlcicpLmh0bWwoXCIwMVwiKTtcclxuICAgIH1cclxuICAgIGlmICggJCgnLmFib3V0JykuaGFzQ2xhc3MoJ2FjdGl2ZScpICkge1xyXG4gICAgICAkKCcuc2VjdGlvbi1jb3VudGVyX19uYW1lJykuaHRtbChcItCeINCd0JDQoVwiKTtcclxuICAgICAgJCgnLnNlY3Rpb24tY291bnRlcl9fbnVtYmVyJykuaHRtbChcIjAyXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCAkKCcud29yaycpLmhhc0NsYXNzKCdhY3RpdmUnKSApIHtcclxuICAgICAgJCgnLnNlY3Rpb24tY291bnRlcl9fbmFtZScpLmh0bWwoXCLQmtCQ0Jog0JzQqyDQoNCQ0JHQntCi0JDQldCcXCIpO1xyXG4gICAgICAkKCcuc2VjdGlvbi1jb3VudGVyX19udW1iZXInKS5odG1sKFwiMDNcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoICQoJy5zZXJ2aWNlcycpLmhhc0NsYXNzKCdhY3RpdmUnKSApIHtcclxuICAgICAgJCgnLnNlY3Rpb24tY291bnRlcl9fbmFtZScpLmh0bWwoXCLQn9Cg0J7QlNCj0JrQptCY0K9cIik7XHJcbiAgICAgICQoJy5zZWN0aW9uLWNvdW50ZXJfX251bWJlcicpLmh0bWwoXCIwNFwiKTtcclxuICAgIH1cclxuICAgIGlmICggJCgnLnBhcnRuZXJzJykuaGFzQ2xhc3MoJ2FjdGl2ZScpICkge1xyXG4gICAgICAkKCcuc2VjdGlvbi1jb3VudGVyX19uYW1lJykuaHRtbChcItCf0JDQoNCi0J3QldCg0KtcIik7XHJcbiAgICAgICQoJy5zZWN0aW9uLWNvdW50ZXJfX251bWJlcicpLmh0bWwoXCIwNVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoICQoJy5mb290ZXInKS5oYXNDbGFzcygnYWN0aXZlJykgKSB7XHJcbiAgICAgICQoJy5zZWN0aW9uLWNvdW50ZXInKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLnNlY3Rpb24tY291bnRlcicpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcclxuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICBzbGlkZXNQZXJWaWV3OiAzLjMsXHJcbiAgc3BhY2VCZXR3ZWVuOiA2MCxcclxuICBsb29wOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5hcnJvdy1uZXh0JyxcclxuICAgIHByZXZFbDogJy5hcnJvdy1wcmV2JyxcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxMjgwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMuMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNFxyXG4gICAgfSxcclxuICAgIDEzNjU6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMy4zLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDQwXHJcbiAgICB9LFxyXG4gICAgMTY4MDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLjMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogNjBcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyVHdvID0gbmV3IFN3aXBlcignLnN3aXBlci10d28nLCB7XHJcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcbiAgc2xpZGVzUGVyVmlldzogNSxcclxuICBsb29wOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5hcnJvdy1uZXh0LXR3bycsXHJcbiAgICBwcmV2RWw6ICcuYXJyb3ctcHJldi10d28nLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyVGhyZWUgPSBuZXcgU3dpcGVyKCcucGFydG5lcnMtbGlzdCcsIHtcclxuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuYXJyb3ctbmV4dC10aHJlZScsXHJcbiAgICBwcmV2RWw6ICcuYXJyb3ctcHJldi10aHJlZScsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMzYwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTZcclxuICAgIH0sXHJcbiAgICA0ODA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNVxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI0XHJcbiAgICB9LFxyXG4gIH1cclxufSk7XHJcblxyXG4vL2JhclxyXG5sZXQgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vdGhlci1iYXJcIik7XHJcbmxldCBiYXJPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhci1vbmVcIik7XHJcbmxldCBiYXJUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhci10d29cIik7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGJ1cmdlci5sZW5ndGg7IGkrKykge1xyXG4gIGJ1cmdlcltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBidXJnZXJbaV0uY2xhc3NMaXN0LnRvZ2dsZShcIm90aGVyLWJhci1hY3RpdmVcIik7XHJcbiAgICBiYXJPbmVbaV0uY2xhc3NMaXN0LnRvZ2dsZShcImJhci1vbmUtYWN0aXZlXCIpO1xyXG4gICAgYmFyVHdvW2ldLmNsYXNzTGlzdC50b2dnbGUoXCJiYXItdHdvLWFjdGl2ZVwiKTtcclxuICB9KTtcclxufSJdLCJmaWxlIjoibWFpbi5qcyJ9