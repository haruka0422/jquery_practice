//メニューをクリックしたら
$(function () {
  $(".drawer_button").click(function () {
    //メニューにactiveクラスを付け外し
    $(this).toggleClass("active");
    //フェードイン/フェードアウトする
    $(".drawer_bg").fadeToggle();
    //２つのクラスのON/OFFの切り替えを実装
    $("nav").toggleClass("on open");
  });
  //メニューをクリックしたら非表示にする
  $(".drawer_bg").click(function () {
    $(this).hide();
    //.drawer_buttonからactiveクラスを外す。
    $(".drawer_button").removeClass("active");
    // ナビゲーションページが読み込まれたときに.openクラスを削除
    $("nav").removeClass("open");
  });
});
