<div id="owo">
<h1 style="padding-left:20px;">Welcome to André's Automatic Text Editor!</h1>
<form style="text-align: center;" action="?page=owofier" method="POST">
    <textarea name=msg cols="120" rows="15">Insert your text here</textarea><br>
    <input type=radio name=kind value="Owofier"> Owofier
    <input type=radio name=kind value="Correct"> Politically Correct<br>
    <input type=radio name=kind value="Cebolinha"> Cebolinha<br>
    <input type=submit value="Send!">
</form>
    <p id="frick">
    <?php
    switch($_POST['kind']){
        case 'Owofier':
            owofy($_POST['msg']);
            break;
        case 'Correct':
            correct($_POST['msg']);
            break;
        case 'Cebolinha':
            cebolinha($_POST['msg']);
            break;
        default:
            echo("Your text should be placed here...");
            break;
    }
    ?>
    </p>
</div>

<?php
    function owofy($x){
        $msg = "UwU<br>";
        $word = "";
        for($i = 0; $i <= strlen($x);$i++){
            $char = substr($x, $i, 1);
            $spaces = substr_count($msg, ' ');
            if(($spaces > 10)&&($spaces%10 == 0)){
                $furray = array(" OwO "," UwU "," *nuzzles* "," hmmm "," >:3c", " ~so warm... "," RAWR!! ", " x3 ", " murr~ ", " º-º ", " o3o ");
                $msg = $msg.$furray[rand(0,sizeof($furray))];
            }
            if(($char != "r")&&($char != "l")&&($char != "R")&&($char != "L")&&($char != "\n")){
                $msg = $msg.$char;
            }
            elseif(($char =="r")||($char == "l")){
                $msg = $msg."w";
            }
            elseif($char == "\n"){
                $msg = $msg."<br>";
            }
            else{
                $msg = $msg."W";
            }
        }
        $msg = $msg." <br>UwU";
        echo("$msg");
    }

    function cebolinha($x){
        $msg = "";
        for($i = 0; $i <= strlen($x);$i++){
            $char = substr($x, $i, 1);
            if($char == "r"){
                if(substr($x,$i,2) == "rr"){
                    $msg = $msg."l";
                    $i++;
                }
                elseif((substr($x,$i,2) == "r ")||($i+1 > strlen($x))){
                    $msg = $msg.$char;
                }
                else{
                    $msg = $msg."l";
                }
            }
            elseif($char == "R"){
                if(substr($x,$i,2) == "RR"){
                    $msg = $msg."L";
                    $i++;
                }
                elseif(substr($x,$i,2) == "R "||($i+1 > strlen($x))){
                    $msg = $msg.$char;
                }
                else{
                    $msg = $msg."L";
                }
            }
            else{
                $msg = $msg.$char;
            }
        }
        echo($msg);
    }
?>