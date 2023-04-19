function boutique_loaded() {
	$(" div.produit").each(function() {
		var prix = $(this).attr("prix"); var name_of_product = $(this).attr("produit");
		$(this).find(".selector").after("<br><p class= 'prix' > Le prix est de " + prix + "€</p><br> ");
		$(this).find("h2").text(name_of_product);
	});

	$(".add_panier").each(function() {
		$(this).attr("onclick", 'commande(this);');
		console.log("one commande click added");
	});
	$(".selectbutton").each(function() {
		$(this).attr("onclick", 'taille_selection(this);');
		console.log("one taille_selection click added");
	});
}