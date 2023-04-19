function remove_product(e) {
	var panier = JSON.parse(localStorage.getItem('panier'));

	panier.splice(e, 1);
	// Store the modified array back into local storage
	localStorage.setItem('panier', JSON.stringify(panier));
	console.log(`L'objet avec l'id ${e} a été retiré`);
	panier_content();
}

function panier_content() {
	var panier = JSON.parse(localStorage.getItem('panier'));
	var recapCommande = $('#recap-commande');
	var script = `$('#boutique-fake-button').click(function () {
			redirect('pages/boutique.html', this);
		});`
	var content_vide = `<h3>Le panier semble vide! Pour acheter des produits, cliquez sur ce lien : <span class="fake-link" id="boutique-fake-button">Boutique</span><script>${script}</script></h3>`
	if (panier.length === 0) {
		recapCommande.html(content_vide);
		$("#downpdf").html('<h3 style="text-align:center">Le panier étant vide, vous ne pouvez pas passer commande</h3>');
	} else {
		var content_under_panier = `
  <input id="nom-entry" value="Michez" placeholder="Nom" required>
			<br>
			<input id="prenom-entry" value="Augustin" placeholder="Prénom" required>
			<br>
			<select id="class-entry-niveau" name="classes-niveau" required>
				<option value="Seconde" selected>Seconde</option>
				<option value="Première">Première</option>
				<option value="Terminale">Terminale</option>
			</select>
			<select id="class-entry-classe" name="classes-classe" required>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10" selected>10</option>
			</select>
			<br>
			<button id="download-pdf" type="submit">Download PDF</button>`
		$("#downpdf").html(content_under_panier);
		var content_of = '';
		$.each(panier, function(index, item) {
			var button_remove = '<button onclick="remove_product(' + index + ');update_number_of_item();">Retirer ce produit de la liste</button>';
			var itemDetails = '<li>' + item.quantité + ' ' + item.produit + ' taille ' + item.taille + ' à ' + item.prix_unitaire + '€ = ' + item.prix + '€ ' + button_remove + '</li>';
			content_of += itemDetails;
		});
		recapCommande.html(content_of);
	}
}