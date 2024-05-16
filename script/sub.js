console.log('제품콘솔');

$('.tab .sub_product_visual_inner ul li').click(function (event) {
	event.preventDefault();
	$('.tab ul li').removeClass('active');
	$('.tab .conBox').removeClass('active');

	$(this).addClass('active');
	$('#' + $(this).data('tab')).addClass('active');
});

// 헤더 js 부분
let offset = $('#header_top').offset();

console.log(offset.top);

$(window).scroll(function () {
	// console.log($(document).scrollTop());
	if ($(document).scrollTop() > offset.top) {
		$('#header_top').addClass('on');
		$('#header_top img').attr('src', './img/logo(green).png');
	} else {
		$('#header_top').removeClass('on');
		$('#header_top img').attr('src', './img/logo(w).png');
	}
});
