  jQuery(function($){    
    $("body").css("background-color","#ccc");
    $("h1").text("jQuery!");
    $("h1").css("font-size","100px");
    $("h1").addClass("bg-primary");
    $("#main-img").attr("src","../assets/images/5.jpg");

    $(".list-group").append("<li>list</li>");
      var listText="";
    for(var i=0; i<6; i++){
      listText += '<li class="list-group-item">'+'リスト'+i+'</li>';

          $(".list-group").html(listText);
       }
  });

 //ネットでよく見る書き方1
 $(function(){

  });

 //ネットでよく見る書き方2
 $(document).ready(function(){

  });

