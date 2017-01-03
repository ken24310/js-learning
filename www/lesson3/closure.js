// DOMを取得するため読み込み後に取得
window.onload = function () {
  var eventElm = document.getElementById("eventBtn");
  eventElm.addEventListener("click", eventFunc, false);
}

function eventFunc() {
  window.alert("event OK!");
}

// 関数は変数に格納できる
function productNum(num1, num2) {
  // 引数1と2を掛け算
  var answer = num1 * num2;
  return answer;
}
// 変数に戻り値を保存
var val1 = productNum(8, 20);
var val2 = productNum(9, 8);
console.log(val2);


// 関数名は省略できる
var hensu = function kansu() {
  return "hello World";
}
console.log(hensu());


// 外部から書き換えられない変数を作成(クロージャ)

//カウントするだけの関数を格納した変数(countNum)
function countNumber(minNum, maxNum) {
  // カウンターを最小値に初期化
  var countNum = minNum;
  // 関数の中に関数を格納
  var getNum = function () {
      // カウンター最大値を超えた場合リセット
      if (countNum > maxNum) {
        countNum = minNum;
      }
      return countNum++;
    }
    // 内部関数の実行結果を戻す
  return getNum;
}

var counter1 = countNumber(1, 6);

function testEvent(cnt) {
  var imgDir = "../images/";
  //srcに入る画像ファイルパスを作成
  var imgFilePath = imgDir + cnt + ".jpg";
  //画像のIDを取得
  var imgObj = document.getElementById("main-img");
  imgObj.src = imgFilePath;
}