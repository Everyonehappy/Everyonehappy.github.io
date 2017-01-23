$(function(){

	// フローティングメニュー処理

	var floating = $('#header');
	var offset = floating.offset();
	var limit_pos = $('body').height() - ( $('#footer').height() + floating.height( ) );

	$(window).scroll(function() {
		if(limit_pos < $(window).scrollTop()) {
			return false;
		}

		if ($(window).scrollTop() > offset.top) {
			floating.stop().animate({
				marginTop: $(window).scrollTop() - offset.top
			});
		} else {
			floating.stop().animate({
				marginTop: 0
			});
		};
	});

	$('a').on('click', function(){
		var speed = 400;
		var href= $(this).attr('href');
		var target = $(href == '#' || href == ""? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});
