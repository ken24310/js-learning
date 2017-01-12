//グローバル変数
var ugoku = 0;
//-------------------------------------------------

//関数1オブジェクトを変化させる
//document.getElementById("ID名")でそのIDのプロパティを自由に変更できる

function kansu1(){
  //document.getElementById("heading1").innerHTML="変わるよ！";
document.getElementById("img1").src="../assets/images/2.jpg";
document.getElementById("img1").style.width="100px";
}
//-------------------------------------------------

//関数4オブジェクトを移動させる
function kansu2(){
  ugoku += 10;
  document.getElementById("img1").style.left= ugoku +"px";
}

//タイマー処理で動かす。
function kansu3(){
  var timer = setInterval(kansu2,100);
}



//小数点無しの0-2のランダム数字を作成
rndNum = Math.floor(Math.random()*maxNum);
return rndNum;