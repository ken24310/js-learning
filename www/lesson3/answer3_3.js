//変数の範囲(スコープ)
//1-1.グローバル変数のスコープ

var globalVal;

window.alert(globalVal);

globalVal = "JSFile";


//1-2.下記をHTML>HEAD内に記述

//window.alert(globalVal);


//1-3.グローバル変数はHTMLファイル内のどこでも有効


//1-4. 関数内からでもグローバル変数は変更できる。
/*
    function funcVal(){
    globalVal = "function";
    window.alert(globalVal);
  }
  funcVal();
*/

//1-5. グローバル変数を再定義しても値はリセットされない。
/*
var globalVal;
console.log(globalVal);
 */


//2-1.ローカル変数のスコープ
//下記を関数funcVal()に追加
/*
var localVal = "local"
window.alert(localVal);
*/

//2-2.関数の外からローカル変数を参照。
//window.alert(localVal);


//3-1.ブロック内変数のスコープ

/*
var i;

for(var i=0; i<6; i++){
  console.log(i);
}
*/

//3-2. ブロックの外から変数を参照
/*
var i;
window.alert(i);
*/


//グローバル変数はどこからでも参照可能
//ローカル変数は関数内でのみ変更可能。
//if文、for文内のブロック変数はグローバル変数と同じ扱い。


//4.ブロックスコープの変数を作成するには

//4-1varではなくlet を使う(要ES2015以降)
/*
for(let i=0; i<6; i++){
  console.log(i);
}

var i;
window.alert(i);
*/

//4-2.ブロック処理も関数内で実行する。

/*
function localloop(){
  for (var i=0; i<6; i++){
    console.log(i);
  }
}
localloop();

var i;
window.alert(i);
*/

//4-3.クロージャという方法で変数を作成する(中級)。
//詳しくはclosure.html参照


//まとめ：変数の定義、繰り返し処理等はなるべく関数内(ローカルスコープ)で行うこと


//5． DOMの取り扱いについて
//5-1ページ下部に記述する
/*
var elem = document.getElementById("heading");
elem.innerText = "DOMを取得"
*/

//5-2 JSファイルに移動したときDOMが取得できない

// DOMを取得する場合は必ず該当するHTMLタグが読み込み終わっている必要がある。

// 解決方法
// ページコンテンツ読み込み後に実行する
/*
window.onload = function(){

  var elem = document.getElementById("heading");
elem.innerText = "DOMを取得2"

}
*/

//window.onload = 関数または処理 ページ読み込み後に処理が実行される