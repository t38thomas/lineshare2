
let inputPrimo = document.querySelector('.bigContainer:nth-child(1) input');
let pulsantePrimo = document.querySelector('.bigContainer:nth-child(1) .nextBtn:nth-child(2)');
let accesoPrimo = false;
let acceso = false;


//primo big container
inputPrimo.addEventListener('keyup', () => {            


    if (inputPrimo.checkValidity() && !accesoPrimo) {
        pulsantePrimo.classList.toggle('valido')
        accesoPrimo = true;
       
    } else if (!inputPrimo.checkValidity() && accesoPrimo) {
        pulsantePrimo.classList.toggle('valido')
        accesoPrimo = false;
    }


})

//cambia visuale
function swapView(n) {

    acceso = false;

    document.querySelector('.bigContainer:nth-child(' + n + ')').classList.toggle('mostraCentro')
    document.querySelector('.bigContainer:nth-child(' + n + ')').classList.toggle('mostraDestra')
    let prossimo = document.querySelector('.bigContainer:nth-child(' + (n + 1) + ')');
    if (prossimo !== null) prossimo.classList.toggle('mostraCentro')

    document.querySelectorAll('input').forEach(input => { input.removeEventListener('keyup', () => { }); });


    let pulsante = document.querySelector('.bigContainer:nth-child(' + (n + 1) + ') .nextBtn:nth-last-child(1)');

    let inputs = document.querySelectorAll('.bigContainer:nth-child(' + (n + 1) + ') input')
    console.log(inputs)
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
function apriOccio(n) {
    let occhi = document.querySelectorAll('.containerPassword span')
    
    if (occhi[n].innerHTML === "visibility") {
        occhi[n].innerHTML = 'visibility_off';
        let inputPassword = document.querySelector('.containerPassword:nth-child(' + (n + 3) + ') input')
        inputPassword.type = "text"

    }
    else if (occhi[n].innerHTML == "visibility_off") {
        occhi[n].innerHTML = 'visibility';
        let inputPassword = document.querySelector('.containerPassword:nth-child(' + (n + 3) + ') input')
        inputPassword.type = "password"
    }
}



//bordi degli input
function seleziona(n) {
    let containerPassword = document.querySelector('.bigContainer .containerPassword:nth-child(' + (n) + ')');
    let passwordinput = document.querySelector('.bigContainer .containerPassword:nth-child(' + (n) + ') input');

    containerPassword.classList.toggle('selezionato')
    passwordinput.classList.toggle('levaBordo')
}


function submitForm() {
    let form = document.querySelector("form")
    form.submit();
}