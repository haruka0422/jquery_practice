$(function () {
  //タブである.nav liにクリックしたタイミングで表示切り替え処理を実行
  $(".nav li").click(function () {
    //タブがクリックされた際に、「何番目のタブ」がクリックされたかを取得
    let numE = $(".nav li").index(this);
    //コンテンツの切り替え処理
    //タブがクリックされたタイミングで、.is-hiddenを追加
    $(".description li").addClass("is-hidden");
    $(".description li")
      .eq(numE)
      //.is-hiddenを削除し、表示中のコンテンツを非表示
      .removeClass("is-hidden");
  });
});
