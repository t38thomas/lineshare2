let editMode = [];
let values = [];
let invalido = [];

function cambiaInput(n){

    let item = document.querySelector('.container .item:nth-child('+n+')');
    let input = item.querySelector('input');
    let btn = item.querySelector('.cambiaBtn:nth-last-child(1)');
    let cancellaBtn = item.querySelector('.cancellaBtn');
    let value = input.value;

    if(editMode[n] != true){

    editMode[n] = true;

    btn.classList.toggle('confermaBtn');
    cancellaBtn.classList.toggle('visibile')
    btn.querySelector('i').outerHTML = '<i class="fa-solid fa-check"></i>';

    input.removeAttribute("readonly");
    input.classList.toggle('modificabile');
    input.focus();
    input.value = "";
    input.value = value;

    values[n] = value;

    input.addEventListener("keyup" , () => {
        if(input.checkValidity() && invalido[n]){
          btn.classList.toggle("invalido");  
          invalido[n] = false;

        } 
        if(!input.checkValidity() && !invalido[n]){
          btn.classList.toggle("invalido");  
          invalido[n] = true;
        } 
    });

    if(window.innerWidth < 768){
        item.querySelector('.label').classList.toggle("rimosso");
    }

    }else{          //submit
        console.log(input.value)
        if(values[n] != item.querySelector('input').value){
            console.log(document.querySelector('.container .item:nth-child('+n+') form'))
            document.querySelector('.container .item:nth-child('+n+') form').submit();
        }else annulla(n);
    }
}

function annulla(n){
    let item = document.querySelector('.container .item:nth-child('+n+')');
    let input = item.querySelector('input');
    let btn = item.querySelector('.confermaBtn');
    let cancellaBtn = item.querySelector('.cancellaBtn');

    if(editMode[n] == true){


        input.value = values[n];
        input.classList.toggle('modificabile');
        input.setAttribute("readonly",true);

        btn.classList.toggle('confermaBtn');
        cancellaBtn.classList.toggle('visibile')
        btn.querySelector('i').outerHTML = '<i class="fa-solid fa-pencil"></i>';
        
        if(input.checkValidity() && invalido[n]){
            btn.classList.toggle("invalido");  
            invalido[n] = false;
  
        } 

        if(window.innerWidth < 768){
            item.querySelector('.label').classList.toggle("rimosso");
        }
        editMode[n] = false;
    }
}

function scegliFoto(){
    let filePicker = document.getElementById('filePicker');
    
    filePicker.addEventListener('change', function() {
        document.querySelector('.containerFotoProfilo form').submit();
    });
    filePicker.click();
    
}