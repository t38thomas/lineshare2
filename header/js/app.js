let menuAperto = false;
let menuBtn = document.querySelector('.pulsante:nth-last-child(1)');


function openProfileMenu(){

    document.querySelector('.menu').classList.toggle('apri');
    menuBtn.classList.toggle('scuro');
}

let inizio = true;
let menu =  document.querySelector('header .menu');

window.onload = () => {
    
    /* PROFILO --> MENU */
    
    inizio=true;
    menuAperto = false;
    menuBtn = document.querySelector('.pulsante:nth-last-child(1)');

    document.addEventListener('click', function(event) {                    //evento per chiudere il menu
        var divDaEscludere = menu;
        var targetElement = event.target;

        if ( (!divDaEscludere.contains(targetElement) && menuAperto) || (menuBtn.contains(targetElement))) {
            openProfileMenu();
            if(menuAperto) menuAperto = false
            else menuAperto = true
            
        }
      
    });


    /* NPOSTI */

let container = document.querySelector('header .centro form .containerScegli');
let pulsanti = container.querySelectorAll('span');
let nPosti = container.querySelector('.numero');
let nPostiField = document.querySelector('header .centro form .inputNposti');
let nPostiBtn = document.querySelector('header .centro form .nPosti');
let nPostiText = nPostiBtn.querySelector('p');

nPostiField.value = 1;

if(nPosti.innerHTML < 1) set_nPosti(1)
else if(nPosti.innerHTML > 8) set_nPosti(8)
if(nPosti.innerHTML == 1) pulsanti[0].classList.toggle("disabilita");
else if(nPosti.innerHTML == 8) pulsanti[1].classList.toggle("disabilita");

document.addEventListener('click', function(event) {                    //evento per chiudere il menu
    var divDaEscludere = container;
    var targetElement = event.target;
    if ( (!divDaEscludere.contains(targetElement) && container.classList.length == 3) || (nPostiBtn.contains(targetElement))) {
        apriContainerScegli();
    }
});

function set_nPosti(value){
    nPosti.innerHTML = String(value);
    nPostiField.value = String(value);
    nPostiText.innerHTML = String(value);
}

pulsanti[0].addEventListener("click", () => {       //rimuovi
    let value = Number(nPosti.innerHTML);
    if(value - 2 > 0) value = value - 1;
    else{
        pulsanti[0].classList.toggle("disabilita");
        value = value - 1;
    } 
    if(pulsanti[1].classList.length == 2) pulsanti[1].classList.toggle("disabilita");

    set_nPosti(value)
});

pulsanti[1].addEventListener("click", () => {       //aggiungi
    let value = Number(nPosti.innerHTML);

    if(value + 2 < 9) value = value + 1; 
    else{
        value = value + 1; 
        pulsanti[1].classList.toggle("disabilita")
    }
    if(pulsanti[0].classList.length == 2) pulsanti[0].classList.toggle("disabilita");
    nPosti.innerHTML = String(value);
    nPostiField.value = String(value);
    nPostiText.innerHTML = String(value);

});


/* CALENDARIO */

    document.addEventListener('click', function(event) {                    //evento per chiudere il menu
    var divDaEscludere = document.querySelector('header .centro form .data .containerCalendario');
    var btn = document.querySelector('header .centro form .data');
    var targetElement = event.target;
    if ( (!divDaEscludere.contains(targetElement) && divDaEscludere.classList.length == 2) || (btn.contains(targetElement))) {
        apriCalendario();
        if(calendarioAperto) calendarioAperto = true;
        else calendarioAperto = false;
    }
    });

    riempiCalendario()



};


    /* FORM CERCATRACCIA */


document.addEventListener('click', function(event) {                    //evento per chiudere il menu
    var divDaEscludere = document.getElementById('cercaTraccia');
    var btn = document.querySelector('header .destra .cercaTraccia');
    var targetElement = event.target;
    if ( ((!divDaEscludere.contains(targetElement) && divDaEscludere.classList.length == 2) || (btn.contains(targetElement))) && ((!calendarioAperto && !containerScegliAperto) || (menuBtn.contains(targetElement))) ) {
        apriCercaTraccia();
    }
    });

        /* FORM AGGIUNGI TRACCIA */


