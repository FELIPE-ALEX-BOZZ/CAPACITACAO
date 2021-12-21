alert('Olá!');


function confere(){
    let n1;
    let n2;
   
    n1 = Number(prompt('Por favor, digite o primeiro valor:'));
    n2 = Number(prompt('Por favor, digite o segundo valor:'));
    
    let r1;
    let r2;

    if(n1===n2){
        (n1 == n2)?r1='n1 é igual a n2':r1='n1 é diferente de n2';
        ((n1 + n2)>10 && (n1 + n2)<20 )?r2='a soma de n1 + n2 esta entre 10 e 20':r2='a soma de n1 + n2 não está entre 10 e 20.';
        alert( r1 + ' e ' + r2);
    }else{
        alert('Caracteres inválidos...Tente novamente.');
        confere();
    }

}
confere();


