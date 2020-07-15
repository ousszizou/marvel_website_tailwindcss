$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        nav: false
      },
      768: {
        nav: true
      },
    }
  });
  $('.color-mode').click(function () {
    $('body').toggleClass('dark-mode')
  });
});

var options = {
  strings: ["UI Specialist", "Marvel Sann", "Web Designer"],
  typeSpeed: 80,
  fadeOut: true,
  loop: true,
  showCursor: false,
};

var typed = new Typed(".element", options);

var myElement = document.querySelector(".navbar");

var headroom = new Headroom(myElement);

headroom.init();