document.addEventListener('click', function(event) {                    //evento per chiudere il menu
    var divDaEscludere =  document.getElementById('aggiungiTraccia');
    var btn = document.querySelector('header .destra .aggiungiTraccia');
    var targetElement = event.target;
    if ( ((!divDaEscludere.contains(targetElement) && divDaEscludere.classList.length == 2) || (btn.contains(targetElement))) && ((!calendarioAperto && !containerScegliAperto) || (menuBtn.contains(targetElement))) ) {
        apriAggiungiTraccia();
    }
    });





window.addEventListener('scroll', function() {

    
    if (window.scrollY > 5 && inizio) {
    
        this.document.querySelector("header").classList.toggle("colora");
        inizio = false;
    }
    
    if (window.scrollY <= 0) {
        inizio = true;
        this.document.querySelector("header").classList.toggle("colora");
    }

    
 
});

/* calendario.js */

class mese{
    constructor(nome, giorni){
        this.nome = nome;
        this.giorni = giorni;
        this.abb = String(nome).charAt(0) + String(nome).charAt(1) + String(nome).charAt(2);
    }
}

let calendarioAperto = false;

let mesi = [];
mesi[0] = new mese("Gennaio",31);    //gennaio
mesi[1] = new mese("Febbraio",28);    //febbraio
mesi[2] = new mese("Marzo",31);    //marzo
mesi[3] = new mese("Aprile",30);    //aprile
mesi[4] = new mese("Maggio",31);    //maggio
mesi[5] = new mese("Giugno",30);    //giugno
mesi[6] = new mese("Luglio",31);    //luglio
mesi[7] = new mese("Agosto",31);    //agosto
mesi[8] = new mese("Settembre",30);    //settembre
mesi[9] = new mese("Ottobre",31);    //ottobre
mesi[10] = new mese("Novembre",30);   //novembre
mesi[11] = new mese("Dicembre",31);   //dicembre


let meseSelezionato = null;
let giornoSelezionato = null;
let grid = document.querySelector('header .centro form .data .containerCalendario .sotto');
let monthDisplay = document.querySelector('header .centro form .data .containerCalendario .sopra .mese');
let meseAvanti = 0;


let t = new Date();
let date = ('0' + t.getDate()).slice(-2);
let month = ('0' + (t.getMonth() + 1)).slice(-2);
let year = t.getFullYear();
let annoCorrente = year;

meseSelezionato = (Number(month)-1+meseAvanti)%12;
giornoSelezionato = date;

if(year % 4 == 0) mesi[1].giorni = 29;


function apriCalendario(){
    document.querySelector('header .centro form .data .containerCalendario').classList.toggle('mostraElemento')
    if(calendarioAperto) calendarioAperto = false;
    else calendarioAperto = true;
}


function setData(data){

    data = data.split('-')

    let mesePrev = meseSelezionato+1;
    giornoSelezionato = Number(data[2]);
    meseSelezionato = Number(data[1]) - 1;
    year = Number(data[0])

    let selezionaString =  giornoSelezionato + " " + mesi[meseSelezionato].abb;

    if(Number(giornoSelezionato) == Number(date) && meseAvanti==0 && annoCorrente == year) datePicker.innerHTML = "Oggi";
    else if( Number(giornoSelezionato) == Number(date)+1 && meseAvanti==0 && annoCorrente == year) datePicker.innerHTML = "Domani";
    else datePicker.innerHTML = selezionaString;

    for(let i=0; i< abs(meseSelezionato+1 - Number(mesePrev)); i++){
        if(meseSelezionato - Number(mesePrev) > 0) sposta(1)
        else sposta(-1)
    }
 
    riempiCalendario()
}

function abs(x){
    if(x >= 0) return x;
    else return x*-1;
}

function setAnno(anno){
    if(anno % 4 == 0) mesi[1].giorni = 29;
    else mesi[1].giorni = 28;

    if(annoCorrente != anno) t = new Date(anno,0)
    else t = new Date();

    month = ('0' + (t.getMonth() + 1)).slice(-2);
    year = t.getFullYear();

    meseAvanti = 0;
    sposta(0);


    document.querySelector('header .centro form .data .containerCalendario .sopra .destra').classList.remove("disabilita")
    document.querySelector('header .centro form .data .containerCalendario .sopra .destra i').classList.remove("disabilita")
    if(annoCorrente != anno){
        giornoSelezionato = null;
        meseSelezionato = null;
    }
}



