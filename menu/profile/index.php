<?php
    session_start();
    if(!isset($_SESSION["loggato"])) header('location: /lineshare/');
?>

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lineshare</title>

    <link rel="stylesheet" href="/lineshare/general/css/scroll.css">
    <link rel="stylesheet" href="/lineshare/general/css/root.css">
    <link rel="stylesheet" href="/lineshare/header/css/header.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"/>
    <link rel="stylesheet" href="/lineshare/menu/menu.css">
    <link rel="stylesheet" href="/lineshare/menu/profile/css/style.css">  
    <link rel="icon" href="/lineshare/general/assets/logo2Mezzo.svg">
    <script src="https://kit.fontawesome.com/8cf543d1bc.js" crossorigin="anonymous"></script>

</head>
<body>
    

    <?php
        require_once("../../header/php/headerGenerator.php");
    ?>

    <main>

    <div class="BigContainerImg">
        <div class="containerImg">
            <img src="../../auth/assets/onda2.svg" alt="">
        </div>
    </div>

    <div class="BigContainerCentro">
        <div class="containerFotoProfilo">
        <form action="./php/foto.php" method="post" enctype="multipart/form-data">
        <input type="file" name="filePicker" id="filePicker" style="display:none;" accept="image/*">
        </form>  
        <?php 
            
            if(!isset($_SESSION["foto"])){
                echo'
                    <div class="foto" onclick="scegliFoto()">
                    <i class="fa-solid fa-camera"></i>
                    <p>inserisci una tua <br> foto</p>
                    </div>';
            }else{



                
                echo '
                    <div class="fotoMessa">
                    <img src="'. $_SESSION["foto"] .'" alt="">
                
                        
                    <div class="foto" onclick="scegliFoto()">
                    <i class="fa-solid fa-camera"></i>
                    <p>modifica la tua <br> foto</p>
                    </div>

                 
                    </div>';
            }
        ?>

            <div class="nome">
                <?php
                    $orario = date('H');
                    
                    if($orario >= 6 && $orario < 12) echo "<p> Buon giorno, ";
                    else if($orario >= 12 && $orario < 18) echo "<p> Buon pomeriggio, ";
                    else if($orario >= 18) echo "<p> Buona sera, ";
                    
                    echo  " <span style='font-weight:700;'>" . $_SESSION["nome"] . " </span>" . $_SESSION["cognome"] . "</p>";
                ?>
            </div>
        </div>

        <div class="container">
            <div class="item">
                <form class="sub-item" method="post" action="./php/name.php" id="formNome">
                    <span>
                    <div class="label">Nome: </div>
                    <input type="text" name="nomeProfilo" id="nomeProfilo" value="<?php echo $_SESSION["nome"]; ?>" readonly required pattern="[a-zA-Z]{2,15}">
                    </span>
                    <div class="cambiaBtn cancellaBtn" onclick="annulla(1)">
                    <span>
                    <i class="fa-solid fa-xmark"></i>
                    </span>
                    </div>
                    <div class="cambiaBtn" onclick="cambiaInput(1)"><i class="fa-solid fa-pencil"></i></div>
                </form>
                <div class='containerLinea'><div class='linea'></div></div>
            </div>
            <div class="item">
                <form class="sub-item" method="post" action="./php/cognome.php" id="formCognome">
                    <span>
                    <div class="label">Cognome: </div>
                    <input type="text" name="cognomeProfilo" id="conomeProfilo" value="<?php echo $_SESSION["cognome"]; ?>" readonly required pattern="[a-zA-Z]{2,15}">
                    </span>
                    <div class="cambiaBtn cancellaBtn" onclick="annulla(2)"><i class="fa-solid fa-xmark"></i></div>
                    <div class="cambiaBtn" onclick="cambiaInput(2)"><i class="fa-solid fa-pencil"></i></div>
                </form>
                <div class='containerLinea'><div class='linea'></div></div>
            </div>
            <div class="item">
                <form class="sub-item" method="post" action="./php/email.php" id="formEmail">
                    <span>
                    <div class="label">Email: </div>
                    <input type="email" name="emailProfilo" id="emailProfilo" value="<?php echo $_SESSION["email"]; ?>" readonly required pattern="[a-z0-9A-Z._%+-]+@[a-z0-9A-Z.-]+\.[a-z]{2,4}$">
                    </span>
                    <div class="cambiaBtn cancellaBtn" onclick="annulla(3)"><i class="fa-solid fa-xmark"></i></div>                   
                    <div class="cambiaBtn" onclick="cambiaInput(3)"><i class="fa-solid fa-pencil"></i></div>
                </form>
                <div class='containerLinea'><div class='linea'></div></div>
            </div>
        </div>

        <?php

            if($_SESSION["guidatore"] == 0){ //se non è un guidatore

            }
            else{                             //se è un guidatore


            }

        ?>
        
    </div>

    <script src="/lineshare/header/js/app.js"></script>
    <script src="/lineshare/menu/profile/js/app.js"></script>
</body>
</html>