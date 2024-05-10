// 햄버거버튼
let btncall = document.querySelector('.btncall');
let menu_mobile = document.querySelector('.menu_mobile');

btncall.addEventListener('click', (e) => {
	e.preventDefault();
	btncall.classList.toggle('on');
	menu_mobile.classList.toggle('on');
});

console.log('보이고있니');

// // 헤더 js 부분
// let offset = $('#header_top').offset();

// console.log(offset.top);

// $(window).scroll(function () {
// 	// console.log($(document).scrollTop());
// 	if ($(document).scrollTop() > offset.top) {
// 		$('#header_top').addClass('on');
// 	} else {
// 		$('#header_top').removeClass('on');
// 	}
// });

///
