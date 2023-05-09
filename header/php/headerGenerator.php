<?php

    echo '
    
    <header style="background-color: var(--primary-500);">

    <div class="sinistra">
    <a href="/lineshare/" class="containerLogo">
        <div class="logo">
            <img src="/lineshare/general/assets/logo2Mezzo.svg" alt="">
        </div>
        <div class="logo">Line</div>
        <div class="logo">Share</div>
    </a>
    </div>

     <div class="centro" >
        <form action="/lineshare/search/" method="post"> 
            <input type="text" class="element" name="partenza" id="partenza" placeholder="Parto da.." required pattern="[a-zA-Z]{2,}">
            <input type="text" class="element" name="arrivo" id="arrivo" placeholder="Arrivo a.." required pattern="[a-zA-Z]{2,}">
            <input type="text" name="nPosti" id="nPosti" style="display: none" class="inputNposti">
            <input type="text" name="data" id="data" style="display: none" class="inputData">

            <span class="containerBtn">
            <div class="nPosti element btn">
                <i class="fa-solid fa-user-group"></i>
                <p>1</p>
                <div class="containerScegli" onclick="apriContainerScegli()">
                    <div class="sinistra">
                        <p>Siamo in</p>
                    </div>
                    <div class="destra">
                        <span class="material-symbols-outlined">remove_circle</span>
                        <div class="numero">1</div>
                        <span class="material-symbols-outlined">add_circle</span>
                    </div>
                </div>
            </div>
            <span class="containerData">
            <div class="data element btn">
                <i class="fa-regular fa-calendar-days"></i>
                <p>Oggi</p>
                <div class="containerCalendario" onclick="apriCalendario()">
                    <div class="sopra">
                        <div class="sinistra disabilita" onclick="sposta(0)"> 
                            <i class="material-symbols-outlined disabilita">arrow_back_ios</i>
                            </div>
                        <div class="mese">
                            
                        </div>
                        <div class="destra" onclick="sposta(1)"> 
                        <i class="material-symbols-outlined">arrow_forward_ios</i>
                        </div>
                    </div>
                    <div class="sotto">
                        
                    </div>
                </div>
            </div>
        </span>
        </span>
        <div class="cerca element btn" onclick="submitFormCercaTraccia()">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </form>
    </div> 

    <div class="destra">

   
        <div class="cercaTraccia pulsante" >
            <i class="fa-solid fa-magnifying-glass"></i>
            <p>Cerca traccia</p>
        </div>

        <div class="aggiungiTraccia pulsante" >
            <i class="fa-regular fa-circle-xmark" style="transform: rotate(45deg);"></i>
            <p>Aggiungi traccia</p>
        </div>

        <div class="Profilo pulsante">
        ';
        if(isset($_SESSION["foto"])){

            echo '
            <div class="fotoMessa">
            <img src="'. $_SESSION["foto"] .'" alt="">
            </div>
            ';
        }
        else echo '<i class="fa-regular fa-circle-user"></i>';

        if (isset($_SESSION["loggato"])) echo "<p> " . $_SESSION["nome"] . "</p>";
        else echo "<p>Profilo</p>";
        
        echo '
        </div>   
        </div>

            <div class="menu">
        ';

        require_once("menu.php");

        echo'
            </div>
        </div>
    
    </header>
    
    
    ';

?>