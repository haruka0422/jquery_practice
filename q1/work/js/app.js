var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function (numA) {
  return (numA.raw = numA);
};
$jscomp.createTemplateTagFirstArgWithRaw = function (numA, numB) {
  a.raw = numB;
  return numA;
};

// cssでQ1をグリーンに変更
$("#q1").css("color", "green");
// Q2をクリックした時に
$("#q2").on("click", function () {
  // cssで背景色をピンクに変更
  $(this).css("background-color", "pink");
});
// Q3をクリックした時に
$("#q3").on("click", function () {
  //3秒かけてアニメーションが行われる
  $(this).fadeOut(3000);
});
// Q4をクリックした時に
$("#q4").on("click", function () {
  //ボタンサイズを大きくする
  $(this).addClass("large");
});
//Q5をクリックしたときに
$("#q5").on("click", function () {
  $(this)
    //Q5の最初に「DOMの中の前」を追加
    .prepend("DOMの中の前")
    //Q5の最後に「DOMの中の後」を追加
    .append("DOMの中の後")
    //ボタンの直前に「DOMの前」を挿入する
    .before("DOMの前")
    //ボタンの直後に「DOMの後」を挿入する
    .after("DOMの後");
});
//Q6をクリックしたときに
$("#q6").on("click", function () {
  //ボタンが2秒間かけてmargin-top: 100とmargin-left: 100にアニメーションを実行
  $(this).animate({ "margin-top": 100, "margin-left": 100 }, 2000);
});
//Q7をクリックしたときに
$("#q7").on("click", function () {
  //idのノードをコンソールで表示
  console.log(this);
});
//Q8ののHTML要素内にマウスカーソルが入った瞬間に
$("#q8").on({
  mouseenter: function () {
    //ボタンを大きくする
    $(this).addClass("large");
  },
  //Q8ののHTML要素内にマウスカーソルが出た時に
  mouseleave: function () {
    //大きくなったボタンを非表示にする
    $(this).removeClass("large");
  },
});
//Q9のそれぞれのリストボタンをクリックしたときに
$("#q9 li").on("click", function () {
  // alertで表示させたい文字列を変数に格納し引数で指定された要素のインデックス番号を返す
  //※帰ってくる番号は0から始まることに注意
  let numA = $(this).index();
  alert(numA);
});
//Q10のそれぞれのリストボタンをクリックしたときに
$("#q10 li").on("click", function () {
  let numA = $(this).index();
  console.log($("#q11 li").eq(numA));
  //Q11のそれぞれのリストにlarge-textを付与する
  $("#q11 li").eq(numA).addClass("large-text");
});
