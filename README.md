# annuaire
Ma première appli mobile ionic
# 2 pages : 
une page d'accueil Annuaire avec une photo pour commencer
une page des personnes Liste des personnes avec possibilité 
					de suppression d'une personne
					de création d'une personne
					de tri de la liste (capacitor)
					un accès à la page détail
					gestion de favori
une page détail avec une photo, le nom, le prénom, , favori la saisie des nom, prénom, n° de téléphone, profession
accès au téléphone (capacitor)

# Résultat
2 pages accessibles du menu
	une page d'accueil avec une image et non une photo (comme indiqué plus haut)
	une page des personnes avec possibilité 
					avec l'ActionSheetController
					de modifier les états de favorit 
					de supprimer une personne
					d'annuler 
					avec l'AlertController
					message de validation de suppression
					avec le ToastController 
					notification de confirmation de suppression
					mise en oeuvre de 2 ion-item-option
					mappage sur le delete
					mappage sur le service de passage d'appel
					mise en oeuvre de la searchBar avec un pipe
une page hors menu du détail d'une personne avec bouton retour et accessible de la page personnes
					Prise de photo avec Camera utilisation de PWA dans le main.ts avec defineCustomElements pour la prise de photo sur l'ordinateur
					Mise à jour des champs prénom nom profession n° de téléphone et photo
					mappage sur le service de passage d'appel
Cette version mise à part le rafraichissement fonctionne sur mon téléphone et sur le navigateur					
