let dataField = document.getElementById('dataField');
dataField.valueAsDate = new Date();


let containerPosti = document.querySelector('main .containerPosti');

let pulsanti = document.querySelectorAll('main .containerPosti span');
let rimuoviBtn = pulsanti[0];
let aggiungiBtn = pulsanti[1];
let numero = containerPosti.querySelector('.numero')
let mostraNumero = document.querySelectorAll('.mostraNumero')
let mostraPasseggeri = document.querySelectorAll('.mostraPasseggeri')
let mostraOraPartenza = document.querySelectorAll('.mostraOraPartenza')
let mostraOraArrivo = document.querySelectorAll('.mostraOraArrivo')
let ritornoAutista = document.querySelector('.costo');
let mostraCostoPasseggeri = document.querySelector('.mostraCostoPasseggeri')
let rimuoviCostoBtn = pulsanti[3];
let aggiungiCostoBtn = pulsanti[4];
let costoTotalePasseggero = 0;


let selezionaOraPartenza = document.getElementById('selectPartenza');
let selezionaOraArrivo = document.getElementById('selectArrivo')

let nPasseggeriField = document.getElementById('nPasseggeriField');
let costoTotaleField = document.getElementById('costoTotaleField');

selezionaOraArrivo.addEventListener("change", ()=>{
    mostraOraArrivo.forEach(t => {
        t.innerHTML = selezionaOraArrivo.value;
    })
})

selezionaOraPartenza.addEventListener("change", ()=>{
    
    mostraOraPartenza.forEach(t => {
        t.innerHTML = "alle " + selezionaOraPartenza.value;
    });


        selezionaOraArrivo.innerHTML = '';

    
    var t = selezionaOraPartenza.value.split(":");
    var oraLocale = t[0];
    var minutiLocale;
    if(Number(t[1]) >= 50){
      minutiLocale = "00";
      if(oraLocale == 23) oraLocale = "00";
      else oraLocale = Number(oraLocale) + 1;  
    } 
    else minutiLocale = Number(t[1]) + 10; 
    prevArrivo = oraLocale + ":" + minutiLocale;

    var tempMin =  minutiLocale ;

    while (oraLocale <= 23 && tempMin <= 50) {
    var option = document.createElement("option");
    option.value = oraLocale + ":" + minutiLocale;
    option.text = oraLocale + ":" + minutiLocale;
    selezionaOraArrivo.appendChild(option);

    if (Number(minutiLocale) + 10 <= 50) minutiLocale = Number(minutiLocale) + 10;
    else {
        minutiLocale = "00";
        oraLocale++;
        if(oraLocale < 10) oraLocale = "0" + oraLocale;
    }
    }

    
    mostraOraArrivo.forEach(t => {
        t.innerHTML = selezionaOraArrivo.value;
    })
    

});

function selezionaCosto(n){
    if(ritornoAutista.innerHTML == "gratis") ritornoAutista.innerHTML = "0";
    else ritornoAutista.innerHTML = String(ritornoAutista.innerHTML).slice(0,-1);
    if(n == 1){
        
        if(Number(ritornoAutista.innerHTML) + 1 < 101){
            costoTotaleField.value = calcolaCosto(Number(ritornoAutista.innerHTML) + 1, false);
            mostraCostoPasseggeri.innerHTML = calcolaCosto(Number(ritornoAutista.innerHTML) + 1, true) + "€"
            ritornoAutista.innerHTML = (Number(ritornoAutista.innerHTML) + 1) + "€";
            rimuoviCostoBtn.classList.remove('disabilita') 
            if(Number(ritornoAutista.innerHTML) == 100) aggiungiCostoBtn.classList.add('disabilita')
        }else aggiungiCostoBtn.classList.add('disabilita')
    }else{
        if(Number(ritornoAutista.innerHTML) - 1 >= 0){
            
           
            ritornoAutista.innerHTML = (Number(ritornoAutista.innerHTML) - 1);
            mostraCostoPasseggeri.innerHTML = calcolaCosto(Number(ritornoAutista.innerHTML), true) + "€"
            costoTotaleField.value = calcolaCosto(Number(ritornoAutista.innerHTML), false);

            aggiungiCostoBtn.classList.remove('disabilita') 
            if(Number(ritornoAutista.innerHTML) == 0){
              rimuoviCostoBtn.classList.add('disabilita')  
              ritornoAutista.innerHTML = "gratis"
            }else ritornoAutista.innerHTML += "€";
        }else rimuoviCostoBtn.classList.add('disabilita')
    }

    
}

function calcolaCosto(z,usaVirgola){

    const PGPS = 25; //percentuale di guadagno sul prezzo stimato
    const PIVA = 0; //percentuale iva

    let guadagno = z * PGPS / 100; 
    let iva = guadagno * PIVA / 100;

    let prezzoTotale = z + guadagno + iva;

    console.log(prezzoTotale)

    if(prezzoTotale == 0) prezzoTotale = 0.20;

    return formatNumber(prezzoTotale,usaVirgola);

}

function formatNumber(number,usaVirgola) {
    // Arrotondamento per eccesso
    if(usaVirgola){
    var roundedNumber = Math.ceil(number * 10) / 10;
  
    // Formattazione con virgola per i decimali
    var formattedNumber = roundedNumber.toLocaleString('it-IT', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    });
    }
    else{
        var formattedNumber;
        if(Math.floor(number) !== number )  formattedNumber = Math.ceil(number * 10) / 10;
        else formattedNumber = number + ".0";
    } 
  
    return formattedNumber + "0";
  }

function aggiungiPosto(n){
    if(n == 1){
        if(Number(numero.innerHTML) + 1 < 9){
          numero.innerHTML = Number(numero.innerHTML) + 1;  
          nPasseggeriField.value = numero.innerHTML;
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
          nPasseggeriField.value = numero.innerHTML;
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

function submitForm(){
    let form = document.querySelector('main form');
    let valido = true;
    let inputs = form.querySelectorAll('input')
    inputs.forEach(t => {
        if(!t.checkValidity()) valido = false; 
        console.log(valido, t.value, t)
    })

    let selects = form.querySelectorAll('select');
    selects.forEach(t => {
        if(!t.checkValidity()) valido = false; 
    })

    if(valido && selects[0].value < selects[1].value) form.submit();

}