<?php
    session_start();
    require_once("./connessione.php");
    $newCognome = $connessione->real_escape_string($_POST["cognomeProfilo"]);

    if(!empty($newCognome)){

    $sql = "UPDATE utente SET cognome = '$newCognome' WHERE utente.id =" . $_SESSION["id"] . " ;";

    if($connessione->query($sql)){
        $_SESSION["cognome"] = $newCognome;
    }

    }

    header("location: ../");
?>