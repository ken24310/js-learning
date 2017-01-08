//Javascriptと他のプログラム言語の違い

//1-1.変数はオブジェクト型である
/*
var hensu;
hensu = 100 + 1;
console.log(hensu);

hensu += "100";
console.log(hensu);

hensu *= 3;
console.log(hensu);
hensu += "文字";
console.log(hensu);
*/
//変数内の値が計算の都度、最適な型に変換される


// 1-2.メソッドも変数に格納できる
/*
var hensu2 = console.log("hello");
hensu2();
*/


// 1-3.関数も変数に格納できる
/*
function productNum(num1, num2) {
  // 引数1と2を掛け算
  var answer = num1 * num2;
  return answer;
}
var kakezan = productNum(2,6);
console.log(kakezan);
*/

//2-1 JSの関数
//関数を変数に格納することで記述を短縮化できる。
/*
function elemChange() {
  var elem = document.getElementById("heading");
  elem.style.color = "red";
  var elems = document.getElementsByTagName("li");

  for (i = 0; i < elems.length; i++) {
    elems[i].innerText=i;
  }
}
*/

// DOMを取得するため読み込み後に取得
window.onload = function () {
  // elemChange();
}

// 2-2関数名は省略できる
/*
var hensu = function fanc () {
  return "hensu func";
}
console.log(hensu());
*/

//無名関数
/*
var hensuFunc = function () {
  return "no name func";
}
console.log(hensuFunc());
*/

//2-3.関数を即実行する
//即時関数
/*
console.log(function(){
  return "execute";
});
*/

