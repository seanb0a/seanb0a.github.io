$(window).load(function() {

  $('.menu-open, .ion-ios-arrow-right').click(function() {
    $('.menu-overlay').css("animation", "open-menu 500ms ease-out forwards");
    $('.menu-close').css("animation", "getClose 250ms ease-out 500ms forwards");
    $('.first').css("animation", "scaleLeftNav 0.3s ease-out 0s forwards");
    $('.second').css("animation", "scaleLeftNav 0.3s ease-out 0.25s forwards");
    $('.third').css("animation", "scaleLeftNav 0.3s ease-out 0.5s forwards");
    $('.fourth').css("animation", "scaleLeftNav 0.3s ease-out 0.75s forwards");
  });

  $('.menu-close, .ion-ios-arrow-left').click(function() {
    $('.first, .second, .third, .fourth').fadeOut("fast");

    setTimeout(function() {

      $('.menu-overlay').css("animation", "close-menu 500ms ease-out forwards");
      $('.menu-close').css("animation", "loseClose 250ms ease-out forwards");

      setTimeout(function() {

        $('.first, .second, .third, .fourth').fadeIn("fast");

      }, 500);

    }, 250);

  });

  // var rnd = Math.random() * (8000 - 2000) + 2000;

  // setTimeout(function() {

  //   $('#loader').hide();
  //   $('#page').removeClass('hidden');

  // }, rnd);

});
