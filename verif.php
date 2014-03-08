<!DOCTYPE html>
<html>
	<?php
		//fichier permettant de vérifier les donnée rentré par l'utilisateur dans le formulaire
		$prenom = $_POST['prenom']; 
		$nom = $_POST['nom'];
		
		if(empty($prenom)) 
		{ ?>
			<span class="warning">Veuillez entrer votre prénom !</span> 
		<?php
			exit(); 
		}
		if(empty($nom)) 
		{ ?> 
			<span class="warning">Veuillez entrez votre nom !</span>
		<?php
			exit(); 
		} 
		print("<center>Bonjour $prenom $nom</center>");
	?>
</html>	