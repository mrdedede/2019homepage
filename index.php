<?php
$page = 'home';
if(isset($_GET['page'])){
    $page = addslashes($_GET['page']);
}
include 'header.php';
switch ($page){
    case 'owofier':
        include 'owofier.php';
        break;
    
    case 'jogos':
        include 'games.php';
        break;

    case 'ttc':
        include 'ttc.php';
        break;

    default:
        include 'home.php';
        break;
}
include 'footer.php';
?>