//Javascriptのフォーム管理
//テキストボックス種類
var textItem = ":text,input[type='email'],input[type='password'],textarea";


//1.リアルタイム郵便番号入力補助
jQuery(function ($) {

  //keyup=文字が入力されたとき#zip2にフォーカス移動
  $("#zip1").on("keyup", function () {


  });
});

//送信ボタン押下時エラーチェック
jQuery(function ($) {
  $("#frm1").on("submit", function () {
    //初期化
    // エラーメッセージ内DOM削除
    $("#errors").empty();
    //エラーメッセージ内テキスト
    var errMsgs = [];

    //すべてのテキストボックスの値を読み込み
    $(textItem).each(function () {

    });

    //性別のラジオボタンの値を読み込み
      var rdChk;
      // チェック済のラジオボタンの値を取得
      

    //パスワード一致チェック
    var pass1;
    var pass2;
    //password1と比較して内容に違いがあればエラーメッセージ追加
   

    //エラーメッセージの数で送信処理、エラー表示の切り替え
    if (errMsgs.length > 0) {
      //エラー処理


      return false;

    } else {
      //送信処理
      window.confirm("送信しますか?");
    }
  });
});

//（おまけ)リアルタイム空白チェック
jQuery(function ($) {

  //テキストボックス空白チェック
  $(textItem).on("blur change", function () {

  });
});