function riempiCalendario(){

    monthDisplay.innerHTML = mesi[(Number(month)-1+meseAvanti)%12].nome;
   

    if((Number(month)-1+meseAvanti)%12 == 0 && year == annoCorrente && Number(month) != 1){
       year++; 
       if(year % 4 == 0) mesi[1].giorni = 29;
       else mesi[1].giorni = 28;
    }  
    else if((Number(month)-1+meseAvanti)%12 == 11 && year != annoCorrente && Number(month) != 1){
        year--;
        if(year % 4 == 0) mesi[1].giorni = 29;
        else mesi[1].giorni = 28;
    } 
    if(annoCorrente != year)  monthDisplay.innerHTML += " " + year;

    grid.innerHTML = "";
    grid.innerHTML += '<div class="item giorno">lun</div>';
    grid.innerHTML += '<div class="item giorno">mar</div>';
    grid.innerHTML += '<div class="item giorno">mer</div>';
    grid.innerHTML += '<div class="item giorno">gio</div>';
    grid.innerHTML += '<div class="item giorno">ven</div>';
    grid.innerHTML += '<div class="item giorno">sab</div>';
    grid.innerHTML += '<div class="item giorno">dom</div>';

    var firstDay = (new Date(year, month-1+meseAvanti, 1)).getDay();    


    for(let i=0; i<firstDay-1; i++){
        grid.innerHTML += '<div class="item"></div>';
    }



    // console.log("mese selezionato: " + meseSelezionato)
    // console.log("giorno selezionato: " + giornoSelezionato)
    // console.log("mese mostrato: " + (Number(month)-1+meseAvanti)%12)

    for(let i=1; i<mesi[(Number(month)-1+meseAvanti)%12].giorni+1; i++){
       
        if(i < date && meseAvanti==0 && annoCorrente == year ) grid.innerHTML += '<div class="item disabilita"><p>' + i + '</p></div>';
        else if(i == giornoSelezionato && meseSelezionato == (Number(month)-1+meseAvanti)%12) grid.innerHTML += '<div class="item"><p class="selezionata" onclick="selezionaGiorno(this)">' + i + '</p></div>';
        else grid.innerHTML += '<div class="item"><p onclick="selezionaGiorno(this)">' + i + '</p></div>';
    }
}

let datePicker = document.querySelector('header .centro form .data p')
let datePickerField = document.querySelector('header .centro form .inputData')

impostaData();

function impostaData(){
    let date = new Date(year,meseSelezionato, giornoSelezionato)


    var formattedDate = date.getFullYear() + "-" 
    if(date.getMonth()+1 >= 10)  formattedDate += (date.getMonth()+1) + "-";
    else formattedDate += '0' + (date.getMonth()+1) + "-";
    if(date.getDate() >= 10) formattedDate += date.getDate();
    else formattedDate += '0' + date.getDate();
    datePickerField.value = formattedDate;


}

function selezionaGiorno(n){
        
    giornoSelezionato = n.innerHTML;
    meseSelezionato = (Number(month)-1+meseAvanti)%12;
    impostaData()
    
    let prev = grid.querySelector('.selezionata');
    if(prev != null) prev.classList.remove('selezionata');
    n.classList.add('selezionata');


    let selezionaString =  n.innerHTML + " " + mesi[(new Date(year, month-1+meseAvanti, 1)).getMonth()].abb;

    if(Number(n.innerHTML) == Number(date) && meseAvanti==0 && annoCorrente == year) datePicker.innerHTML = "Oggi";
    else if( Number(n.innerHTML) == Number(date)+1 && meseAvanti==0 && annoCorrente == year) datePicker.innerHTML = "Domani";
    else datePicker.innerHTML = selezionaString;

}

function dayToString(day){
    switch(day){
        case 1:
            return "Lun";
            break;
        case 2:
            return "Mar";
            break;
        case 3:
            return "Mer";
            break;
        case 4:
            return "Gio";
            break;
        case 5:
            return "Ven";
            break;
        case 6:
            return "Sab";
            break;
        case 0:
            return "Dom";
            break;
    }
}

