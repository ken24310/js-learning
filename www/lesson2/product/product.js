//読み込み時jQuery処理実行
jQuery(document).ready(function () {

  //商品データをオブジェクトとして格納
  var pItem =[];
 pItem[1] = new ProductItemsData(
    1,"海クラゲの酢の物",1200,"200g","お酒のおつまみにピッタリな海クラゲを豊富に用意しました。"
    )
pItem[2] = new ProductItemsData(
    2,"森のコアラのマーチ",200,"20個入","コアラのマーチとは、ロッテ製菓が製造・販売しているスナック菓子である。"
    )
pItem[3] = new ProductItemsData(
    3,"ペンギンぼんじり",1680,"10本","尾骨の周りの肉で、周囲を脂肪の塊が覆っているほんのわずかしか取れない部分です。鶏の尻尾に当る部分。この三角部分の突起はよく動く場所で筋肉が発達しており、味は格別です。 "
  )
  pItem[4] = new ProductItemsData(
    4,"あじさいフレグランス",1200,"350ml",
    "椿油（つばきあぶら）は、ツバキ科ツバキ属のヤブツバキの種子から採取される植物性油脂。ユチャ(en)など、ツバキ属の種子から取ったものの総称はカメリア油（カメリアゆ）と呼ばれ、区別される。酸化されにくいオレイン酸を比較的多く含むため、他の食用の油脂に比べて酸化されにくく固まりにくい性質を持つ（不乾性油）。"
  )
  pItem[5] = new ProductItemsData(
    5,"国産キムチチゲ",980,"300g",
    "キムチチゲは朝鮮で広く食べられている辛口の鍋料理・スープ料理である。その名のとおり白菜キムチが味の主体で、具には肉類または魚介類、野菜、豆腐などが使われる。"
  )
  pItem[6] = new ProductItemsData(
    6,"断崖絶壁",9900,"Sサイズ",
    "ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。"
  )

  //画像ファイルパス作成
  var imgFilePath = "../../assets/images/";
  var imgFileType = ".jpg"

  //パラメータから商品IDを取得
  var pid = GetQueryString();
//詳細ページの商品情報を取得
  var currentItem = pItem[pid.product];
changeTextProductItem(currentItem);


//商品詳細のテンプレート内データを書き換える
function changeTextProductItem(item){
  $(".JSProductItemName").text(item.name);
    //画像ファイル名を作成
    var imgFileName = imgFilePath + item.id + imgFileType;
  $(".JSProductItemImg").attr("src", imgFileName);
  $(".JSProductItemCaptionName > dd").text(item.name);
  $(".JSProductItemCaptionPrice > dd").text(item.price);
  $(".JSProductItemCaptionSize > dd").text(item.size);
  $(".JSProductItemCaptionDescription > dd").text(item.description);
}
//商品一覧リストの作成
});
//読み込み時jQuery処理実行ここまで

  //商品データクラス作成
  function ProductItemsData(id, name, price, size, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.size = size;
    this.description = description;
  }
