jQuery(function ($) {
  //ここをクリックボタンクリックでリストが開く
  $(".slide_list dt").click(function () {
    $(".slide_list dd").slideToggle("fast");
  });

  //リスト表示ボタンとボックス表示ボタンで切り替え
  $("#change_list").click(function () {
    $("#img_grp").attr("class", "img_list");
  });

  //onメソッドでイベント指定
 $("#change_box").on("click",function(){
    $("#img_grp").attr("class", "img_box");
 });



  //スクロールしたとき「ページトップへ」ボタン表示
  $(window).on("scroll",function () {
    $(".goto_page_top").show("slow");
  });

  //セレクトボックスチェンジで画像を変更
  $(".select_img select").on("change",function () {
    var img_num; //セレクトボックスの番号を格納
    var file_name; //画像ファイル名を格納
    img_num = $(".select_img select").val();

    file_name = "images/" + img_num + ".jpg";
    $(".select_img img").attr("src",file_name);
  });
});

