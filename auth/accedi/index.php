<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lineshare</title>
    <link rel="icon" href="/lineshare/general/assets/logo2Mezzo.svg">
    <link rel="stylesheet" href="/lineshare/general/css/root.css">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="icon" href="">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../header/css/header.css">
    <style>
        .material-symbols-outlined {
            font-variation-settings:
                'FILL' 0,
                'wght' 400,
                'GRAD' 0,
                'opsz' 48
        }
    </style>
</head>

<body>
    
<?php
    require_once("../../header/php/headerGenerator.php");
?>

    <main>

    <div class="BigSinistra">
        <div class="containerImg">

            <img src="../../auth/assets/onda2.svg" alt="">

        </div>

        
    </div>
    

    <form action="login.php" method="post">

        <div class="bigContainer mostraCentro">
       
            <h1 class="child">Accedi in pochi semplici passaggi</h1>
            <h2 class="child">inserisci le tue credenziali</h2>
            <input type="email" name="email" id="email" placeholder="E-mail" class="child" required pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$">
            <div class="containerPassword child" style="margin-bottom: 15px;">
                    <input type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name="password" id="password" placeholder="Password" onfocusout="seleziona(4)" onfocus="seleziona(4)" title="Deve contenere almeno un numero e almeno una lettera maiuscola e minuscola, e deve essere lunga almeno 8 caratteri">
                    <span class="material-symbols-outlined" onclick="apriOccio(0)">visibility</span>
            </div>
            <div class="containerNext">
                <a href="../../auth/iscriviti/" class="nextBtn valido">Iscriviti</a>
                <div class="nextBtn" onclick="submitForm()">Next <i class="fa-solid fa-arrow-right"></i></div>
            </div>
            <div class="errore">
                <?php
                
                if(isset($_GET["accedi"])) if ($_GET["accedi"] == "1") echo "<p> registrazione effettuata con successo:<br> effettua l'accesso <p>";
                else if(isset($_GET["error"])){

                if ($_GET["error"] == "empty_input")
                    echo "<p> errore durante la registrazione: <br>gli input non sono riempiti* <p>";
                else if ($_GET["error"] == "uncorrect_email")
                    echo "<p> errore durante la registrazione:<br> email o password errata* <p>";
                else if ($_GET["error"] == "server_connection")
                    echo "<p> errore durante la registrazione:<br> connessione al server fallita* <p>";
                else if ($_GET["error"] == "uncorrect_password")
                    echo "<p> errore durante la registrazione:<br> email o password errata* <p>";

                }
                ?>
                </div>
            </div>
            

        </div>
    </form>
    </main>


    <script src="app.js"></script>
    <script src="../../header/js/app.js"></script>
    <script src="https://kit.fontawesome.com/8cf543d1bc.js" crossorigin="anonymous"></script>
</body>
</html>