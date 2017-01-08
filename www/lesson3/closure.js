// 外部から書き換えられない変数を作成(クロージャ)


//カウントするだけの関数を格納した変数(countNumber)
function countNumber(minNum, maxNum) {
  // カウンターを最小値に初期化
  var countNum = minNum;
  // 関数の中に関数を格納
  var getNum = function () {
    // カウンター最大値を超えた場合カウントリセット
    if (countNum > maxNum) {
      countNum = minNum;
    }
    return countNum++;
  }
  // 内部関数の実行結果を戻す
  return getNum;
}
//画像ファイルの連番を変更して表示する関数
function changeImgNumber(cnt) {
  var imgDir = "../assets/images/";
  //srcに入る画像ファイルパスを作成
  var imgFilePath = imgDir + cnt + ".jpg";
  //画像のIDを取得
  var imgObj = document.getElementById("main-img");
  imgObj.src = imgFilePath;
}

//ボタンクリック時にカウントして画像ファイルを変更する
//  カウント初期設定
var counter1 = countNumber(1, 6);

// ボタンクリックイベント(buttonタグの読み込みが完了していること)
function btnEvent() {
  //画像ファイル番号変更
  changeImgNumber(counter1());
}