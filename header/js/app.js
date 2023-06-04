let menuAperto = false;
let menuBtn = document.querySelector('.pulsante:nth-last-child(1)');


function openProfileMenu(){

    document.querySelector('.menu').classList.toggle('apri');
    menuBtn.classList.toggle('scuro');
}

let inizio = true;
let menu =  document.querySelector('header .menu');

let disabilitaOggi = false;
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
    }
    });

    riempiCalendario(0)

    /* CALENDARIO 2*/
    document.addEventListener('click', function(event) {                    //evento per chiudere il menu
        var divDaEscludere = document.querySelector('main .data .containerCalendario2');
        var btn = document.querySelector('main form .containerData');
        var targetElement = event.target;
        if(divDaEscludere != null){
        if ( (!divDaEscludere.contains(targetElement) && divDaEscludere.classList.length == 2) || (btn.contains(targetElement))) {
            apriCalendario2();
        }
        }
    });
    
    /*controllo supero 22 calendario 2*/

    if(new Date().getHours() >= 22){
        disabilitaOggi = true;
        document.getElementById('testoData').innerHTML = "Domani"
        document.querySelectorAll('.mostraData').forEach(t => { t.innerHTML = "domani" })
        aggiornaSelectDomani();
        aggiornaMostraPartenza();
        aggiornaMostraArrivo();
    }
    else disabilitaOggi = false;

};

let mostraPartenza = document.querySelectorAll('.mostraPartenza');
let mostraData = document.querySelectorAll('.mostraData')

function apriCalendario2(){
    let calendario = document.querySelector('main form .data .containerCalendario2')
    calendario.classList.toggle('mostraElemento');

    let testo = document.getElementById("testoData")
    
    mostraPartenza.forEach(t =>{
        if(testo.innerHTML == "Oggi" || testo.innerHTML == "Domani"){
            if(t != mostraPartenza[0]) t.innerHTML = "partirò";
            else t = "partirò&nbsp&nbsp&nbsp&nbsp";
        } 
        else t.innerHTML = "partirò il";
    })

    mostraData.forEach(t => {
        if(testo.innerHTML == "Oggi" || testo.innerHTML == "Domani") t.innerHTML = testo.innerHTML.toLowerCase();
        else t.innerHTML = giornoSelezionato[1] + " " + mesi[meseSelezionato[1]].nome;
    });


}



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
let grid = document.querySelectorAll('.data .sotto');
let monthDisplay = document.querySelectorAll('.data .sopra .mese');
let meseAvanti = [0,0];


let t = new Date();
let date = ('0' + t.getDate()).slice(-2);
let month = ('0' + (t.getMonth() + 1)).slice(-2);
let year = [t.getFullYear(), t.getFullYear()]
let annoCorrente = [year[0],year[1]];

meseSelezionato = [(Number(month)-1+meseAvanti[0])%12,(Number(month)-1+meseAvanti[1])%12];
giornoSelezionato = [date,date];

if(year[0] % 4 == 0) mesi[1].giorni = 29;


function apriCalendario(){
    document.querySelector('header .centro form .data .containerCalendario').classList.toggle('mostraElemento')
    if(calendarioAperto) calendarioAperto = false;
    else calendarioAperto = true
}


function setData(data,calendario){

    data = data.split('-')

    let mesePrev = meseSelezionato[calendario]+1;
    giornoSelezionato[calendario] = Number(data[2]);
    meseSelezionato[calendario] = Number(data[1]) - 1;
    year[calendario] = Number(data[0])

    impostaData(calendario)

    let selezionaString =  giornoSelezionato[calendario] + " " + mesi[meseSelezionato[calendario]].abb;

    if(Number(giornoSelezionato[calendario]) == Number(date) && meseAvanti[calendario]==0 && annoCorrente[calendario] == year[calendario]) datePicker[calendario].innerHTML = "Oggi";
    else if( Number(giornoSelezionato[calendario]) == Number(date)+1 && meseAvanti[calendario]==0 && annoCorrente[calendario] == year[calendario]) datePicker[calendario].innerHTML = "Domani";
    else datePicker[calendario].innerHTML = selezionaString;

    for(let i=0; i< abs(meseSelezionato[calendario]+1 - Number(mesePrev)); i++){
        if(meseSelezionato[calendario] - Number(mesePrev) > 0) sposta(1)
        else sposta(-1)
    }
 
    riempiCalendario(calendario)
}

function abs(x){
    if(x >= 0) return x;
    else return x*-1;
}

