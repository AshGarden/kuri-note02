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

