function taille_selection(button) {
	const value = $(button).attr('value');
	$(button).parent().parent().attr('taille', value);
	$(button).addClass('active').siblings().removeClass('active');
	console.log(`The product is changed to the size ${value}`)
}