$(function() {
  var navHeight = $('.nav').height(); // get height of navbar
  $('a').filter('.onpage').click(function (e) {// change scroll behaviour of all <a> tags with onpage class
      e.preventDefault();
      var target = $(this.hash);
      $('html, body').animate({
          scrollTop: target.offset().top - navHeight // scroll to link minus height of navbar
      }, 250);
      window.location.hash = this.hash;
      return false;
  });
});