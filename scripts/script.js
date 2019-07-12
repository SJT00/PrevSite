$(function() {
  var navHeight = $('.navbar').height(); // get height of navbar
  $('li a').click(function (e) {
      e.preventDefault();
      var target = $(this.hash);
      $('html, body').animate({
          scrollTop: target.offset().top - navHeight // scroll to link minus height of navbar
      }, 250);
      window.location.hash = this.hash;
      return false;
  });
});