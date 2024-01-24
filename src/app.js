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
    observer: true,
    observeParents: true,
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
    observer: true,
    observeParents: true,
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
    observer: true,
    observeParents: true,
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
  const swiper3 = new Swiper("#swiper3", {
    observer: true,
    observeParents: true,
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
  const swiper4 = new Swiper("#swiper4", {
    observer: true,
    observeParents: true,
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
  const swiper5 = new Swiper("#swiper5", {
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 800,
      disableOnInteraction: false,
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
  const swiper6 = new Swiper("#swiper6", {
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1023: {
        slidesPerView: 3,
      },
    },
  });

  var btn = $("#btn-top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});