function sposta(n){
    // console.log(meseAvanti)


    if(n == 1){     //sposta avanti
        if(meseAvanti + 1 < 12) meseAvanti++;
        if(meseAvanti == 1){
            document.querySelector('header .centro form .data .containerCalendario .sopra .sinistra').classList.remove("disabilita")
            document.querySelector('header .centro form .data .containerCalendario .sopra .sinistra i').classList.remove("disabilita")
        }
        else if(meseAvanti == 11){
            document.querySelector('header .centro form .data .containerCalendario .sopra .destra').classList.add("disabilita")
            document.querySelector('header .centro form .data .containerCalendario .sopra .destra i').classList.add("disabilita")
        }
        riempiCalendario()
    }
    else{           //sposta indietro
       
        if(meseAvanti - 1 > -1) meseAvanti--;
        if(meseAvanti == 0){
            document.querySelector('header .centro form .data .containerCalendario .sopra .sinistra').classList.add("disabilita")
            document.querySelector('header .centro form .data .containerCalendario .sopra .sinistra i').classList.add("disabilita")
        }
        else if(meseAvanti == 10){
            document.querySelector('header .centro form .data .containerCalendario .sopra .destra').classList.remove("disabilita")
            document.querySelector('header .centro form .data .containerCalendario .sopra .destra i').classList.remove("disabilita")
        }
        riempiCalendario()
    }  

}

/* nPosti.js */

let containerScegliAperto = false;

function apriContainerScegli(){
    
    document.querySelector('header .centro form .containerScegli').classList.toggle('mostraElemento');
    if(containerScegliAperto) containerScegliAperto = false;
    else containerScegliAperto = true;
  
}

/* searchButton.js */

let schede = document.querySelectorAll('.scheda');
let barraDiRicerca = document.getElementById("cercaTraccia")

function apriScheda(n,pulsante){

    if(pulsante){
    for(let i=1; i<schede.length; i++){
         schede[i].classList.remove('schedaAperta');
    }
    }
    schede[n-1].classList.toggle('schedaAperta');
    
    document.addEventListener('click', function(event){
        var divDaEscludere = document.getElementById('formSotto');
        var divDaEscludere2 = document.querySelector('header .centro');

        var targetElement = event.target;
        var btn = document.querySelector('.destra .cercaTraccia')


        if(btn.contains(targetElement)){

        }
        else if ( (!divDaEscludere.contains(targetElement) && divDaEscludere.querySelectorAll('.scheda')[0].classList.contains('schedaAperta')) && !divDaEscludere2.contains(targetElement)) {
            apriScheda(n,true);
            barraDiRicerca.classList.toggle("mostra")

        }
    });
    
}


function apriCercaTraccia(){

        //apriScheda(1,true);
        barraDiRicerca.classList.toggle("mostra")
        barraDiRicerca.querySelector('header .containerScegli').classList.toggle('sali');
        
}

function submitFormCercaTraccia() {
    let form = barraDiRicerca.querySelector('form')
    let valido = true;
    let inputs = form.querySelectorAll('input')
    inputs.forEach(input => {
        if(!input.checkValidity()) valido = false; 
        
    });  
    if(valido && inputs[0].value.toLowerCase() != inputs[1].value.toLowerCase()) form.submit();
    else {
        if(!inputs[0].checkValidity()) inputs[0].focus();
        else if(!inputs[1].checkValidity()) inputs[1].focus();
    }
}


aggiungiTraccia = document.getElementById("aggiungiTraccia");

function submitFormAggiungiTraccia() {
    let form = aggiungiTraccia.querySelector('form')
    let valido = true;
    let inputs = form.querySelectorAll('input')
    inputs.forEach(input => {
        if(!input.checkValidity()) valido = false; 
        
    });  
    if(valido && inputs[0].value.toLowerCase() != inputs[1].value.toLowerCase()) form.submit();
    else {
        if(!inputs[0].checkValidity()) inputs[0].focus();
        else if(!inputs[1].checkValidity()) inputs[1].focus();
    }
}

function apriAggiungiTraccia(){

    //apriScheda(1,true);
    aggiungiTraccia.classList.toggle("mostra")
    aggiungiTraccia.querySelector('header .containerScegli').classList.toggle('sali');
    
}


setData(window.data)

