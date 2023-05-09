<?php

    session_start();

    // if(!isset($_SESSION['loggato']) || $_SESSION['loggato'] !== true){       //se sei qui per sbaglio
    //     header("location: login.html");
    //     exit;
    // }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>area privata</title>

    <style>

        body{
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
        }

    </style>
</head>
<body>

    <div class="container">
    <h1>Home Page</h1>

    <?php

    if(isset($_SESSION["loggato"])){
        echo "ciao ". $_SESSION['nome'] . " " . $_SESSION['cognome'] . "!";
        echo "<a href='./log-out'>disconnettiti</a>";
    }else{
        echo "<a href='./login'>Accedi</a>";
    } 

    ?>
    </div>

</body>
</html>