$(window).load(function() {

  $('.menu-open, .ion-ios-arrow-right').click(function() {
    $('.menu-overlay').css("animation", "open-menu 500ms ease-out forwards");
    $('.menu-close').css("animation", "getClose 250ms ease-out 500ms forwards");
    $('.first, .fourth').css("animation", "scaleDown 0.25s ease-out 0.5s forwards");
  });

  $('.menu-close, .ion-ios-arrow-left').click(function() {
    $('.fourth, .first').fadeOut("fast");

    setTimeout(function() {

      $('.menu-overlay').css("animation", "close-menu 500ms ease-out forwards");
      $('.menu-close').css("animation", "loseClose 250ms ease-out forwards");

    }, 250);

  });

});
