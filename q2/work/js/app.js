//OPENボタンをクリックしたとき
$(function () {
  $(".modal_open_button").click(function () {
    //.modal-windowをフェードイン
    $(".modal_win").fadeIn();
  });
  //閉じるボタンをクリックしたとき、
  $(".modal_close_button").click(function () {
    //.modal-windowをフェードアウト
    $(".modal_win").fadeOut();
  });
});

//※なぜ実装されない？
//OPENボタンをクリックしたとき
// $(function () {
//   $(".modal_open_button").click(function () {
//.modal-windowをフェードイン
//     $(".modal_window").fadeIn();
//   });
//閉じるボタンをクリックしたとき、
//   $(".modal_close_button").click(function () {
//.modal-windowをフェードアウト
//     $(".modal_window").fadeOut();
//   });
// });