function setAnno(anno,calendario){
    if(anno % 4 == 0) mesi[1].giorni = 29;
    else mesi[1].giorni = 28;

    if(annoCorrente[calendario] != anno) t = new Date(anno,0)
    else t = new Date();

    month = ('0' + (t.getMonth() + 1)).slice(-2);
    year[calendario] = t.getFullYear();

    meseAvanti[calendario] = 0;
    sposta(0);


    document.querySelector('header .centro form .data .containerCalendario .sopra .destra').classList.remove("disabilita")
    document.querySelector('header .centro form .data .containerCalendario .sopra .destra i').classList.remove("disabilita")
    if(annoCorrente[calendario] != anno){
        giornoSelezionato[calendario] = null;
        meseSelezionato[calendario] = null;
    }
}


     let dataCambiata = false;
function riempiCalendario(calendario){

    monthDisplay[calendario].innerHTML = mesi[(Number(month)-1+meseAvanti[calendario])%12].nome;
   

    if((Number(month)-1+meseAvanti[calendario])%12 == 0 && year[calendario] == annoCorrente[calendario] && Number(month) != 1){
       year[calendario]++; 
       if(year[calendario] % 4 == 0) mesi[1].giorni = 29;
       else mesi[1].giorni = 28;
    }  
    else if((Number(month)-1+meseAvanti[calendario])%12 == 11 && year[calendario] != annoCorrente[calendario] && Number(month) != 1){
        year[calendario]--;
        if(year[calendario] % 4 == 0) mesi[1].giorni = 29;
        else mesi[1].giorni = 28;
    } 
    if(annoCorrente[calendario] != year[calendario])  monthDisplay[calendario].innerHTML += " " + year[calendario];
    
    var firstDay = (new Date(year[calendario], month-1+meseAvanti[calendario], 1)).getDay();    

        grid[calendario].innerHTML = "";
        grid[calendario].innerHTML += '<div class="item giorno">lun</div>';
        grid[calendario].innerHTML += '<div class="item giorno">mar</div>';
        grid[calendario].innerHTML += '<div class="item giorno">mer</div>';
        grid[calendario].innerHTML += '<div class="item giorno">gio</div>';
        grid[calendario].innerHTML += '<div class="item giorno">ven</div>';
        grid[calendario].innerHTML += '<div class="item giorno">sab</div>';
        grid[calendario].innerHTML += '<div class="item giorno">dom</div>';


        for(let i=0; i<firstDay-1; i++){
            grid[calendario].innerHTML += '<div class="item"></div>';
        }

        
        for(let i=1; i<mesi[(Number(month)-1+meseAvanti[calendario])%12].giorni+1; i++){
       
            if(calendario == 1 && disabilitaOggi && i == date && meseAvanti[calendario] == 0 && annoCorrente[calendario] == year[calendario])grid[calendario].innerHTML += '<div class="item disabilita"><p>' + i + '</p></div>';    
            else if(i < date && meseAvanti[calendario]==0 && annoCorrente[calendario] == year[calendario]) grid[calendario].innerHTML += '<div class="item disabilita"><p>' + i + '</p></div>';
            else if(i == giornoSelezionato[calendario] && meseSelezionato[calendario] == (Number(month)-1+meseAvanti[calendario])%12) grid[calendario].innerHTML += '<div class="item"><p class="selezionata" onclick="selezionaGiorno(this, '+ calendario +')">' + i + '</p></div>';
            else grid[calendario].innerHTML += '<div class="item"><p onclick="selezionaGiorno(this, ' + calendario + ')">' + i + '</p></div>';
        }

   
        if(disabilitaOggi && !dataCambiata){

            let stringData = year[0] + "-" + month + "-" + (Number(date)+1);
            console.log(stringData)
            dataCambiata = true;
            setData(stringData ,1)

            
        }

    // console.log("mese selezionato: " + meseSelezionato[calendario])
    // console.log("giorno selezionato: " + giornoSelezionato[calendario])
    // console.log("mese mostrato: " + (Number(month)-1+meseAvanti[calendario])%12)
}

let datePicker = document.querySelectorAll('form .data p')
let datePickerField = document.querySelectorAll('form .inputData')


impostaData(0);

function impostaData(calendario){
    let date = new Date(year[calendario],meseSelezionato[calendario], giornoSelezionato[calendario])


    var formattedDate = date.getFullYear() + "-" 
    if(date.getMonth()+1 >= 10)  formattedDate += (date.getMonth()+1) + "-";
    else formattedDate += '0' + (date.getMonth()+1) + "-";
    if(date.getDate() >= 10) formattedDate += date.getDate();
    else formattedDate += '0' + date.getDate();
    datePickerField[calendario].value = formattedDate;


}

