<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lineshare</title>
    <link rel="icon" href="../../general/assets/logo2Mezzo.svg">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="icon" href="">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../header/css/header.css">
    <link rel="stylesheet" href="../../general/css/root.css">

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

    <form method="POST" action="./register.php">
        <div class="bigContainer mostraCentro">

            <h1 class="child">Iscriviti in pochi semplici passaggi</h1>
            <h2 class="child">inserisci la tua E-mail</h2>
            <input type="email" name="email" id="email" placeholder="E-mail" class="child" required pattern="[a-z0-9A-Z._%+-]+@[a-z0-9A-Z.-]+\.[a-z]{2,4}$" style="margin-bottom: 15px;">

                


                <div class="containerNext">
                <a href="../../auth/Accedi/" class="nextBtn valido">Accedi</a>
                <div class="nextBtn" onclick="swapView(1)">Next<i class="fa-solid fa-arrow-right"></i></div>
                </div>
                <div class="errore">
                <?php

                if(isset($_GET["error"])){

                if ($_GET["error"] == "email_already_exists")
                    echo "<p> errore durante la registrazione: <br> email già registrata* <p>";
                else if ($_GET["error"] == "empty_input")
                    echo "<p> errore durante la registrazione: <br>gli input non sono riempiti* <p>";
                else if ($_GET["error"] == "registration_failed")
                    echo "<p> errore durante la registrazione:<br> registrazione fallita* <p>";
                else if ($_GET["error"] == "server_connection")
                    echo "<p> errore durante la registrazione:<br> connessione al server fallita* <p>";
                else if ($_GET["error"] == "uncorrect_password")
                    echo "<p> errore durante la registrazione:<br> le password non coincidono* <p>";

                }
                ?>
                </div>
            </div>




        </div>

        <div class="bigContainer ">
            <h1 class="child">Iscriviti in pochi semplici passaggi</h1>
            <h2 class="child">inserisci il tuo nome e il tuo cognome</h2>
            <input type="text" name="nome" id="nome" placeholder="Nome" class="child" required pattern="[a-zA-Z]{2,15}">
            <input type="text" name="cognome" id="cognome" placeholder="Cognome" class="child" required pattern="[a-zA-Z]{2,15}" style="margin-bottom: 15px;">
            <div class="containerNext">
                <div class="nextBtn valido " onclick="swapView(1)"> <i class="fa-solid fa-arrow-left"></i> Prev</div>
                        <div class="nextBtn" onclick="swapView(2)">Next <i class="fa-solid fa-arrow-right"></i></div>
                </div>
            </div>

            <div class="bigContainer ">
                <h1 class="child">Iscriviti in pochi semplici passaggi</h1>
                <h2 class="child">inserisci e conferma la tua password</h2>

                <div class="containerPassword child">
                    <input type="password" required name="password" id="password" placeholder="Password" onfocusout="seleziona(3)" onfocus="seleziona(3)" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Deve contenere almeno un numero e almeno una lettera maiuscola e minuscola, e deve essere lunga almeno 8 caratteri">
                    <span class="material-symbols-outlined" onclick="apriOccio(0)">visibility</span>
                </div>

                <div class="containerPassword child" style="margin-bottom: 15px;">
                    <input type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name="Cpassword" id="Cpassword" placeholder="Conferma password" onfocusout="seleziona(4)" onfocus="seleziona(4)" title="Deve contenere almeno un numero e almeno una lettera maiuscola e minuscola, e deve essere lunga almeno 8 caratteri">
                    <span class="material-symbols-outlined" onclick="apriOccio(1)">visibility</span>
                </div>


                <div class="containerNext">
                    <div class="nextBtn valido " onclick="swapView(2)"><i class="fa-solid fa-arrow-left"></i> Prev</div>
                            <div class="nextBtn submitBtn" onclick="submitForm()"> Iscriviti <i class="fa-solid fa-arrow-right"></i></div>
                    </div>
                </div>



    </form>
    </main>

    <script src="app.js"></script>
    <script src="../../header/js/app.js"></script>
    <script src="https://kit.fontawesome.com/8cf543d1bc.js" crossorigin="anonymous"></script>
</body>

</html>