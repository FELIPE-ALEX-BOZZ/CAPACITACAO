var currentNumberWraper = document.querySelector("#currentNumber");
var currentNumber = parseInt(currentNumberWraper.innerHTML);

function atualizar(){
    currentNumberWraper.innerHTML = currentNumber;
}

function increment(){
    currentNumber += 1;
    atualizar();
}

function decrement(){
    if(currentNumber >= 1){
        currentNumber -= 1;
        atualizar();
    }
}

document.querySelector("#counter > button:nth-child(3)").addEventListener('click',increment);
document.querySelector("#counter > button:nth-child(1)").addEventListener('click',decrement);