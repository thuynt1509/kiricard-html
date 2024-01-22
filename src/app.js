$(document).ready(function () {
  $(".full").click(function () {
    $("#lst-menu").removeClass("active");
    $(".full").toggleClass("active");
  });
  $("#icon-menu-bar").click(function () {
    $("#lst-menu").toggleClass("active");
    $(".full").toggleClass("active");
  });

  var Swipes = new Swiper(".swiper-banner", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  const swiper = new Swiper("#swipper1", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });
  const swiper2 = new Swiper("#swipper2", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 0,
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });
  const swiper3 = new Swiper("#swipper3", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 6,
    spaceBetween: 20,
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1023: {
        slidesPerView: 4,
      },
    },
  });
});
