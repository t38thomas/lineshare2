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
    <link rel="stylesheet" href="/lineshare/general/css/root.css">
    <link rel="stylesheet" href="/lineshare/header/css/header.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="/lineshare/menu/menu.css">
    <link rel="stylesheet" href="/lineshare/menu/profile/css/style.css">
    <link rel="icon" href="/lineshare/general/assets/logo2Mezzo.svg">
    <script src="https://kit.fontawesome.com/8cf543d1bc.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./css/style.css">

</head>

<body>

    <?php
    require_once("../header/php/headerGenerator.php");
    ?>

    <main>
        <div class="containerWave">
            <img src="./assets/wave.svg" alt="">
        </div>

    <div class="grid-container">
        
    <?php

        require_once("../auth/connessione.php");


        $partenza = $connessione->real_escape_string($_POST["partenza"]);
        $arrivo = $connessione->real_escape_string($_POST["arrivo"]);
        $nPosti = $connessione->real_escape_string($_POST["nPosti"]);
        $data = $connessione->real_escape_string($_POST["data"]);

        if($nPosti < 1) $nPosti = 1;
        else if($nPosti > 8) $nPosti = 8; 


        $sql = 'SELECT *
        FROM viaggio
        WHERE partenza = "'.$partenza.'"
        and arrivo = "'.$arrivo.'"
        and nPasseggeri < nMaxPasseggeri 
        and data = "'.$data.'"
        and nPasseggeri+"'.$nPosti.'" <= nMaxPasseggeri';

        if(isset($_SESSION["id"])) $sql = $sql . " and idGuidatore <> " . $_SESSION["id"];

        if($result = $connessione->query($sql)){
            if($result->num_rows > 0){
                while($riga = $result->fetch_assoc()){
                    
                    $sql = 'SELECT AVG(voto) as voto
                    FROM feedback
                    WHERE idGuidatore = '. $riga["idGuidatore"];

                    if($voto = $connessione->query($sql)){
                        if($voto->num_rows == 1){
                            $votoMedio = $voto->fetch_assoc();
                            if($votoMedio["voto"] == NULL) $votoMedio["voto"] = 2.5;
                        }
                    }

                    $sql = "SELECT * 
                    FROM utente
                    WHERE id = " . $riga["idGuidatore"];
                    if($guidatore = $connessione->query($sql)){
                        if($guidatore->num_rows == 1){
                            $guidatore = $guidatore->fetch_assoc(); 

                            echo'


                        <div class="containerCard grid-item">
                            <div class="containersfondo">
                                <img src="./assets/ondaCarta.svg" alt="">
                             </div>
                            <div class="containerGuidatore">
                                <div class="sinistra">
                                    <div class="containerFoto">';
                                    if(isset($guidatore["fotoProfilo"])){

                                        echo '
                              
                                        <img src="'. $guidatore["fotoProfilo"] .'" alt="">
                                    
                                        ';
                                    }
                                    echo'
                                    </div>
                                </div>
                                <div class="destra">
                                    <div class="nome">
                                    <div class="containerNposti">
                                        <span>'. $riga["nPasseggeri"] .'/'.$riga["nMaxPasseggeri"].' prenotati</span>  
                                    </div>
                                        <p>
                                            <b>'. $guidatore["nome"] .'</b>
                                            '.$guidatore["cognome"].'
                                         </p>
                                        <div class="stelle">
                                            ';
                                
                                                $nStellePiene = floor($votoMedio["voto"]);
                                                $stellaMezza = round($votoMedio["voto"]- floor($votoMedio["voto"]));
                                                $nDaRiempire = 5 - $nStellePiene;

                                                for($i=0; $i<$nStellePiene; $i++) echo '<i class="fa-solid fa-star"></i>';
                                                if($stellaMezza == 1){
                                                  echo '<i class="fa-solid fa-star-half-stroke"></i>';  
                                                  $nDaRiempire--;
                                                } 
                                                for($i=0; $i<$nDaRiempire; $i++) echo '<i class="fa-regular fa-star"></i>';

                                            echo'
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="containerLinea">
                                <div class="linea"></div>
                            </div>
                            <div class="centroCard">
                                <div class="sezione">
                                    <div class="sinistra element">
                                        '. $riga["orarioPartenza"] .'
                                    </div>
                                    <div class="centro element">
                                        <div class="cerchio"><div class="cerchioDentro"></div></div>
                                    <div class="linea"></div>
                                    <div class="freccia"></div>
                                    <div class="freccia"></div>
                                    </div>
                                <div class="destra element">
                                    '. $riga["partenza"].'
                                </div>
                            </div>
                        <div class="sezione">
                            <div class="sinistra element">
                                '. $riga["orarioArrivo"] .'
                            </div>
                            <div class="centro element">
                                <div class="cerchio"><div class="cerchioDentro"></div> </div>
                                <div class="linea">
                            </div>
                            <div class="freccia"></div>
                            <div class="freccia"></div>
                        </div>
                        <div class="destra element">
                        '. $riga["arrivo"].'
                        </div>
                        <div class="linea"></div>
                    </div>
                </div>
                <div class="bottomCard">
                <div class="sinistra">
                    <div class="prezzo"><p>
                        ';

                        $prezzo = (float)$riga["prezzoTotale"] / ((float)$riga["nPasseggeri"]+$nPosti);
                        $prezzoFloat = $prezzo;
                        $prezzo = number_format($prezzo,2,',');
                        echo $prezzo . " €";
                        if($nPosti > 1) echo " a persona</p>";

                        if($riga["nPasseggeri"] > 0 || $nPosti > 1){
                            $sconto = (float)$riga["prezzoTotale"];
                            $sconto -= $prezzoFloat;
                            $sconto *= 100;
                            $sconto /= (float)$riga["prezzoTotale"];
                            $sconto = (int)$sconto;

                            echo '<div class="prezzoTotale"><span>'.number_format($riga["prezzoTotale"],2,',').'  €</span>  (risparmi il '. $sconto .'%';
                            if($nPosti > 1) echo " a persona";
                            echo ')</div>';
                        }
                        echo'
                    </div>
                </div>
                <div class="destra">
                    <div class="searchBtn">
                        SELEZIONA
                    </div>
                </div>
            </div>
        </div>









                    ';


                        } 
                    }

                    
                }
            }else{
                // nessun risultato trovato
                echo'
                <div class="containerNonTrovato">
                    <div class="sopra">
                        <i class="fa-solid fa-magnifying-glass"></i> 
                    </div>
                    <div class="sotto">
                        Nessuna corsa trovata :(
                    </div>
                </div>
                ';

            }
        }
    ?>



    </div>

    </main>
 
    <script>
        let data = '<?php echo $data ?>';

        let headerForm = document.querySelector('header form');
        headerForm.querySelector('.element:nth-child(1)').value = '<?php echo $partenza ?>';
        headerForm.querySelector('.element:nth-child(2)').value = '<?php echo $arrivo ?>';

        let nPosti = document.querySelector('header form .containerBtn .numero');
        let nPostiField = document.querySelector('header .centro form .inputNposti');
        let nPostiText = document.querySelector('header form .containerBtn .nPosti p');
        function set_nPosti(value){
            nPosti.innerHTML = String(value);
            nPostiField.value = String(value);
            nPostiText.innerHTML = String(value);
        }
        set_nPosti(<?php echo $nPosti ?>)

        window.data = data;
    </script>
    <script src="/lineshare/general/js/app.js"></script>
    <script src="/lineshare/header/js/app.js">
        setData(window.data)
        alert(window.data)
    </script>  
    <script src="./js/app.js"></script>

 
</body>

</html>