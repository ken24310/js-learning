   //詳細ページURL作成
   var detailPageURL = "detail.html?product="
     //画像ファイルパス作成
   var imgFilePath = "../../assets/images/";
   var imgFileType = ".jpg"

   //商品データクラス作成
   function ProductItemsData(id, name, price, size, description) {
     this.id = id;
     this.name = name;
     this.price = price;
     this.size = size;
     this.description = description;
   }
   //商品データをオブジェクトとして格納
   var pItem = [];
   pItem[1] = new ProductItemsData(
     1, "海クラゲの酢の物", 1200, "200g", "お酒のおつまみにピッタリな海クラゲを豊富に用意しました。"
   );
   pItem[2] = new ProductItemsData(
     2, "森のコアラのマーチ", 200, "20個入", "コアラのマーチとは、ロッテ製菓が製造・販売しているスナック菓子である。"
   );
   pItem[3] = new ProductItemsData(
     3, "ペンギンぼんじり", 1680, "10本", "尾骨の周りの肉で、周囲を脂肪の塊が覆っているほんのわずかしか取れない部分です。鶏の尻尾に当る部分。この三角部分の突起はよく動く場所で筋肉が発達しており、味は格別です。 "
   );
   pItem[4] = new ProductItemsData(
     4, "あじさいフレグランス", 1200, "350ml",
     "椿油（つばきあぶら）は、ツバキ科ツバキ属のヤブツバキの種子から採取される植物性油脂。ユチャ(en)など、ツバキ属の種子から取ったものの総称はカメリア油（カメリアゆ）と呼ばれ、区別される。酸化されにくいオレイン酸を比較的多く含むため、他の食用の油脂に比べて酸化されにくく固まりにくい性質を持つ（不乾性油）。"
   );
   pItem[5] = new ProductItemsData(
     5, "国産キムチチゲ", 980, "300g",
     "キムチチゲは朝鮮で広く食べられている辛口の鍋料理・スープ料理である。その名のとおり白菜キムチが味の主体で、具には肉類または魚介類、野菜、豆腐などが使われる。"
   );
   pItem[6] = new ProductItemsData(
     6, "断崖絶壁", 9900, "Sサイズ",
     "ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。"
   );
   //商品詳細のテンプレート内データを書き換える
   function changeProductItemDetail(id) {
     //画像ファイル名を作成
     var imgFileName = imgFilePath + pItem[id].id + imgFileType;
     $(".JSProductItemName").text(pItem[id].name);
     $(".JSProductItemImg").attr("src", imgFileName);
     $(".JSProductItemCaptionName > dd").text(pItem[id].name);
     $(".JSProductItemCaptionPrice > dd").text(pItem[id].price+"円");
     $(".JSProductItemCaptionSize > dd").text(pItem[id].size);
     $(".JSProductItemCaptionDescription > dd").text(pItem[id].description);
   }
   //商品一覧に商品リストを生成する
   function createProductItemList(nodeID) {

     // 商品リスト本体DOM(1つのみ)
     var listItems = $('<ul></ul>', {
       "class": "list-unstyled"
     });

     //登録商品数分リストを並べる
     for (i = 1; i < pItem.length; i++) {
       // 商品リストアイテムDOM
       var listObj = $('<li></li>', {
         "class": "col-xs-4"
       });
       //商品詳細ページへのURL DOM
       var listURL = $('<a></a>', {
         "href": detailPageURL + pItem[i].id
       });
       var listThumbnail = $('<div></div>', {
         "class": "thumbnail"
       });
       //商品サムネイル画像DOM
       var listThumbnailImg = $('<img />', {
         "src": imgFilePath + pItem[i].id + imgFileType
       });
       //リストアイテムキャプション部 DOM
       var listCaption = $('<div></div>', {
         "class": "caption"
       });
       //キャプション商品名 DOM
       var listCaptionName = $('<h3></h3>', {
         "text": pItem[i].name
       });
       //キャプション価格部分 DOM
       var listCaptionPrice = $('<p></p>', {
         "text": pItem[i].price+"円",
         "class": "text-right"
       });
       //商品リスト本体を新規生成
       listItems.append(
         //商品リストアイテムを繰り返し作成
         listObj.append(
           listURL.append(
             listThumbnail.append(
               listThumbnailImg
             )
           ).append(
             listCaption.append(
               listCaptionName).append(listCaptionPrice)
           )
         )
       );
     }
     //loop i end
     //特定のIDの後ろに商品一覧リストを追加
     $(nodeID).append(listItems);
   }