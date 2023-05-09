<?php
    session_start();
    require_once("./connessione.php");
    $newEmail = $connessione->real_escape_string($_POST["emailProfilo"]);

    if(!empty($newEmail)){

    $sql = "UPDATE utente SET email = '$newEmail' WHERE utente.id =" . $_SESSION["id"] . " ;";

    if($connessione->query($sql)){
        $_SESSION["email"] = $newEmail;
    }

    }

    header("location: ../");
?>