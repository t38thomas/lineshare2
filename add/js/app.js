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






let acceso = false;
//cambia visuale
function swapView2(n) {

    acceso = false;

    document.querySelector('.bigContainer:nth-child(' + n + ')').classList.toggle('mostraCentro')
    document.querySelector('.bigContainer:nth-child(' + n + ')').classList.toggle('mostraDestra')
    let prossimo = document.querySelector('.bigContainer:nth-child(' + (n + 1) + ')');
    if (prossimo !== null) prossimo.classList.toggle('mostraCentro')

    document.querySelectorAll('input').forEach(input => { input.removeEventListener('keyup', () => { }); });


    let pulsante = document.querySelector('.bigContainer:nth-child(' + (n + 1) + ') .nextBtn:nth-last-child(1)');

    let inputs = document.querySelectorAll('.bigContainer:nth-child(' + (n + 1) + ') input')
    // console.log(inputs)
    inputs.forEach(input => {
        if (input.checkValidity() && !acceso) {
            pulsante.classList.toggle('valido')
            acceso = true;
            //console.log("acceso")
        }

    
        
        input.addEventListener('keyup', () => {
            let j = 0;
            for (let i = 0; i < inputs.length; i++) if (inputs[i].checkValidity()) j++;
            if (inputs.length == j) {
                if (input.checkValidity() && !acceso) {
                    //console.log("pio valido")
                    pulsante.classList.toggle('valido')
                    acceso = true;


                }
            } else if (acceso) {
                pulsante.classList.toggle('valido')
                acceso = false;
            }
        });

        if(n != 1){
        let prevNextBtn = document.querySelector('.bigContainer:nth-child(' + (n) + ') .nextBtn:nth-child(1)')
        prevNextBtn.addEventListener('click', () => {
            let j = 0;
            for (let i = 0; i < inputs.length; i++) if (inputs[i].checkValidity()) j++;
            if (inputs.length == j) {

                if (input.checkValidity() && !acceso) {
                    pulsante.classList.toggle('valido')
                    acceso = true;


                }
            } else if (acceso) {
                pulsante.classList.toggle('valido')
                acceso = false;
            }
        })
    }


        let prevBtn = document.querySelector('.bigContainer:nth-child(' + (n + 1) + ') .nextBtn:nth-child(1)')
        prevBtn.addEventListener('click', () => {
            let j = 0;
            for (let i = 0; i < inputs.length; i++) if (inputs[i].checkValidity()) j++;
            if (inputs.length == j) {

                if (input.checkValidity() && !acceso) {
                    pulsante.classList.toggle('valido')
                    acceso = true;
                }
            } else if (acceso) {
                pulsante.classList.toggle('valido')
                acceso = false;
            }
        })



    });



}