$(document).ready(function () {
  $("#togglePass").click(function (e) {
    console.log(1);
    $(this).toggleClass("hide");
    e.stopPropagation();
  });
  $("#open-menu").click(function (e) {
    $(this).toggleClass("active");
    e.stopPropagation();
  });
  $(document).on("click", function (e) {
    if (
      !$(e.target).is("#open-menu") &&
      !$(e.target).closest("#open-menu").length
    ) {
      $("#open-menu").removeClass("active");
    }
  });
});
