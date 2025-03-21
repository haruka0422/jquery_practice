$(function () {
  $(".select-box").on("change", function () {
    var b = $(this).val(),
      c = $(".food-list li");
    // console.log(b);
    // console.log("all" === b);
    "all" === b
      ? c.show()
      : $.each(c, function (e, a) {
          var d = $(a).data("category-type");
          // console.log(d);
          // console.log(a);
          b === d ? $(a).show() : $(a).hide();
        });
  });
});
