<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="icon" href="Images/Icones/favicon.png">
		<link rel="stylesheet" href="templates/css/reset.css"/>
		<link rel="stylesheet" href="templates/css/style.css" />
		<link rel="stylesheet" href="templates/css/contact.css"/>
		<title>Contact</title>
	</head>

	<body>
		<header>
			<?php include('templates/_header.php'); ?>
		</header>

		<div id="content">
			<h1> Contact us </h1>
			<form action="contact.php" method="post"  autocomplete="on">
				<p>
					<label for="username" class="iconic user" > Name <span class="required">*</span>
					</label>
					<input type="text" name="username" id="username"  name="username" required="required" placeholder="Yo, c'est quoi ton petit nom ?"  />
				</p>
				 
				<p>
					<label for="usermail" class="iconic mail-alt"> E-mail address 
					<span class="required">*</span>
					</label> <input type="email" name="usermail" id="usermail" name="usermail" placeholder="Promis, on déteste le spam autant que toi !" required="required"  />
				</p>
				 
				<p> 
					<label for="subject" class="iconic quote-alt"> Subject </label>
					<input type="text" id="subject" name="subject" placeholder="Tu souhaite parler de quoi ?" />
				</p>
				 
				<p> 
					<label for="message" class="iconic comment"> Message  
					<span class="required">*</span></label>
					<textarea id="message" name="message" placeholder="Soit pas timide, laisse nous un message et nous te répondrons le plus vite possible "  required="required" ></textarea> 
				</p>
				 
				<p class="indication"> All fields with a 
					<span class="required">*</span> are required
				</p>
				 
				<input type="submit" name="envoi" value=" ★  Envoyer !" />      
			</form>
			<br><br>
			<?php include ("templates/envoi.php") ?>                             
		</div> 
		<footer>
			<?php include('templates/_footer.php'); ?>  
		</footer>
	</body>
</html>