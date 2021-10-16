// teste primos em um intervalo

function teste(num){
	alert(num);
}

function buscaNumeroPrimos(n) {

    var numerosPrimos = [];
    var divisores=0;
    var contador = 1;
    var contaZero = 0;

    while(divisores<n){
    	console.log("Divisor: "+divisores);
    	while(contador<n){
    		
    		if(divisores % contador == 0){
    			contaZero ++
    			console.log("------------é primo: "+divisores+" x "+contador + "=" + (divisores % contador == 0));
    			
    		}

    		contador++;
    	}
    	
    	console.log(contaZero);

    	if(contaZero <= 2 && contaZero>1){
    		numerosPrimos.push(divisores);
    	} 
    	
    	contaZero = 0;
    	contador = 1;


    	divisores++;
    }

	//console.log(numerosPrimos);

}

// teste se uma palavra é palíndromo alternativo

function ehPalindromo(palavra) {
    palavra = palavra.toLowerCase();
    var palindromo = palavra.split('');
    palindromo.reverse();
    palindromo = palindromo.join('');
    
    if (palindromo == palavra) {

        console.log("SIM, SOU UM PALÍNDROMO");
    }else{
        console.log("INFELIZMENTE, NÃO SOU UM PALÍNDROMO");
    }

    console.log("Palavra: "+ palavra + " Inverdia é: "+palindromo); 
}

/* resposta mais funcional

function ehPalindromo(palavra) {
  
   var palindromo = "";

    for(var index = palavra.length - 1; index >= 0; index--) {
      console.log("inserindo: "+palavra[index]+" em palindromo = "+ palindromo);
      palindromo += palavra[index]
    }
    console.log("Resultado é: "+palindromo);
    if (palavra == palindromo) {
      console.log("SIM, SOU UM PALÍNDROMO");
    } else {
     console.log("INFELIZMENTE, NÃO SOU UM PALÍNDROMO");
    }
    
}*/