<?php
 
	//function that collect all the filename of a directory
	//and build a display of the team
	function load_team($year){
		$dirname = 'img/equipe/'.$year.'-'.($year+1).'/';
		$dir = 0;
		$team_array[] = array();
		$i=0;
		echo "<ul>";
		if($dir = opendir('./'.$dirname)){
			
			//we verify that no error is returned
			while(false !== ($file = readdir($dir))){
				if($file != '.' && $file != '..' 
					&& $file != 'index.php'){

					$img = $dirname.$file;
					$member = basename($img,".png");//name of the team member
					$string = "<li>
						<img src=".$img." alt=".$img.">
						<span>".$member."</span>
						<li>";
					echo $string;
				}
			}
			closedir($dir);
		}
		else
			echo "Le dossier".$dirname." n\'a pas pu être ouvert";

		echo "</ul><br />";	
	}
?>