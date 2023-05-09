<?php

    require_once("../../auth/connessione.php");

    $partenza = $connessione->real_escape_string($_POST["partenza"]);
    $arrivo = $connessione->real_escape_string($_POST["arrivo"]);
    $nPosti = $connessione->real_escape_string($_POST["nPosti"]);
    $data = $connessione->real_escape_string($_POST["data"]);

    $sql = 'SELECT *
    FROM viaggio
    WHERE partenza = "'.$partenza.'"
    and arrivo = "'.$arrivo.'"
    and nPasseggeri < nMaxPasseggeri 
    and data = "'.$data.'"
    and nPasseggeri+"'.$nPosti.'" <= nMaxPasseggeri';


    if($result = $connessione->query($sql)){
        if($result->num_rows > 0){
            while($riga = $result->fetch_assoc()){
                
                $sql = 'SELECT AVG(voto) as voto
                FROM feedback
                WHERE idGuidatore = '. $riga["idGuidatore"];

                if($voto = $connessione->query($sql)){
                    if($voto->num_rows == 1){
                        $votoMedio = $voto->fetch_assoc();
                        if($votoMedio["voto"] == NULL) $votoMedio["voto"] = 2;
                    }
                }



                

            }
        }else echo "<br> nessun risultato trovato!";
    }
?>