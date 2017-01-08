//Javascriptのイベントの書き方

//1.実行される関数を作成
function eventFunc(eventName) {
  window.alert(eventName + "Event Start!");
}

//2.コンテンツ読み込み後に実行
window.onload = function () {
  eventFunc("読み込み時の");

}
//3.イベントリスナーに登録して実行(クリック時)
//onload内に登録
var eventElem = document.getElementById("btn2");
eventElem.addEventListener('click', function () {
  eventFunc("イベントリスナーから");
}, false);

//4.イベントリスナーに登録して実行(マウスオーバー時)
//onload内に登録
var eventElem = document.getElementById("main-img");
eventElem.addEventListener('mouseover', function () {
  eventFunc("イベントリスナーから");
}, false);

//5.イベントリスナーに登録して実行(フォーカスが外れた時)
//onload内に登録
var eventElem = document.getElementById("textbox1");
eventElem.addEventListener('blur', function () {
  eventFunc("イベントリスナーから");
}, false);