function aggiornaSelect(){
    let select = document.getElementById('selectPartenza');
    select.innerHTML = '';

    var oraLocale = new Date().getHours(); // Ottieni l'ora locale
    let i = 0;
    while(oraLocale + 1 != 24 && i!=2){
        oraLocale++;
        i++;
      } 
    var minutiLocale = new Date().getMinutes(); // Ottieni i minuti locali
    minutiLocale = Math.floor(minutiLocale / 10) * 10;
    var tempMin = minutiLocale;
    if (minutiLocale == 0) minutiLocale = "0" + minutiLocale;
    if(oraLocale < 10) oraLocale = "0" + oraLocale;
    
    while (oraLocale <= 23 && tempMin <= 50) {
    var option = document.createElement("option");
    option.value = oraLocale + ":" + minutiLocale;
    option.text = oraLocale + ":" + minutiLocale;
    select.appendChild(option);

    if (Number(minutiLocale) + 10 <= 50) minutiLocale = Number(minutiLocale) + 10;
    else {
        minutiLocale = "00";
        oraLocale++; 
        if(oraLocale < 10) oraLocale = "0" + oraLocale;
    }

    }


    /*select arrivo*/
    let selectArrivo = document.getElementById('selectArrivo');
    selectArrivo.innerHTML = '';

    var oraArrivo = new Date().getHours();
    i = 0;
    while (oraArrivo + 1 !== 24 && i !== 2) {
    oraArrivo++;
    i++;
    }
    var minutiArrivo = new Date().getMinutes() // Ottieni i minuti locali
    minutiArrivo = Math.floor(minutiArrivo / 10) * 10 + 10;

    if (minutiArrivo == 0) minutiArrivo = "0" + minutiArrivo;

    if(minutiArrivo == 60){
        minutiArrivo = "00";
        oraArrivo++;
        if(oraArrivo == 24) oraArrivo = "00";
    }
    if(oraArrivo < 10) oraArrivo = "0" + oraArrivo;
    console.log(Number(oraArrivo))

    while (Number(oraArrivo) <= 23 && Number(minutiArrivo) <= 50) {
    var option = document.createElement("option");
    option.value = oraArrivo + ":" + minutiArrivo;
    option.text = oraArrivo + ":" + minutiArrivo;
    console.log(option)
    selectArrivo.appendChild(option);

    if (Number(minutiArrivo) + 10 <= 50) minutiArrivo = Number(minutiArrivo) + 10;
    else {
        minutiArrivo = "00";
        oraArrivo++;
        if(oraArrivo < 10) oraArrivo = "0" + oraArrivo;
    }
    }

}


function aggiornaSelectDomani(){
    let select = document.getElementById('selectPartenza');
    const autoSelectOra = "08";
    const autoSelectMin = 0;
    select.innerHTML = '';

    var oraLocale = "00";
    var minutiLocale = "00";
    var tempOra = oraLocale;
    var tempMin = minutiLocale;

    while (oraLocale <= 23 && minutiLocale <= 50) {
        var option = document.createElement("option");
        option.value = oraLocale + ":" + minutiLocale;
        option.text = oraLocale + ":" + minutiLocale;
        if (oraLocale == autoSelectOra && minutiLocale == autoSelectMin) option.selected = true;

        select.appendChild(option);
    
    if (Number(minutiLocale) + 10 <= 50) minutiLocale = Number(minutiLocale) + 10;
    else {
        minutiLocale = "00";
        oraLocale++;
        if (oraLocale < 10) {
        oraLocale = "0" + oraLocale;
        }
    }
    }   

    /*select arrivo*/
    let selectArrivo = document.getElementById('selectArrivo');
    selectArrivo.innerHTML = '';

    var oraArrivo = autoSelectOra;
    var minutiArrivo = autoSelectMin + 10;
    var tempMinArrivo = minutiArrivo;

    while (oraArrivo <= 23 && tempMinArrivo <= 50) {
    var option = document.createElement("option");
    option.value = oraArrivo + ":" + minutiArrivo;
    option.text = oraArrivo + ":" + minutiArrivo;
    selectArrivo.appendChild(option);

    if (Number(minutiArrivo) + 10 <= 50) minutiArrivo = Number(minutiArrivo) + 10;
    else {
        minutiArrivo = "00";
        oraArrivo++;
        if (oraArrivo < 10) {
            oraArrivo = "0" + oraArrivo;
        }
    }
    }
}

function aggiornaMostraPartenza(){

    let mostraOraPartenza = document.querySelectorAll('.mostraOraPartenza')
    let selezionaOraPartenza = document.getElementById('selectPartenza');
    if(mostraOraPartenza != undefined && mostraOraPartenza != null){
        mostraOraPartenza.forEach(t => {
            t.innerHTML = "alle " + selezionaOraPartenza.value;
        });
    }
}

function aggiornaMostraArrivo(){

    let mostraOraArrivo = document.querySelectorAll('.mostraOraArrivo')
    let selezionaOraArrivo = document.getElementById('selectArrivo');
    if(mostraOraArrivo != undefined && mostraOraArrivo != null){
        mostraOraArrivo.forEach(t => {
            t.innerHTML = selezionaOraArrivo.value;
        });
    }
}

