$(function () {
  //「.dropdwn li」をマウスホバーすると
  $(".dropdwn li").hover(
    //slideDown()で「this」が表示
    function () {
      $(this).children("ul").stop().slideDown();
    },
    //マウスホバーが外れると、slideUp()で「this」が非表示
    function () {
      $(this).children("ul").stop().slideUp();
    }
  );
});
