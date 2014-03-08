<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="icon" href="img/icones/favicon.png"><!--Favicon-->
		<link rel="stylesheet" href="templates/css/reset.css"/>
		<link rel="stylesheet" href="templates/css/story.css"/><!--style pour la partie "Our Story"-->
		<link rel="stylesheet" href="templates/css/menuDrinkiit.css"><!--style pour la partie "Menu drinkiit"-->
		<link rel="stylesheet" href="templates/css/style.css"/><!--style globale-->
	
		<!--Google analytics-->
		<!--plus tard peut être-->
		<!--Fin google analytics-->

		<title>Drinkiit</title>
	</head>

	<body>
		<header>
			<?php include('templates/_header.php'); ?>
		</header>

		<section id="story">
			<img src="img/our_story.png" alt="l'histoire de Drinkiit">
			<article>
				<div class="heading">
					<div class="year">2010</div>
					<div class="float_right">
						<h2>La création</h2>
						<p>Jelly beans carrot cake dessert cookie sweet roll jujubes. Chocolate bear claw chocolate cake chocolate bar chocolate cake marshmallow I love biscuit gummies. Pastry sweet roll jelly.
						<br>	
						Chocolate I love chocolate cake I love dragée soufflé marshmallow chocolate cake. Carrot cake donut liquorice cupcake donut. Jelly-o jelly-o sweet roll cookie applicake dragée chocolate cake bonbon. Tiramisu gingerbread bonbon.</p>
					</div>
					<div class="spacer"></div>
				</div>
			</article>

			<article>
				<div class="heading">
					<div class="year">2011</div>
					<div class="float_left">
						<h2>Nucléair en action</h2>
						<p>Jelly beans carrot cake dessert cookie sweet roll jujubes. Chocolate bear claw chocolate cake chocolate bar chocolate cake marshmallow I love biscuit gummies. Pastry sweet roll jelly.
						<br>	
						Chocolate I love chocolate cake I love dragée soufflé marshmallow chocolate cake. Carrot cake donut liquorice cupcake donut. Jelly-o jelly-o sweet roll cookie applicake dragée chocolate cake bonbon. Tiramisu gingerbread bonbon.</p>
					</div>
					<div class="spacer"></div>
				</div>	
				
			</article>

			<article>
				<div class="heading">
					<div class="year">2012</div>
					<div class="float_right">
						<h2>Toujours plus Radioactif</h2>
						<p>Jelly beans carrot cake dessert cookie sweet roll jujubes. Chocolate bear claw chocolate cake chocolate bar chocolate cake marshmallow I love biscuit gummies. Pastry sweet roll jelly.
						<br>
						<br>
						Chocolate I love chocolate cake I love dragée soufflé marshmallow chocolate cake. Carrot cake donut liquorice cupcake donut. Jelly-o jelly-o sweet roll cookie applicake dragée chocolate cake bonbon. Tiramisu gingerbread bonbon.
						</p>
					</div>
					<div class="spacer"></div>
				</div>
			</article>

			<article>
				<div class="heading">
					<div class="year">2013</div>
					<div class="float_left">
						<h2>Le renouveau</h2>
						<p>Jelly beans carrot cake dessert cookie sweet roll jujubes. Chocolate bear claw chocolate cake chocolate bar chocolate cake marshmallow I love biscuit gummies. Pastry sweet roll jelly.
						<br>	>
						Chocolate I love chocolate cake I love dragée soufflé marshmallow chocolate cake. Carrot cake donut liquorice cupcake donut. Jelly-o jelly-o sweet roll cookie applicake dragée chocolate cake bonbon. Tiramisu gingerbread bonbon.</p>
					</div>
					<div class="spacer"></div>
				</div>	
			</article>
		</section>	
		<section id="detail_menu">
			<article>
				<div id="title">
					<h1 class="white">Drinkiit</h1>
					<h2 class="red">more than just drinks</h2>
				</div>
				<div id="soda_snacks">
					<div id="soda">
						<h1 class="white">soda</h1>
						<div class="prix white">0.6€</div>
					</div>
					<div id="snacks">
						<h1 class="white">snacks</h1>
						<div class="prix white" >0.5€</div>
					</div>
				</div>
				<div class="spacer"></div>
				<div id="pizza">
					<h1 class="white">pizza</h1>
					<h2 class="red">approved by ninja turtle</h2>
					<h3 class="white">pizza regina</h3>
					<p class="red">sauce tomate, jambon, gruyère</p>
					<br>
					<h3 class="white">pizza poulet curry</h3>
					<p class="red">crême, poulet, gruyère, cury</p>
					<div class="prix white">3.2€</div>
				</div>
				<div id="sandwich">
					<h1 class="white">sandwich</h1>
					<h2 class="red">the geek food</h2>
					<p class="red">salade, tomate, jambon gruyère</p>
					<div class="prix white">1.2€</div>
				</div>
				<div class="spacer"></div>
				<div class="separation"></div>
				<div id="knacks">
					<h1 class="white">knacks</h1>
					<div class="prix white">1€</div>
				</div>
				<div id="potatoes">
					<h1 class="white">potatoes</h1>
					<div class="prix white">1€</div>
				</div>

			</article>
		</section>
		<div class="spacer"></div>
		<footer>
			<?php include('templates/_footer.php'); ?>  
		</footer>

	</body>
</html>