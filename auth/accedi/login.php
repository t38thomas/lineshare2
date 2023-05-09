<?php

require_once('../connessione.php');

$email = $connessione->real_escape_string($_POST['email']);
$password = $connessione->real_escape_string($_POST['password']);

//controllo che gli input sono tutti riempiti
if (empty($email) || empty($password)) {
    echo "gli input non sono riempiti";
    header("location: index.php?error=empty_input");
    exit();
}

$sql_select = "SELECT * FROM utente WHERE email = '$email'";

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    if ($result = $connessione->query($sql_select)) {
        if ($result->num_rows == 1) {
            $row = $result->fetch_array(MYSQLI_ASSOC);
            if (password_verify($password, $row['pass'])) {
                session_start();

                $_SESSION['id'] = $row['id'];
                $_SESSION['nome'] = $row['nome'];
                $_SESSION['cognome'] = $row['cognome'];
                $_SESSION['email'] = $row['email'];
                $_SESSION['password'] = $row['pass'];
                $_SESSION['guidatore'] = $row['guidatore'];

                if(isset($row["fotoProfilo"]) && $row["fotoProfilo"] != null){
                    $_SESSION['foto'] = $row['fotoProfilo'];
                }


                $_SESSION['loggato'] = true;


                header("location: ../../");
            } else {
                echo "la password non è corretta";
                header("location: index.php?error=uncorrect_password");
                exit();
            }
        } else {
            echo "email non corretta";
            header("location: index.php?error=uncorrect_email");
            exit();
        }
    } else {
        echo "errore di connessione";
        header("location: index.php?error=server_connection");
        exit();
    }
}else{
    header("location: index.php");
    exit();
}
$connessione->close();
?>