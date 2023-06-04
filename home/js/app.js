function chiudiPopUp(){
    document.querySelector('.containerPopUP').classList.add("rimuoviElemento")
}

document.querySelector('.containerPopUP .progressBar').addEventListener("animationend", () => {chiudiPopUp()})