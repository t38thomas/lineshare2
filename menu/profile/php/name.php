<?php
    session_start();
    require_once("./connessione.php");
    $newNome = $connessione->real_escape_string($_POST["nomeProfilo"]);

    if(!empty($newNome)){

    $sql = "UPDATE utente SET nome = '$newNome' WHERE utente.id =" . $_SESSION["id"] . " ;";

    if($connessione->query($sql)){
        $_SESSION["nome"] = $newNome;
    }

    }

    header("location: ../");
?>