let pulsante = document.querySelector(".nextBtn:nth-child(2)");
let acceso = false;

let inputs = document.querySelectorAll("main input")
inputs.forEach(input => {
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
    })
})


function apriOccio(n) {
    let occhi = document.querySelectorAll('.containerPassword span')
    
    if (occhi[n].innerHTML === "visibility") {
        occhi[n].innerHTML = 'visibility_off';
        let inputPassword = document.querySelector('.containerPassword input')
        inputPassword.type = "text"

    }
    else if (occhi[n].innerHTML == "visibility_off") {
        occhi[n].innerHTML = 'visibility';
        let inputPassword = document.querySelector('.containerPassword input')
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
    let form = document.querySelector("main form")
    form.submit();
}