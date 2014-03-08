<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="icon" href="img/icones/favicon.png"><!--Favicon-->
		<link rel="stylesheet" href="templates/css/reset.css"/>
		<link rel="stylesheet" href="templates/css/style.css"/><!--style globale-->
		<link rel="stylesheet" href="templates/css/equipe.css"/><!--style of this page-->
	
		<!--Google analytics-->
		<!--plus tard peut être-->
		<!--Fin google analytics-->

		<title>Drinkiit - équipe</title>
	</head>

	<body>
		<header>
			<?php include('templates/_header.php'); ?>
		</header>

		<div class="wait">
			<img src="img/ajax-loader.gif" alt="Je charge" />
		</div>
		<section id="team">
			<header>
				<ul>
					<li>
						<a href="equipe.php?year=2011">2011-2012</a>
					</li>
					<li>
						<a href="equipe.php?year=2012">2012-2013</a>
					</li>
					<li>
						<a href="equipe.php?year=2013">2013-2014</a>
					</li>
				</ul>	
			</header>
			<div id="main">
				<?php 
					include_once("functions/team.php");
					if(isset($_GET['year'])){
						$year = $_GET['year'];
						load_team($year);	
					}
					else 
						load_team(2013);	
				?>
			</div>
		</section>	
		
		<footer>
			<?php include('templates/_footer.php'); ?>  
		</footer>

	</body>
	
	<script type="text/javascript" src="templates/js/jquery.min.js">
	</script>

	<script type="text/javascript">
		$(window).load(function(){
			$(".wait").hide();
			$("#team").fadeIn();
		});
	</script>
</html>