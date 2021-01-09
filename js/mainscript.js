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
    $(".carousel").carousel(3);
    navscrollto($("#Projects"));
  }
  var index = 0;
  $("#play").click(function () {
    switch (index) {
      case 0:
        window.open("https://github.com/mhyeun/budgie", "_blank");
        $("#play").html("Don't Budge! ㋡");
        break;
      case 1:
        window.open("https://github.com/SJT00/Token", "_blank");
        $("#play").html("Stay Safe!");
        break;
      case 2:
        window.location.href = "./assets/Games/S_invaders.zip";
        $("#play").html("Enjoy!");
        break;
      case 3:
        window.location.href = "./assets/Games/Gamewv.zip";
        $("#play").html("Go Ahead!");
        break;
    }
  });
  $(".carousel").on("slide.bs.carousel", function (event) {
    index = event.to;
    event.to <= 1
      ? $("#play").html("Want To Try ?")
      : $("#play").html("Want To Play ?");
  });
});
