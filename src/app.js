$(document).ready(function () {
  reloadSlide();

  $(".full").click(function () {
    $("#lst-menu").removeClass("active");
    $(".full").toggleClass("active");
  });
  $("#icon-menu-bar").click(function () {
    $("#lst-menu").toggleClass("active");
    $(".full").toggleClass("active");
  });
  $(".lst-menu-header>li>a").click(function () {
    $(this).parent("li").toggleClass("active");
  });
  $(".menu-item-shop>li").click(function () {
    $(this).toggleClass("active");
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
  const swiper7 = new Swiper("#swiper7", {
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 2,
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

// scroll fixHeader
var bodyTag = document.getElementById("body-tag");

// Định nghĩa hàm xử lý sự kiện cuộn
function handleScroll() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Nếu vị trí cuộn lớn hơn hoặc bằng 300px, thêm class "fixHeader"
  if (scrollPosition >= 300) {
    bodyTag.classList.add("fixHeader");
  } else {
    // Nếu vị trí cuộn nhỏ hơn 300px, loại bỏ class "fixHeader"
    bodyTag.classList.remove("fixHeader");
  }
}

// Thêm sự kiện cuộn
window.addEventListener("scroll", handleScroll);

function reloadSlide() {
  var bigimage = $("#big");
  var thumbs = $("#thumbs"); //var totalslides = 10;

  var syncedSecondary = true;
  bigimage.trigger("destroy.owl.carousel");
  thumbs.trigger("destroy.owl.carousel");
  bigimage
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: false,
      video: true,
      autoplay: false,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
      ],
    })
    .on("changed.owl.carousel", syncPosition);
  thumbs
    .on("initialized.owl.carousel", function () {
      thumbs.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items: 5,
      dots: true,
      nav: true,
      navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
      ],
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: 4,
      responsiveRefreshRate: 100,
      margin: 10,
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;
    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }

    if (current > count) {
      current = 0;
    } //to this

    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs.find(".owl-item.active").first().index();
    var end = thumbs.find(".owl-item.active").last().index(); // if (current > end) {
    //     thumbs.data("owl.carousel").to(current, 100, true);
    // }
    // if (current < start) {
    //     thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    // }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
}
