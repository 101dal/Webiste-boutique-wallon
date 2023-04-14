function redirect(e, f) {
	content = $('.content');
	element = $(f)
	content.css("opacity", "0");
	//setTimeout(() => {
	content.load(e);
	content.css("opacity", "1");
	//}, 200);
	$('.active').removeClass('active');
	element.addClass('active');
}