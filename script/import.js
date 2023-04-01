function redirect(e,f) {
	content = $('.content');
	element = $(f)
	content.load(e);
	$('.active').removeClass('active');
	element.parent().addClass('active');
}