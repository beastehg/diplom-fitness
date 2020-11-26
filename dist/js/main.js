$(document).ready(function () {
	$('.burger-menu').on('click', function (e) {
		e.preventDefault();
		$('body').toggleClass('menu-active')
	})
});
