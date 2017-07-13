<?php

$section = $_POST['section'];
$answer = $_POST['answer'];

switch($section) {
	case 1:
	if ($answer === 'antwoord') {
		echo "juist";
	} else {
		echo "fout";
	}
	break;
	default:
	echo "fuck";
	break;
}


?>