$("#menu").on("click", "a", function (event) {
	event.preventDefault();
	var id = $(this).attr('href'),
		menu_top = $(id).offset().top;
	$('body,html').animate({ scrollTop: menu_top }, 1200);
});