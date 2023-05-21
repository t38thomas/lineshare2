  <?php

    session_start();


    ?>
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lineshare</title>
    <link rel="stylesheet" href="/lineshare/general/css/scroll.css">
    <link rel="stylesheet" href="./header/css/header.css">
    <link rel="stylesheet" href="./home/css/style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"/>
    <link rel="icon" href="./general/assets/logo2Mezzo.svg">
    <link rel="stylesheet" href="/lineshare/general/css/root.css">
    <link rel="stylesheet" href="/lineshare/header/css/search.css">
    <script src="https://kit.fontawesome.com/8cf543d1bc.js" crossorigin="anonymous"></script>


</head>
<body>

    <?php
        require_once("./header/php/headerGenerator.php");
    ?>


    <main>

        <div class="containerOnda">
            <img src="./home/assets/back.svg" alt="">
        </div>

        <div class="containerCarte">
            <div class="carta">
                <div class="sopra">BENVENUTO</div>
                <div class="testo">
                    <p>
                    Ti serve un passaggio? <br>
                    Stai cercando dei piacevoli compagni che ti accompagnino durante il viaggio? <br>
                    Vuoi anche risparmiare? <br> Questo è il posto per te!
                    </p>
                </div>
            </div>
            <div class="carta">
                <div class="sopra">PERCHÉ</div>
                <div class="testo">
                    <p>
                    Spostarti velocemente e risparmiare ti sembrano un’utopia?
                    Non è più un sogno: Lineshare ti permette di fare entrambe le cose,
                    aiutando a preservare l’ambiente!
                    </p>
                </div>
            </div>
        </div>

        <div class="containerPercentuali">
            <p>se sono prenotati..</p>
            <div class="sinistra bigItem">
                <div class="item">1 posti</div>
                <div class="item">2 posti</div>
                <div class="item">3 posti</div>
                <div class="item">4 posti</div>
                <div class="item">5 posti</div>
            </div>
            <div class="centro bigItem">
                <div class="item"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="item"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="item"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="item"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="item"><i class="fa-solid fa-arrow-right"></i></div>
            </div>
            <div class="destra bigItem">
                <div class="item">0% OFF</div>
                <div class="item">50% OFF</div>
                <div class="item">66% OFF</div>
                <div class="item">75% OFF</div>
                <div class="item">80% OFF</div>
            </div>
        </div>

        
    </main>
  
    <script src="./general/js/app.js"></script>
    <script src="./header/js/app.js"></script>
</body>
</html>