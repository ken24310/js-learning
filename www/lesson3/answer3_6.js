//Javascriptのフォーム管理

/*
エラー項目有無チェック
*/

var existErrorFlg;
//エラー項目有無フラグ変更(on,off)
function checkExistErrorFlg(flg) {
  existErrorFlg = flg;
}
// エラー項目有無の確認
function getExistErrorFlg() {
  return existErrorFlg;
}

/*
エラーメッセージテキスト
*/

var errorMessageString;
//エラーメッセージテキスト追加
function setErrorMessages(msg) {
  errorMessageString += msg + "\n";
}
//エラーメッセージテキスト表示
function getErrorMessages() {
  return errorMessageString;
}

/*
テキストフォーム部品の管理
*/

// フォーム部品名
var formTextItems = [];
//フォーム部品名を配列に格納。
function SetFormTextItems() {
  formTextItems[0] = {
    "id": "user_name",
    "label": "名前"
  };
  formTextItems[1] = {
    "id": "email",
    "label": "メールアドレス"
  };
  formTextItems[2] = {
    "id": "summary",
    "label": "内容"
  };
}
//フォームテキスト部品数を取得
function getFormTextItemsNum() {
  return formTextItems.length;
}
//フォームテキスト部品IDを取得
function getFormTextItemsID(num) {
  return formTextItems[num].id;
}
//フォームテキスト部品ラベルを取得
function getFormTextItemsLabel(num) {
  return formTextItems[num].label;
}

/*
ラジオフォーム部品の管理
*/
//ラジオフォーム部品
var formRadioItems = [];

function SetFormRadioItems() {
  formRadioItems[0] = {
    "name": "sex",
    "label": "性別"
  };
}
//ラジオフォーム部品を取得
function getFormRadioItemsNum() {
  return formRadioItems.length;
}
//ラジオフォーム部品name属性を取得
function getFormRadioItemsName(num) {
  return formRadioItems[num].name;
}
//ラジオフォーム部品ラベルを取得
function getFormRadioItemsLabel(num) {
  return formRadioItems[num].label;
}

/*
フォーム初期化
*/

//フォーム本体を格納
var frm1;
//フォームチェック初期化
function formCheckInit() {
  existErrorFlg = "off";
  errorMessageString = "";
  frm1 = document.getElementById("form1");
  SetFormTextItems();
  SetFormRadioItems();
}

/*
テキスト空文字入力チェック
*/

function validEmptyText(id, label) {
  var frmElem = document.getElementById(id);
  //空文字が存在しなければOK
  if (frmElem.value != "") {
    return;
  } else {
    checkExistErrorFlg("on");
    setErrorMessages(label + "が入力されていません。");
  }
}

/*
ラジオボタン入力チェック
*/
function validRadioSelected(name, label) {
  //idではなくname属性でチェック
  var radioItems = document.getElementsByName(name);
  var chkNum = 0;
  //チェックされたラジオボタンの数を取得
  for (var i = 0; i < radioItems.length; i++) {
    if (radioItems[i].checked) {
      chkNum += 1;
    }
  }
  //1つだけチェックされていばOK
  if (chkNum == 1) {
    return;
    //2つ以上の場合は入力ミス
  } else if (chkNum > 1) {
    checkExistErrorFlg("on");
    setErrorMessages(label + "は一つだけ選択してください。");
    //一つもない場合は未入力
  } else {
    checkExistErrorFlg("on");
    setErrorMessages(label + "が選択されていません。");
  }
}

/*
総合エラーチェック
*/
//すべての入力チェックを行い、エラーがあれば表示する
function validCheckAll() {
  // テキストフォーム部品の数だけチェックを行う
  for (var i = 0; i < getFormTextItemsNum(); i++) {
    //空白チェック
    validEmptyText(getFormTextItemsID(i), getFormTextItemsLabel(i));
  }
  // ラジオボタン部品の数だけチェックを行う
  for (var i = 0; i < getFormRadioItemsNum(); i++) {
    //ラジオボタンチェック
    validRadioSelected(getFormRadioItemsName(i), getFormRadioItemsLabel(i));
  }
  //すべてのエラーチェック後、一つでもエラーがあればメッセージ表示。
  if (getExistErrorFlg() == "on") {
    window.alert(getErrorMessages());
    //送信前画面に戻す
    eventReturn()
  } else {
    startFormSubmit();
  }
}

/*
 エラー処理後、送信せず入力画面に戻す。
*/
function eventReturn() {
  //エラー処理初期化
  formCheckInit();
  if (event.preventDefault) {
    //バブリングの防止
    event.preventDefault();

  } else {
    event.returnValue = false;
    return false;
  }
}

/*
フォーム送信処理
*/
function startFormSubmit() {
  var confirmBtn = window.confirm("送信しますか?");
  if (confirmBtn == true) {
    window.alert("送信しました。");
  } else {
    //送信前画面に戻す
    eventReturn();
  }
}

/*
コンテンツ読み込み後に実行
*/

window.onload = function () {
  //フォーム初期化
  formCheckInit();

  //フォーム送信時内容チェック
  frm1.addEventListener("submit", function () {
    validCheckAll();
  }, false);
}