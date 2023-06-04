<?php

    require_once("../../auth/connessione.php");

    session_start();
    
    $arrivo = $connessione->real_escape_string($_GET["arrivo"]);
    $partenza = $connessione->real_escape_string($_GET["partenza"]);
    $nPostiField = $connessione->real_escape_string($_POST["nPasseggeriField"]);
    $dataPartenza = $connessione->real_escape_string($_POST["dataField"]);
    $oraPartenza = $connessione->real_escape_string($_POST["selectPartenza"]);
    $oraArrivo = $connessione->real_escape_string($_POST["selectArrivo"]);
    $costoTotale = $connessione->real_escape_string($_POST["costoTotaleField"]);
    

    if(empty($partenza) || empty($arrivo) || empty($nPostiField)|| empty($dataPartenza)|| empty($oraArrivo)|| empty($oraPartenza) || empty($costoTotale)){
        echo "gli input non sono riempiti";
        header("location: ../../index.php?operation=empty_inputs");
        exit();
    }

    //controlla se già inserito
    $controllo = "SELECT * FROM viaggio WHERE idGuidatore = ".$_SESSION['id']." && data = '".$dataPartenza."';";
    if($result = $connessione->query($controllo)){
        echo $dataPartenza;
        echo "<br>" . $result->num_rows;
        if($result->num_rows == 0){
            $sql = "INSERT INTO 
            viaggio (id, partenza, arrivo, data, orarioPartenza, orarioArrivo, nPasseggeri, nMaxPasseggeri, prezzoTotale, note, idGuidatore)
            VALUES (NULL, '$partenza', '$arrivo', '$dataPartenza', '$oraPartenza', '$oraArrivo', '0', ' $nPostiField', '$costoTotale ', NULL, '".$_SESSION["id"]."');";
    
            if($connessione->query($sql)){
            echo 'operazione eseguita con successo!';
            header("location: ../../index.php?operation=success");
            }else header("location: ../../index.php?operation=error");
        }else if($result->num_rows == 1){
            $row = $result->fetch_array(MYSQLI_ASSOC);
            if($row["partenza"] != $partenza){
                $sql = "INSERT INTO 
                viaggio (id, partenza, arrivo, data, orarioPartenza, orarioArrivo, nPasseggeri, nMaxPasseggeri, prezzoTotale, note, idGuidatore)
                VALUES (NULL, '$partenza', '$arrivo', '$dataPartenza', '$oraPartenza', '$oraArrivo', '0', ' $nPostiField', '$costoTotale ', NULL, '".$_SESSION["id"]."');";
        
                if($connessione->query($sql)){
                echo 'operazione eseguita con successo!';
                header("location: ../../index.php?operation=success");
                }else header("location: ../../index.php?operation=error");
            }else header("location: ../../index.php?operation=TMDFSD");         //troppe partenze dallo stesso luogo (too many departures frome same day)
        }else header("location: ../../index.php?operation=TMD");             //troppe partenze
    }

    

?>