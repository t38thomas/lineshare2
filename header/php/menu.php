<?php

          if(isset($_SESSION["loggato"])){
            
            echo "
            
                <a href='' class='element'>
                    <p><i class='fa-regular fa-map'></i>Viaggi</p>
                    <i class='material-symbols-outlined'> arrow_forward_ios </i>
                </a>

                <a href='' class='element'>
                    <p><i class='fa-regular fa-comments'></i> Messaggi</p>
                    <i class='material-symbols-outlined'> arrow_forward_ios </i>
                </a>

                <a href='' class='element'>
                    <p><i class='fa-regular fa-credit-card'></i>Saldo</p>
                    <i class='material-symbols-outlined'> arrow_forward_ios  </i> 
                </a>

                <a href='' class='element'>
                    <p><i class='fa-regular fa-circle-question'></i>Assistenza</p>
                    <i class='material-symbols-outlined'> arrow_forward_ios </i>
                </a>
                
                <a href='/lineshare/menu/profile' class='element'>
                    <p><i class='fa-regular fa-user'></i>Profilo</p>
                    <i class='material-symbols-outlined'>  arrow_forward_ios </i>            
                </a>
                
                <div class='containerLinea'><div class='linea'></div></div>

                <a href='/lineshare/auth/disconnettiti/index.php' class='element'>
                <p></i>Disconnettiti</p>
                <i class='fa-solid fa-arrow-right-from-bracket'></i>        
                </a>

            ";

          }else{
            echo "
            <a href='/lineshare/auth/accedi/' class='element'>
                <p>Accedi</p>
                <i class='material-symbols-outlined'>
                    arrow_forward_ios
                </i>
            </a>
   
            <a href='/lineshare/auth/iscriviti/' class='element'>
                <p>Iscriviti</p>
                <i class='material-symbols-outlined'>
                    arrow_forward_ios
                </i>
            </a>
        
        ";

          } 

        ?>