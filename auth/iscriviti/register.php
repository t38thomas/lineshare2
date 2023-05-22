<?php
require_once('../connessione.php');


$email = $connessione->real_escape_string($_POST['email']);
$nome = $connessione->real_escape_string($_POST['nome']);
$cognome = $connessione->real_escape_string($_POST['cognome']);
$password = $connessione->real_escape_string($_POST['password']);
$Cpassword = $connessione->real_escape_string($_POST['Cpassword']);

//controllo che gli input sono tutti riempiti
if (empty($nome) || empty($email) || empty($cognome) || empty($password) || empty($Cpassword)) {
    echo "gli input non sono riempiti";
    header("location: index.php?error=empty_input");
    exit();
}



if ($password == $Cpassword) {

    $hashedpassword = password_hash($password, PASSWORD_DEFAULT);

    $sqlRead = "SELECT email FROM utente WHERE email = '$email'";
    if ($result = $connessione->query($sqlRead)) {
        if ($result->num_rows == 0) {

            $sqlWrite = "INSERT INTO utente (id, email, pass, nome, cognome, numeroCellulare, dataNascita, sesso, fotoProfilo) VALUES ('', '$email', '$hashedpassword', '$nome', '$cognome', NULL, NULL, NULL, NULL)";

            if ($connessione->query($sqlWrite) === true) {

                echo "Registrazione effettuata con successo";

                $sql_select = "SELECT * FROM utente WHERE email = '$email'";

              
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
                            }
                        }
                    }

            

            } else {
                echo "Registrazione fallita";
                header("location: ./index.php?error=registration_failed");
                exit();
            }
        } else {
            echo "email già registrata";
            header("location: ./index.php?error=email_already_exists");
            exit();
        }
    } else {
        echo "errore nella connessione al server";
        header("location: ./index.php?error=server_connection");
        exit();
    }
} else {
    echo "le password non coincidono";
    header("location: ./index.php?error=uncorrect_password");
    exit();
}


?>