let domaniSelezionato = false; 
if(disabilitaOggi) domaniSelezionato = true;
function selezionaGiorno(n,calendario){
        
    giornoSelezionato[calendario] = n.innerHTML;
    meseSelezionato[calendario] = (Number(month)-1+meseAvanti[calendario])%12;
    impostaData(calendario)
    
    let prev = grid[calendario].querySelector('.selezionata');
    if(prev != null) prev.classList.remove('selezionata');
    n.classList.add('selezionata');


    let selezionaString =  n.innerHTML + " " + mesi[(new Date(year[calendario], month-1+meseAvanti[calendario], 1)).getMonth()].abb;

    if(Number(n.innerHTML) == Number(date) && meseAvanti[calendario]==0 && annoCorrente[calendario] == year[calendario]) datePicker[calendario].innerHTML = "Oggi";
    else if( Number(n.innerHTML) == Number(date)+1 && meseAvanti[calendario]==0 && annoCorrente[calendario] == year[calendario]) datePicker[calendario].innerHTML = "Domani";
    else datePicker[calendario].innerHTML = selezionaString;


    
    if(calendario == 1){
        if(Number(n.innerHTML) == Number(date) && meseAvanti[calendario]==0 && annoCorrente[calendario] == year[calendario]){      //se selezioni oggi
            if(domaniSelezionato){
                /*select partenza*/
                aggiornaSelect();
                domaniSelezionato = false;
            }
        }else{           
            
            if(!domaniSelezionato){
                aggiornaSelectDomani();
                domaniSelezionato = true;
            }
        }

        aggiornaMostraPartenza()
        aggiornaMostraArrivo()
    }

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


        
function sposta(n,calendario){
    // console.log(meseAvanti[calendario])


    if(calendario == 0){
        if(n == 1){     //sposta avanti
            if(meseAvanti[calendario] + 1 < 12) meseAvanti[calendario]++;
            if(meseAvanti[calendario] == 1){
                document.querySelector('header .centro form .data .containerCalendario .sopra .sinistra').classList.remove("disabilita")
                document.querySelector('header .centro form .data .containerCalendario .sopra .sinistra i').classList.remove("disabilita")
            }
            else if(meseAvanti[calendario] == 11){
                document.querySelector('header .centro form .data .containerCalendario .sopra .destra').classList.add("disabilita")
                document.querySelector('header .centro form .data .containerCalendario .sopra .destra i').classList.add("disabilita")
            }
            riempiCalendario(calendario)
        }
        else{           //sposta indietro
        
            if(meseAvanti[calendario] - 1 > -1) meseAvanti[calendario]--;
            if(meseAvanti[calendario] == 0){
                document.querySelector('header .centro form .data .containerCalendario .sopra .sinistra').classList.add("disabilita")
                document.querySelector('header .centro form .data .containerCalendario .sopra .sinistra i').classList.add("disabilita")
            }
            else if(meseAvanti[calendario] == 10){
                document.querySelector('header .centro form .data .containerCalendario .sopra .destra').classList.remove("disabilita")
                document.querySelector('header .centro form .data .containerCalendario .sopra .destra i').classList.remove("disabilita")
            }
            riempiCalendario(calendario)
        } 
    }
    else{
        if(n == 1){     //sposta avanti
            if(meseAvanti[calendario] + 1 < 12) meseAvanti[calendario]++;
            if(meseAvanti[calendario] == 1){
                document.querySelector('main form .data .containerCalendario2 .sopra .sinistra').classList.remove("disabilita")
                document.querySelector('main form .data .containerCalendario2 .sopra .sinistra i').classList.remove("disabilita")
            }
            else if(meseAvanti[calendario] == 11){
                document.querySelector('main form .data .containerCalendario2 .sopra .destra').classList.add("disabilita")
                document.querySelector('main form .data .containerCalendario2 .sopra .destra i').classList.add("disabilita")
            }
            riempiCalendario(calendario)
        }
        else{           //sposta indietro
        
            if(meseAvanti[calendario] - 1 > -1) meseAvanti[calendario]--;
            if(meseAvanti[calendario] == 0){
                document.querySelector('main form .data .containerCalendario2 .sopra .sinistra').classList.add("disabilita")
                document.querySelector('main form .data .containerCalendario2 .sopra .sinistra i').classList.add("disabilita")
            }
            else if(meseAvanti[calendario] == 10){
                document.querySelector('main form .data .containerCalendario2 .sopra .destra').classList.remove("disabilita")
                document.querySelector('main form .data .containerCalendario2 .sopra .destra i').classList.remove("disabilita")
            }
            riempiCalendario(calendario)
        } 
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

setData(window.data,0)


