//1.外部JSを実行する
window.alert("OK");

//2.ボタンをクリックしたときに関数を実行する
function btnEvent() {
  window.alert("OK");
}

//3.idを取得しDOMを操作する
function changeText() {
  document.getElementById("heading");


  var elem = document.getElementById("heading");
  elem.innerHTML ="change!!!";
}

//4.id以外でDOMを操作する場合は値が複数のため配列変数が必要

function changeTextGroup() {
  var lists = [];
  lists = document.getElementsByClassName("nav-item");

  window.alert(lists[0].innerHTML);
}

//5.DOMを配列に格納することで複数のオブジェクトに変更が行える
function changeListGroup() {
  var lists = [];
  lists = document.getElementsByClassName("nav-item");
  for (i = 0; i < lists.length; i++) {
    //リストアイテムの背景色を赤にする
    lists[i].style.backgroundColor = "red";
    //偶数ならばリストアイテムの背景色を緑にする
    if (i % 2 == 0) {
      lists[i].style.backgroundColor = "green";
    }
  }
}

//6.変数をカウントして画像ファイルを変更する

// グローバル変数でカウント数の定義
var btnCountNum; //画像ファイルの連番
var btnMinNum = 1 //画像最小値
var btnMaxNum = 6 //画像最大値

// カウントの初期化
btnCountNum = btnMinNum;

// カウント変数を使って画像を変更する関数
function changeImg() {
  //画像フォルダ
  var imgDir = "../assets/images/";
  // srcに入る画像ファイルパスを作成
  var imgFilePath = imgDir + btnCountNum + ".jpg";
  //画像のIDを取得
  var imgObj = document.getElementById("main-img");
  imgObj.src = imgFilePath;
  btnCountNum++;


  //画像最大数を超えた場合初期化
  if (btnCountNum > btnMaxNum) {
    btnCountNum = btnMinNum;
  }
}