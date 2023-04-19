function redirect(url, button) {
	const content = $('.content');
	const activeButton = $('.button-19.active');
	activeButton.removeClass('active');
	$(button).addClass('active');
	content.css({ opacity: 0 }).load(url, () => {
		content.css({ opacity: 1 });
	});
	console.log("this page is loaded")
}