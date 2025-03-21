$(function () {
  //class属性値が「.select-box」のselect要素を対象に「change」イベント処理
  //ユーザーが選択肢をクリックした瞬間にイベント処理が実行
  $(".select-box").change(function () {
    // 選択されているvalue属性値を取り出す
    let value = $(this).val(),
      //food-listを全て取り出している
      list = $(".food-list li");
    // console.log(value);

    //条件「valueで全てを選択した時」に合致した場合の処理
    if (value === "all") {
      list.show();
      //条件「valueで全てを選択した時」に合致しない場合の処理
    } else {
      // for文でliの数だけループ処理
      for (var i = 0; i < list.length; i++) {
        //console.log(list[i]);

        let item = $(list[i]);
        //「data-category-type属性」の値だけを取得
        let category = item.data("category-type");

        // console.log(category);

        value === category ? item.show() : item.hide();
      }
    }
  });
});
