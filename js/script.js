jQuery('document').ready(function () {
	$('.header__burger').on('click', function (event) {
		$('.header__burger,.header, .header__menu, body').toggleClass('active');
	})
})

