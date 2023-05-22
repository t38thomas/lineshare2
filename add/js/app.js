let containerPosti = document.querySelector('main .containerPosti');
let rimuoviBtn = containerPosti.querySelector('span:nth-child(1)')
let aggiungiBtn = containerPosti.querySelector('span:nth-child(3)')
let numero = containerPosti.querySelector('.numero')
let mostraNumero = document.querySelectorAll('.mostraNumero')
let mostraPasseggeri = document.querySelectorAll('.mostraPasseggeri')

function aggiungiPosto(n){


    if(n == 1){
        if(Number(numero.innerHTML) + 1 < 9){
          numero.innerHTML = Number(numero.innerHTML) + 1;  
          mostraNumero.forEach(t => {
            if(Number(numero.innerHTML) == 1){
                t.innerHTML = "un"; 
                mostraPasseggeri.forEach(p => {
                    p.innerHTML = "passeggero";
                }) 
            }
            else if(Number(numero.innerHTML) == 2){
                t.innerHTML = "due";  
                mostraPasseggeri.forEach(p => {
                    p.innerHTML = "passeggeri";
                }) 
            } 
            else if(Number(numero.innerHTML) == 3) t.innerHTML = "tre";
            else if(Number(numero.innerHTML) == 4) t.innerHTML = "quattro";
            else if(Number(numero.innerHTML) == 5) t.innerHTML = "cinque";
            else if(Number(numero.innerHTML) == 6) t.innerHTML = "sei";
            else if(Number(numero.innerHTML) == 7) t.innerHTML = "sette";
            else if(Number(numero.innerHTML) == 8) t.innerHTML = "otto";
          })
          rimuoviBtn.classList.remove('disabilita')
          if(Number(numero.innerHTML) == 8) aggiungiBtn.classList.add('disabilita')
        } 
        else aggiungiBtn.classList.add('disabilita')
    }
    if(n == -1){
        if(Number(numero.innerHTML) - 1 > 0){
          numero.innerHTML = Number(numero.innerHTML) - 1;  
          mostraNumero.forEach(t => {
            if(Number(numero.innerHTML) == 1){
                t.innerHTML = "un"; 
                mostraPasseggeri.forEach(p => {
                    p.innerHTML = "passeggero";
                }) 
            }
            else if(Number(numero.innerHTML) == 2){
                t.innerHTML = "due";  
                mostraPasseggeri.forEach(p => {
                    p.innerHTML = "passeggeri";
                }) 
            } 
            else if(Number(numero.innerHTML) == 3) t.innerHTML = "tre";
            else if(Number(numero.innerHTML) == 4) t.innerHTML = "quattro";
            else if(Number(numero.innerHTML) == 5) t.innerHTML = "cinque";
            else if(Number(numero.innerHTML) == 6) t.innerHTML = "sei";
            else if(Number(numero.innerHTML) == 7) t.innerHTML = "sette";
            else if(Number(numero.innerHTML) == 8) t.innerHTML = "otto";
          })
          aggiungiBtn.classList.remove('disabilita')
          if(Number(numero.innerHTML) == 1){
          rimuoviBtn.classList.add('disabilita')  
          } 

        } 
        else rimuoviBtn.classList.add('disabilita')
    }
}