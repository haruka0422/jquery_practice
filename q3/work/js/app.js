//メニューをクリックしたら
$(function () {
  $(".drawer_button").click(function () {
    //メニューにactiveクラスを付け外し
    $(this).toggleClass("active");
    //3秒かけてフェードイン/フェードアウトする
    $(".drawer_bg").fadeToggle(3000);
    //２つのクラスのON/OFFの切り替えを実装
    $("nav").toggleClass("on open");
  });
  //メニューをクリックしたら3秒間かけて非表示にする
  $(".drawer_bg").click(function () {
    $(this).hide(3000);
    //.drawer_buttonからactiveクラスを外す。
    $(".drawer_button").removeClass("active");
    // ナビゲーションページが読み込まれたときに.openクラスを削除
    $("nav").removeClass("on open");
  });
});
