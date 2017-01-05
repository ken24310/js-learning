function GetQueryString() {
  var result = {};
  if (window.location.search.length > 1) {
    // 最初の1文字 (?記号) を除いた文字列を取得する
    var query = window.location.search.substring(1);
    // クエリの区切り記号 (&) で文字列を配列に分割する
    var parameters = query.split('&');
    for (var i = 0; i < parameters.length; i++) {
      // パラメータ名とパラメータ値に分割する
      var element = parameters[i].split('=');
      // 安全なテキストとして配列を格納する
      var paramName = decodeURIComponent(element[0]);
      var paramValue = decodeURIComponent(element[1]);
      // パラメータ名をキーとして連想配列に追加する
      result[paramName] = paramValue;
    }
  }
  return result;
}

function writeQueryString(suffix) {
  //パラメータクエリの内容を取得
  var queries = GetQueryString();
  // パラメータのキーと値を書き出す
  for (var key in queries) {
    // パラメータ内容を書き込むテキストID
    var elemText = document.getElementById(suffix + key);
    // パラメータ内容を格納するテキストフォームタグID
    var elemObj = document.getElementById(key);
    // クエリパラメータに対応したIDのテキストをkeyの値に変更
    if (elemText != null) {
      elemText.innerHTML = queries[key];
      elemObj.value = elemText.innerHTML;

    }
  }
}


