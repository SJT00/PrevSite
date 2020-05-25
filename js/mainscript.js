function navscrollto(link) {
  // scrolls to link minus height of navbar
  var navHeight = Math.round($(".nav").height());
  $("html, body").animate(
    {
      scrollTop: link.offset().top - navHeight - 17,
    },
    250
  );
}

function pglinks() {
  $("a")
    .filter(".onpage")
    .click(function (e) {
      // change scroll behaviour of all <a> tags with onpage class
      e.preventDefault();
      navscrollto($(this.hash));
      window.location.hash = this.hash;
    });
}

// On Element load function
$(function () {
  pglinks();
  $('[data-toggle="tooltip"]').tooltip(); // Initializes all pg tool tips
  if (document.URL.indexOf("#gamewv") >= 0) {
    // Navigate user to playable game screen
    $(".carousel").carousel(1);
    navscrollto($("#Projects"));
  }
  $("#play").click(function () {
    switch (index) {
      case 0:
        window.location.href = "./assets/Games/S_invaders.zip";
        $("#play").html("Enjoy!");
      case 1:
        window.location.href = "./assets/Games/Gamewv.swf";
        $("#play").html("Go Ahead!");
      case 2:
        $("#play").html("Stay Safe!");
        window.location.href = "https://github.com/SJT00/Token";
      case 3:
        $("#play").html("Don't Budge! ㋡");
        window.location.href = "http://https://github.com/mhyeun/budgie";
    }
  });
  $(".carousel").on("slide.bs.carousel", function (event) {
    console.log(event);
    event.to >= 2
      ? $("#play").html("Want to Try ?")
      : $("#play").html("Want To Play ?");
  });
});
