//Javascriptのフォーム管理
//テキストボックス種類
var textItem = ":text,input[type='email'],input[type='password'],textarea";
//1.リアルタイム郵便番号入力補助
jQuery(function ($) {
  //keyup=文字が入力されたとき
  $("#zip1").on("keyup", function () {
    //.lengthで文字数を取得
    var num = $(this).val().length;

    //文字数3文字以上で次のテキストボックスに移動
    if (num >= 3) {
      $("#zip2").focus();
    }
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
      //thisを自分自身に固定
      var $self = $(this);
      // フォーム項目名取得
      var selfName = $self.attr("name");
      //空白のチェック
      if ($self.val() == "") {
        //空白ならばエラーメッセージ追加
        errMsgs.push(selfName + "が未入力です");
      }
    });

    //性別のラジオボタンの値を読み込み
      var rdChk = $("input[name=sex]:checked").val();
      // チェック済のラジオボタンの値を取得
      if (!rdChk) {
        //チェック済のラジオボタンの有無でエラーメッセージ追加
        errMsgs.push("性別が未選択です");
      }

    //パスワード一致チェック
    var pass1 = $("#password1").val();
    var pass2 = $("#password2").val();
    //password1と比較して内容に違いがあればエラーメッセージ追加
    if (pass1 !== pass2) {
      errMsgs.push("パスワードが一致しません");
    }

    //エラーメッセージの数で送信処理、エラー表示の切り替え
    if (errMsgs.length > 0) {
      //発生したエラーメッセージを取得
      for (var i = 0; i < errMsgs.length; i++) {
        // エラーメッセージをエラー表示ブロックに追加
        var $errList = $("<li></li>").text(errMsgs[i]);
        $("#errors").append($errList);
      }
      return false;
    } else {
      //送信処理
      var confirmBtn = window.confirm("送信しますか?");
      if (confirmBtn == true) {
        window.alert("送信しました。");
      } else {
        //送信前画面に戻す
        return false;
      }
    }
  });
});

//（おまけ)リアルタイム空白チェック
jQuery(function ($) {

  //テキストボックス空白チェック
  $(textItem).on("blur change", function () {
    var $self = $(this);
    var txt = $self.val();
    if (txt == "") {
      $self.parent().addClass("has-error");
    } else {
      $self.parent().removeClass("has-error");
    }
  });
});