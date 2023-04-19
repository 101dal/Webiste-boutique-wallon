function commande(elements) {
	const produit = $(elements).parent().attr('produit');
	const prix = $(elements).parent().attr('prix');
	const quantité = $(elements).closest('.article2').find('#nombre').val();
	const storepanier = JSON.parse(localStorage.getItem('panier'));
	const panier = (storepanier == null) ? [] : storepanier;
	const taille = $(elements).parent().attr('taille');
	const element = {
		produit: produit,
		taille: taille,
		prix_unitaire: prix,
		quantité: quantité,
		prix: prix * quantité
	};
	panier.push(element);
	localStorage.setItem('panier', JSON.stringify(panier));
	console.log(`Produit ajouté avec succès : produit ${produit} ; prix ${prix}€ ; quantité ${quantité}.`);
	update_number_of_item();
	return panier;
};