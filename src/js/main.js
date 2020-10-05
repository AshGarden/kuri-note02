$(window).on('load resize', function(){
  var winW = $(window).width();
  var devW = 1080;
  if (winW >= devW) {
      $(function(){
        $('.works-item').each(function() {
          var $wrap = $(this);
          var capHeight = $wrap.find('div').outerHeight(true);
          $wrap.children('div').css({bottom : -capHeight});
          $wrap.hover(
            function () {
              $wrap.find('div').stop().animate({bottom : 0});
            },
            function () {
              $wrap.find('div').stop().animate({bottom : -capHeight});
            }
          );
        });
      });
  }
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

//$(function(){
//  $('.btn-trigger').on('click', function() {
//    $("nav").slideToggle();
//    $(this).toggleClass('active');
//    return false;
//  });
//});

//$(window).on('load resize', function(){
//  var winW = $(window).width();
//  var devW = 1080;
//    if (winW >= devW) {
//        $(function(){
//        $('nav li, nav').on('click', function() {
//        $("nav").slideDown();
//        $(".btn-trigger").toggleClass('active'); 
//      });
//    });
//  }
//});
