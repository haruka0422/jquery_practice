var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function (a) {
  return (a.raw = a);
};
$jscomp.createTemplateTagFirstArgWithRaw = function (a, b) {
  a.raw = b;
  return a;
};
$(function () {
  $(".btn__submit").on("click", function () {
    console.log("\u540d\u5b57");
    console.log($("#family__name").val());
    console.log("\u540d\u524d");
    console.log($("#given__name").val());
    console.log("\u751f\u5e74\u6708\u65e5");
    console.log(
      $(".year").val() +
        "\u5e74" +
        $(".month").val() +
        "\u6708" +
        $(".day").val() +
        "\u65e5"
    );
    console.log("\u6027\u5225");
    console.log($('[name="gender"]:checked').val());
    console.log("\u8077\u696d");
    console.log($(".occupation").val());
    console.log("\u30a2\u30ab\u30a6\u30f3\u30c8\u540d");
    console.log($("#account__name").val());
    console.log("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9");
    console.log($("#email").val());
    console.log("\u30d1\u30b9\u30ef\u30fc\u30c9");
    console.log($("#password").val());
    console.log("\u78ba\u8a8d\u7528\u30d1\u30b9\u30ef\u30fc\u30c9");
    console.log($("#duplication__password").val());
    console.log("\u4f4f\u6240");
    console.log($("#address").val());
    console.log("\u96fb\u8a71\u756a\u53f7");
    console.log($("#tel").val());
    console.log("\u8cfc\u8aad\u60c5\u5831");
    $('[name="subscription"]:checked').each(function () {
      console.log($(this).val());
    });
  });
});
