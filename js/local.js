$(function(){
  var speedIn = 200;

  $('.lightbox img').on('click', function(){
    var src = $(this).attr('src');
    var overlayH = $(document).height();
    var windowH = $(window).height();
    var scrollTop = $(document).scrollTop();
    var modalTop = scrollTop + (windowH/2);

    $('body').append('<div class="overlay"></div>');
    $('.overlay').css('height', overlayH).fadeIn(speedIn);
    if ($(window).height() > $('html').height()) {
      $('body').addClass('noscroll');
    }
    $('.overlay').before('<div class="modal"><img src="'+ src + '"></div>');
    $('.modal').fadeIn(speedIn);

    var element = $('.modal img');
    element.on('load', function(){
      var img = new Image();
      img.src = element.attr('src');
      var iw = img.width;
      var ih = img.height;
      console.log(img);
      console.log(iw + ' : ' + ih);

      $('.modal').css('top', modalTop);
      $('.modal').css('marginTop', -(ih/2));
      $('.modal').css('marginLeft', -(iw/2));

    });
  });

  $(document).on('click', '.overlay', function(){
    $('.modal').remove();
    $(this).remove();
    $('body').removeClass('noscroll');
  });

});