function update_number_of_item() {
	var panier = JSON.parse(localStorage.getItem('panier'));
	$('.number_of_item').text(panier.length);
}