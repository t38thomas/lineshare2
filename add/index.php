<?php

    session_start();

    if(!isset($_SESSION["loggato"])){
        header("location: ../auth/accedi/index.php?error=auth_error");
    }

?>