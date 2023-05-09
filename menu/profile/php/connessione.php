<?php 
    $host = "127.0.0.1";
    $user = "root";
    $password = "";
    $database = "lineshare"; 

    try {
        $connessione = new mysqli($host,$user,$password,$database);
        if($connessione === false){
        echo "Errore durante la connessione :";
        header("location: ./../../");
        }else echo "connessione avvenuta con successo!";
    } catch (\Throwable $th) {
        header("location: ./../../");
    }
    $connessione->error;

   
?>