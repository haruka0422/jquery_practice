$(function () {
  //".btn__submit"をクリックしイベントが発生した時の処理
  $(".btn__submit").on("click", function () {
    //「名字」をコンソールログに出力
    console.log("名字");
    // テキストボックスに入力されている値を取得しコンソールログに出力
    console.log($('[name="name1"]').val());

    // console.log("名字" + $("#family__name").val());

    //「名前」をコンソールログに出力
    console.log("名前");
    // テキストボックスに入力されている値を取得しコンソールログに出力
    console.log($('[name="name2"]').val());
    //「生年月日」をコンソールログに出力
    console.log("生年月日");
    console.log(
      //"year"のセレクト要素を選択した値をコンソールログに出力
      $(".year").val() +
        //「年」をコンソールログに出力
        "年" +
        //"month"のセレクト要素を選択した値をコンソールログに出力
        $(".month").val() +
        //「月」をコンソールログに出力
        "月" +
        //"day"のセレクト要素を選択した値をコンソールログに出力
        $(".day").val() +
        //「日」をコンソールログに出力
        "日"
    );

    //「性別」をコンソールログに出力
    // console.log("性別");
    // //ラジオボタンを取得する
    // console.log($('[name="gender"]:checked').val());
    //「職業」をコンソールログに出力

    // 「性別」(ラジオボタン)を取得する
    console.log("性別:" + $('[name="gender"]:checked').val());
    //「職業」をコンソールログに出力
    console.log("職業");
    // セレクトボックス を取得しコンソールログに出力
    console.log($('[name="work"]').val());
    //「アカウント名」をコンソールログに出力
    console.log("アカウント名");
    // テキストボックスに入力されている値を取得しコンソールログに出力
    console.log($("#account__name").val());
    //「メールアドレス」をコンソールログに出力
    console.log("メールアドレス");
    //入力されたメールアドレスをコンソールログに出力
    console.log($('input[type="email"]').val());
    //「パスワード」をコンソールログに出力
    console.log("パスワード");
    //入力されたパスワードをコンソールログに出力
    console.log($("input:password").val());
    //「確認用パスワード」をコンソールログに出力
    console.log("確認用パスワード");
    //入力された確認パスワードをコンソールログに出力
    console.log($("#duplication__password").val());
    //「住所」をコンソールログに出力
    console.log("住所");
    // テキストボックスに入力されている値を取得しコンソールログに出力
    console.log($("#address").val());
    //「電話番号」をコンソールログに出力
    console.log("電話番号");
    //入力された電話番号をコンソールログに出力
    console.log($("#tel").val());
    //「購読情報」をコンソールログに出力
    console.log("購読情報");
    // チェックボックスを取得しコンソールログに出力
    //すべてのcheckbox要素を確認して、チェックが入っている要素のvalue値だけを取得する為に、「each()」を使用。
    $('[name="subscription"]:checked').each(function () {
      console.log($(this).val());
    });
  });
});
