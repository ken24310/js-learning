jQuery(function ($) {
  //画像マウスオーバー時figucpationのテキストと画像ファイル名を取得してHTML内に表示する
  $("figcaption").on("mouseenter", function () {
    var text = $(this).text();
    window.alert(text);
  })

  //自分の内部のDOMを取得する(失敗)
  $("figure").on("mouseenter", function () {
    var text = $(this).attr("src");
    window.alert(text);
  })

  //自分の内部のDOMを取得する(成功)
  $("figure").on("mouseenter", function () {
    var text = $(this).find("img").attr("src");
    text += $(this).find("figcaption").text();
    window.alert(text);
  })

  //img_textに表示
  $("figure").on("mouseenter", function () {
    var text = $(this).find("img").attr("src");
    text += $(this).find("figcaption").text();

    $(".img_text").text(text);
  })

});