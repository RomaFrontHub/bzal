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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICQoZnVuY3Rpb24oKSB7XHJcbi8vICAgICAkKCcubWVudS13cmFwcGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgJCgnLmhhbWJ1cmdlci1tZW51JykudG9nZ2xlQ2xhc3MoJ2FuaW1hdGUnKTtcclxuLy8gICAgICAgICAkKCcuYWRhcHRpdmUnKS5zbGlkZVRvZ2dsZSgpO1xyXG4vLyAgICAgfSk7XHJcbi8vIH0pO1xyXG5uZXcgZnVsbHBhZ2UoJyNmdWxscGFnZScsIHtcclxuICBhdXRvU2Nyb2xsaW5nOiB0cnVlXHJcbn0pXHJcblxyXG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyJywge1xyXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gIHNsaWRlc1BlclZpZXc6IDMuMyxcclxuICBzcGFjZUJldHdlZW46IDYwLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLmFycm93LW5leHQnLFxyXG4gICAgcHJldkVsOiAnLmFycm93LXByZXYnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyVHdvID0gbmV3IFN3aXBlcignLnN3aXBlci10d28nLCB7XHJcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcbiAgc2xpZGVzUGVyVmlldzogNSxcclxuICBsb29wOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5hcnJvdy1uZXh0LXR3bycsXHJcbiAgICBwcmV2RWw6ICcuYXJyb3ctcHJldi10d28nLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy9iYXJcclxubGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3RoZXItYmFyXCIpO1xyXG5sZXQgYmFyT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iYXItb25lXCIpO1xyXG5sZXQgYmFyVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iYXItdHdvXCIpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBidXJnZXIubGVuZ3RoOyBpKyspIHtcclxuICBidXJnZXJbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgYnVyZ2VyW2ldLmNsYXNzTGlzdC50b2dnbGUoXCJvdGhlci1iYXItYWN0aXZlXCIpO1xyXG4gICAgYmFyT25lW2ldLmNsYXNzTGlzdC50b2dnbGUoXCJiYXItb25lLWFjdGl2ZVwiKTtcclxuICAgIGJhclR3b1tpXS5jbGFzc0xpc3QudG9nZ2xlKFwiYmFyLXR3by1hY3RpdmVcIik7XHJcbiAgfSk7XHJcbn0iXSwiZmlsZSI6Im1haW4uanMifQ==