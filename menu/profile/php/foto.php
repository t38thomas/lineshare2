<?php

session_start();



// Recupera l'immagine caricata dal form
$immagine = $_FILES['filePicker']['tmp_name'];

// Specifica la cartella in cui salvare l'immagine
$cartella_salvataggio = "../../../general/assets/user/";

// Genera un nome univoco per l'immagine
$nome_immagine = uniqid() . "_" . basename($_FILES['filePicker']['name']);

// Crea il percorso completo dell'immagine
$percorso_immagine = $cartella_salvataggio . $nome_immagine;
$percorso = "/lineshare/general/assets/user/" . $nome_immagine;

// Sposta l'immagine nella cartella di destinazione
move_uploaded_file($immagine, $percorso_immagine);

$_SESSION["foto"] = $percorso;

require_once("./connessione.php");
$sql = "UPDATE utente SET fotoProfilo = '$percorso' where id = '".$_SESSION['id']."'";
$connessione->query($sql);



header("location: ../")

?>
