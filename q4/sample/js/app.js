$(function () {
  $(".nav li").click(function () {
    var a = $(".nav li").index(this);
    $(".description li").addClass("is-hidden");
    $(".description li").eq(a).removeClass("is-hidden");
  });
});