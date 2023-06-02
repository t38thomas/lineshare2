<?php

    session_start();
    
    $partenza = $_POST["partenza"];
    $arrivo = $_POST["arrivo"];

    if(!isset($_SESSION["loggato"])){
        header("location: ../auth/accedi/index.php?error=auth_error");
    }

    if(!isset($_POST["partenza"]) || !isset($_POST["arrivo"])){
        header("location: ../");
    }else{
    
        $partenza = ucfirst(strtolower($partenza));
        $arrivo =  ucfirst(strtolower($arrivo));
    }

    



?>

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lineshare</title>

    <link rel="stylesheet" href="/lineshare/general/css/root.css">
    <link rel="stylesheet" href="/lineshare/header/css/header.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"/>
    <link rel="stylesheet" href="/lineshare/menu/menu.css">
    <link rel="stylesheet" href="/lineshare/menu/profile/css/style.css">  
    <link rel="icon" href="/lineshare/general/assets/logo2Mezzo.svg">
    <link rel="stylesheet" href="/lineshare/auth/style.css">
    <script src="https://kit.fontawesome.com/8cf543d1bc.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./css/style.css">

</head>
<body>
    
    <?php
        require_once("../header/php/headerGenerator.php");
    ?>

    <main>

    <div class="BigSinistra">
        <div class="containerImg">

            <img src="/lineshare/auth/assets/onda2.svg" alt="">

        </div>

        
    </div>

    <form method="POST" action="./register.php">

        <div class="bigContainer mostraCentro">

            <h1 class="child"> Andrò da </h1>
            <h2 class="child"> <?php echo $partenza . " a " . $arrivo . " e..";?> </h2>
            
            <div class="containerPosti child">
                <div class="sinistra sub-child">Ho posto per</div>
                <div class="centro sub-child">
                    <span class="material-symbols-outlined" onclick="aggiungiPosto(-1)">remove_circle</span>
                    <div class="numero">4</div>
                    <span class="material-symbols-outlined" onclick="aggiungiPosto(1)">add_circle</span>

                </div>
                <div class="destra sub-child mostraPasseggeri" style="justify-content: center;">passeggeri</div>
            </div>

           
                


                <div class="containerNext">
                <div class="nextBtn valido" onclick="swapView2(1)">Next<i class="fa-solid fa-arrow-right"></i></div>
                </div>
                <div class="errore">
                <?php

                // if(isset($_GET["error"])){

                // if ($_GET["error"] == "email_already_exists")
                //     echo "<p> errore durante la registrazione: <br> email già registrata* <p>";
                // else if ($_GET["error"] == "empty_input")
                //     echo "<p> errore durante la registrazione: <br>gli input non sono riempiti* <p>";
                // else if ($_GET["error"] == "registration_failed")
                //     echo "<p> errore durante la registrazione:<br> registrazione fallita* <p>";
                // else if ($_GET["error"] == "server_connection")
                //     echo "<p> errore durante la registrazione:<br> connessione al server fallita* <p>";
                // else if ($_GET["error"] == "uncorrect_password")
                //     echo "<p> errore durante la registrazione:<br> le password non coincidono* <p>";

                // }
                ?>
                </div>
            </div>




        </div>


        <div class="bigContainer ">
 
            <h1 class="child">Andrò da <?php echo $partenza . " a " . $arrivo . ","; ?></h1>
            <h2 class="child" style="display: flex; justify-content: center; flex-wrap: wrap;">ho posto per <div class="mostraNumero">quattro</div> <div class="mostraPasseggeri">passeggeri </div> &VeryThinSpace; e..</h2>
            
            <div class="containerPosti child">
                <div class="destra sub-child mostraPartenza" style="text-transform: capitalize;">partirò

                </div>
                <div class="centro sub-child">
                        
                <span class="containerData">
                    
                    <div class="data element btn" onclick="riempiCalendario(1)">
                        <i class="fa-regular fa-calendar-days"></i>
                        <p id="testoData">Oggi</p>
                        <div class="containerCalendario2" onclick="apriCalendario2()">
                            <div class="sopra">
                                <div class="sinistra disabilita" onclick="sposta(0,1)"> 
                                    <i class="material-symbols-outlined disabilita">arrow_back_ios</i>
                                    </div>
                                <div class="mese">
                                    
                                </div>
                                <div class="destra" onclick="sposta(1,1)"> 
                                <i class="material-symbols-outlined">arrow_forward_ios</i>
                                </div>

                            </div>
                            <div class="sotto"></div>
                        </div>
                    </div>
                </span>

                </div>
            </div>

            <div class="containerPosti child">
            <div class="destra sub-child">
                alle
            </div>
            <div class="centro sub-child">
                <select id="selectPartenza">

                <?php
                    $oraLocale = date('H'); // Ottieni l'ora locale nel formato HH:MM:SS
                    $i = 0;
                    while($oraLocale + 1 != 24 && $i!=2){
                      $oraLocale++;
                      $i++;
                    } 
                    $minutiLocale = date('i'); // Ottieni l'ora locale nel formato HH:MM:SS
                    $minutiLocale = floor($minutiLocale/10);
                    $minutiLocale *= 10;
                   
                    if($minutiLocale == 0) $minutiLocale = "0$minutiLocale";
                    if($oraLocale < 10) $oraLocale = "0$oraLocale"; 

                    $tempOra = $oraLocale;
                    $tempMin = $minutiLocale;
                    echo '<option value='.$oraLocale.':'.$minutiLocale.' selected>'.$oraLocale.':'.$minutiLocale.'</option>';
                        
                        if($minutiLocale + 10 <= 50) $minutiLocale += 10;
                        else {
                            $minutiLocale = "00";
                            $oraLocale++;
                        }

                    while($oraLocale <= 23 && $tempMin <= 50){
                        echo '<option value='.$oraLocale.':'.$minutiLocale.'>'.$oraLocale.':'.$minutiLocale.'</option>';
                        
                        if($minutiLocale + 10 <= 50) $minutiLocale += 10;
                        else {
                            $minutiLocale = "00";
                            $oraLocale++;
                            if($oraLocale < 10) $oraLocale = "0$oraLocale";
                            //todo: loop con if($oraLocale == 24) $oraLocale = "00";
                        }
                    }   
                ?> 

            
            </select>
                </div>
            </div>
            <div class="containerPosti child" style="margin-top: -20px;">
            <div class="destra sub-child">
                Arriverò alle
            </div>
            <div class="centro sub-child">
                <select id="selectArrivo">
                <?php
                    $oraLocale = date('H'); // Ottieni l'ora locale nel formato HH:MM:SS
                    $i = 0;
                    while($oraLocale + 1 != 24 && $i!=2){
                        $oraLocale++;
                        $i++;
                      } 
        

                    $minutiLocale = date('i'); // Ottieni l'ora locale nel formato HH:MM:SS
                    $minutiLocale = floor($minutiLocale/10);
                    $minutiLocale *= 10;
                    $minutiLocale += 10;
                    if($minutiLocale == 60){
                        $minutiLocale = "00";
                        $oraLocale++;
                        if($oraLocale == 24) $oraLocale = "00";
                    }
                    if($oraLocale < 10) $oraLocale = "0$oraLocale";

                    echo '<option value='.$oraLocale.':'.$minutiLocale.' selected>'.$oraLocale.':'.$minutiLocale.'</option>';
                        
                        if($minutiLocale + 10 <= 50) $minutiLocale += 10;
                        else {
                            $minutiLocale = "00";
                            $oraLocale++;
                        }

                        $tempArrivoOra = $oraLocale;
                        $tempArrivoMin = $minutiLocale - 10;

                    while($oraLocale <= 23 && $tempMin <= 50){
                        echo '<option value='.$oraLocale.':'.$minutiLocale.'>'.$oraLocale.':'.$minutiLocale.'</option>';
                        
                        if($minutiLocale + 10 <= 50) $minutiLocale += 10;
                        else {
                            $minutiLocale = "00";
                            $oraLocale++;
                            if($oraLocale < 10) $oraLocale = "0$oraLocale";
                        }
                    }   
                ?> 


            </select>
                </div>
            </div>

            <div class="containerNext">
                <div class="nextBtn valido " onclick="swapView2(1)"> <i class="fa-solid fa-arrow-left"></i> Prev</div>
                        <div class="nextBtn" onclick="swapView2(2)">Next <i class="fa-solid fa-arrow-right"></i></div>
                </div>
                <input type="text" name="data" id="data" style="display: none" class="inputData">  
        </div>

            <div class="bigContainer ">
            <h1 class="child">Andrò da <?php echo $partenza . " a " . $arrivo . ","; ?></h1>
            <h2 class="child" style="display: flex; justify-content: center; flex-wrap: wrap;">ho posto per <div class="mostraNumero">quattro</div> <div class="mostraPasseggeri">passeggeri </div> , &nbsp; <div class="mostraPartenza"> partirò</div> &nbsp; <div class="mostraData"> oggi</div>  &nbsp;  <div class="mostraOraPartenza"> alle <?php echo $tempOra . ":" . $tempMin ?> </div> &nbsp; e tornerò alle &nbsp; <div class="mostraOraArrivo"><?php echo $tempArrivoOra . ":" . $tempArrivoMin?></div>  </h2>

                


            <div class="containerNext">
                <div class="nextBtn valido " onclick="swapView2(2)"><i class="fa-solid fa-arrow-left"></i> Prev</div>
                        <div class="nextBtn submitBtn" onclick="submitForm()"> Iscriviti <i class="fa-solid fa-arrow-right"></i></div>
                </div>
            </div>



    </form>
    </main>
    

      
    <script src="/lineshare/general/js/app.js"></script>
    <script src="/lineshare/header/js/app.js"></script>
    <script src="./js/app.js"></script>

</body>
</html>