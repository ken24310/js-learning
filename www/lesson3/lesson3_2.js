//1.外部JSを実行する
window.alert("OK");

//2.ボタンをクリックしたときに関数を実行する
function btnEvent() {

}

//3.idを取得しDOMを操作する
function changeText() {

}



//4.id以外でDOMを操作する場合は値が複数のため配列変数が必要
function changeTextGroup() {

}

//5.DOMを配列に格納することで複数のオブジェクトに変更が行える
function changeListGroup() {
  var lists = [];
  lists = document.getElementsByClassName("nav-item");
}

//6.変数をカウントして画像ファイルを変更する
// グローバル変数の定義
var btnCountNum; //画像ファイルの連番
var btnMinNum = 1 //画像最小値
var btnMaxNum = 6 //画像最大値

// 初期化
btnCountNum = btnMinNum;

// カウント変数を使って画像を変更する関数
function changeImg() {
  //画像のIDを取得
  var imgObj = document.getElementById("main-img");
  btnCountNum++;
}