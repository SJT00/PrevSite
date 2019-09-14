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

function playgame(){
 $("#gameimg").hide();
 $("#gamewv").show();
 $('.carousel').carousel('pause');
}

// On Element load function
$(function() {
  pglinks();
  $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
  if(document.URL.indexOf("#gamewv") >= 0){// Navigate user to playable game screen
    $(".carousel").carousel(1);
    playgame();
  }
  $("#play").click(function (){
    if($("div.active").index() == 0){
      window.location.href = "./assets/Games/S_invaders.zip";
      $("#play").html("Enjoy!");
    }
    else if($("div.active").index() == 1){
      $("#play").html("Go Ahead!");
      playgame();
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