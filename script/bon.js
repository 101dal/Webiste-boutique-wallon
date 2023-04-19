function download() {
	const storepanier = JSON.parse(localStorage.getItem('panier'));
	const prenom = $("#prenom-entry").val();
	const nom = $("#nom-entry").val();
	const classe = $("#class-entry-classe").val();
	const niveau = $("#class-entry-niveau").val();
	const classes = niveau + " " + classe
	// Create a new jsPDF instance
	var doc = new jsPDF();

	// Set font size and type
	doc.setFontSize(14);
	doc.setFont('times');

	// Center the "Bon d'achat" title
	doc.text("Bon d'achat", (doc.internal.pageSize.width / 2) - 20, 25, { align: "center" });

	// Set the position for the rest of the content
	var y = 50;

	// Add the description
	var description = `Ceci est un bon d’achat à usage unique, qui permettra, avec l’accompagnement \nde l’argent en liquide à payer, de récupérer les articles précommandés.\n\nCe bon d’achat est destiné à : \nPrénom: ${prenom}\nNom: ${nom}\nClasse: ${classes}.`;
	doc.text(description, 15, y);

	// Move down the y position
	y += 45;

	// Add the recapitulatif de la commande section
	doc.text("Récapitulatif de la commande:", 15, y);

	// Loop through the storepanier array and add the details to the PDF
	var paniertotal = 0;
	for (var i = 0; i < storepanier.length; i++) {
		var item = storepanier[i];
		var itemDetails = `  - ${item.quantité} ${item.produit} taille ${item.taille} à ${item.prix_unitaire}€`;
		y += 7;
		doc.text(itemDetails, 15, y);
		paniertotal += item.prix;
	}
	y += 12;
	doc.text(`TOTAL: ${paniertotal}€`, 15, y);

	// Save the PDF
	doc.save(`Bon d'achat de ${prenom}.pdf`);
}