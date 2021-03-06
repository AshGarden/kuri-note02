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

jQuery(function($){
	$(window).on('load scroll resize', function() {
		//　「section.test02」が存在したら発火
		if($('article.info').length){
        add_class_in_scrolling($('article.recruit'));
		}
	});
	// スクロールで要素が表示されている時にclassを付与する
	function add_class_in_scrolling(target) {
	    //　指定した要素の次の要素
      var nextElement = $('article.contact');
      var winScroll = $(window).scrollTop();
      var winHeight = $(window).height();
	    //　ウィンドウの最下部の位置取得
      var scrollPos = winScroll + winHeight;
	    //　指定した要素が画面内に入ったらclass付与して出たら削除
      if(target.offset().top - 100 < scrollPos && nextElement.offset().top + winHeight + 0 > scrollPos) {
          target.addClass('show');
      }else{
          target.removeClass('show');
      }
	}
});

$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
  });
  jQuery(window).scroll();
});