function navscrollto(link){// scrolls to link minus height of navbar
  var navHeight = Math.round($(".nav").height());
  $("html, body").animate(
  { 
   scrollTop: link.offset().top - navHeight - 17
 }, 250);
}

function pglinks(){  
  $("a").filter(".onpage").click(function (e) {// change scroll behaviour of all <a> tags with onpage class
    e.preventDefault();
    navscrollto($(this.hash));
    window.location.hash = this.hash;
  });
}

// On Element load function
$(function() {
  pglinks();
  $('[data-toggle="tooltip"]').tooltip();// Initializes all pg tool tips
  if(document.URL.indexOf("#gamewv") >= 0){// Navigate user to playable game screen
    $(".carousel").carousel(1);
    navscrollto($("#Projects"));
    $("#gameimg").hide();
    $("#gamewv").show();
  }
  $("#play").click(function (){
    if($("div.active").index() == 0){
      window.location.href = "./assets/Games/S_invaders.zip";
      $("#play").html("Enjoy!");
    }
    else if($("div.active").index() == 1){
      $("#play").html("Go Ahead!");
      $("#gameimg").hide();
      $("#gamewv").show();
    }
    else if($("div.active").index() == 2){
      $("#play").html("Me Too!㋡");
    }
  });
  $(".carousel").on("slide.bs.carousel", function () {
    $("#play").html("Want To Play!");
    $("#gameimg").show();
    $("#gamewv").hide();
  });
});