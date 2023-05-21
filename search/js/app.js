let pulsanti = document.querySelectorAll('.containerScegli .destra span');
let containerScegli = document.querySelector('header .centro .containerScegli')
let nPostiA = document.querySelector('.containerScegli .numero');

function aggiornaData(){

    // document.querySelector('.inputData').value = 

}

pulsanti[0].addEventListener('click', () => {

    if(containerScegli.classList.length < 2) {
    nPostiField.value = (parseInt(nPostiA.innerHTML)-1);
    submitFormCercaTraccia()
    }
});


pulsanti[1].addEventListener('click', () => {
    if(containerScegli.classList.length < 2) {
    nPostiField.value = (parseInt(nPostiA.innerHTML)+1);
    submitFormCercaTraccia()
    }
});
