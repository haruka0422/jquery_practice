"use strict";

$(function () {
  let pageNumber = 1;
  let previousSearchWord = "";

  //検索ボタンを押した時の関数の処理
  $(".search-button").on("click", function () {
    const searchWord = $("#search-input").val();
    //サーチワードと前回のワードが異なる場合、ページを１にリセットし、リストをemptyで無にする。
    if (searchWord !== previousSearchWord) {
      pageNumber = 1;
      $(".lists").empty();
      previousSearchWord = searchWord;
    } else {
      //同じ検索ワードが使用されている場合はページ数を増やす。
      pageNumber++;
    }

    $.ajax({
      //urlにAPIのエンドポイントを指定
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageNumber}&count=20`,
      //typeでGETやPOSTなどのHTTPメソッドを選択
      type: "GET",
    })

      //リクエストが成功すると変数サクセスを表示させる。
      .done(function (response) {
        const success = response["@graph"];
      })
      //リクエストが失敗すると変数エラーを表示させる。
      .fail(function (err) {
        displayError(err);
      });
  });

  //リセットボタンを押すとページ数を１に、検索結果と条件をリセット
  $(".reset-btn").on("click", function () {
    pageNumber = 1;
    previousSearchWord = "";
    $(".lists").empty();
    $("#search-input").val("");
    $(".message").remove();
  });
  //１つ以上のsuccessがある時に実行
  function displayResults(success) {
    if (success && success.length > 0) {
      //extractedDateという関数にsuccessからデータを格納。
      const extractedData = success.map((item) => ({
        title: item.title || "タイトル不明",
        author: item["dc:creator"] || "著者不明",
        publisher: item["dc:publisher"]
          ? item["dc:publisher"][0]
          : "出版社不明",
        link: item.link["@id"],
      }));
      if (extractedData.length > 0) {
        $.each(extractedData, function (i, item) {
          const listItem = `<li class="lists-item">
            <div class="list-inner">
              <p>タイトル：${item.title}</p>
              <p>著者：${item.author}</p>
              <p>出版社：${item.publisher}</p>
              <a href="${item.link}" target="_blank">書籍情報</a>
            </div>
          </li>`;
          $(".lists").prepend(listItem);
        });
      } else {
        //検索結果が１つもなかった場合メッセージを表示
        $(".lists").before(
          '<div class="message">検索結果が見つかりませんでした。</div>'
        );
      }
    }
  }
  //APIがうまく送信されなかったときのエラー
  function displayError(err) {
    $(".lists").before(
      '<div class="message">エラーが発生しました。<br>再度更新してください。</div>'
    );
  }
});

//  変数settingsに設定情報などを格納
// const settings = {
//    実行するURL。実行するURLのことをエンドポイントと言います。
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?
//   title=${searchWord}&format=json&p=${pageCount}&count=20`,
//    サーバーに送るメソッド
//   "method": "GET",
//   }
//    Ajaxの実行
//   .doneが通信成功した時の処理、”response”が引数となっていて通信した結果を受け取ってい
//   る
//   $.ajax(settings).done(function (response) {
//   .failが通信に失敗した時の処理、”err”にサーバーから送られてきたエラー内容を受け取って
//   いる。
//   }).fail(function (err) {
//   });

// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });
