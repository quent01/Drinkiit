<?php 
	//fonction permettant de se connecter à la BDD
	function getPDOLink($config){
		
		$dsn = 'mysql:dbname='.$config['database'].';host='.$config['host'].';
				charset=utf8';

		try {
			return new PDO($dsn, $config['username'], $config['password']);
		} catch (PDOException $e){
			echo 'Erreur : '.$e->getMessage().'<br />';
		    echo 'N° : '.$e->getCode();
		    //die();//on tue le script php (les lignes situées après ne seront jamais executées)
		}
	}
?>