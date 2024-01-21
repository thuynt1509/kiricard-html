$(document).ready(function () {
  $("#icon-menu-bar").click(function(){
    $("#lst-menu").toggleClass('active');
    $("body").append('<div class="full"></div>');
  });
  $(".full").click(function(){
    console.log("abc");
    $("#lst-menu").removeClass('active');
  });
  var Swipes = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
});
