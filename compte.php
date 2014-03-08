<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="icon" href="Images/Icones/favicon.png">
		<link rel="stylesheet" href="templates/css/reset.css"/>
		<link rel="stylesheet" href="templates/css/style.css" />
		<link rel="stylesheet" href="templates/css/compte.css"/>
		<title>Compte</title>
	</head>

	<body>
		<header>
			<?php include('templates/_header.php'); ?>
		</header>

		<section class="formulaire">
			<!-- formulaire -->
			<h1>Mon compte</h1>
			<form class="form" method="post" action="compte.php">
				<p class = "prenom">
					<input type="text" name="prenom" id="prenom"/>
					<label for="prenom">Prénom</label>
				</p>
				<p class = "om">
					<input type="text" name="nom" id="nom"/>
					<label for="nom">Nom</label>
				</p>
				<p class="submit">
					<input type="submit" value="Mon compte"/>
				</p>
			</form>

			<!-- traitement des entrée -->
			<?php
				if(isset($_POST['prenom']))
					$prenom = $_POST['prenom']; 
				
				if(isset($_POST['prenom']))
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
			<!-- fin traitement des entrées -->
		</section>

		<?php
			//connexion à la BDD
			include('config/config.php') ;
			include('functions/database.fn.php');
			
			$bdd = getPDOLink($config);
			//Fin connexion à la BDD
		?>

	
		<p>
			<?php
				//DEBUT RECUPERATION DES DONNEES
				//on selectionne tous les clients	
				$reponse =$bdd->query('SELECT * from client');

				// On affiche chaque entrée une à une
				while ($donnees = $reponse->fetch()) 
				{
					//on récupère le bon client
					if (strtolower($donnees['prenom'])==strtolower($prenom)
					    && strtolower($donnees['nom'])==strtolower($nom) ) {
					?>	
					    <p>
					    <strong>Client</strong> : <?php echo utf8_encode($donnees['prenom']).' '.utf8_encode($donnees['nom']);?> 
					     <br />
					    <strong>Solde</strong> : <?php echo $donnees['solde']; ?> euros !<br />
					   </p>
					  	<!-- Traitement du solde -->
						<?php
							if ($donnees['$solde']<0){
						?>		<p>Attention ton solde est négatif, pense à venir remplir ton compte !</p>	
						<?php
							}
							else{
						?>		<p>Ton compte est positif, pas de soucis.</p>
						<?php		
							}
					}//fin du if
				}//fin du while
				
				$reponse->closeCursor(); // Termine le traitement de la requête
				//FIN RECUPERATION DES DONNEES
			?>
		</p>
		<footer>
			<?php include('templates/_footer.php'); ?>  
		</footer>
	</body>
</html>