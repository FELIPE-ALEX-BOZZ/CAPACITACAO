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

/*teste triplique as chances

function tripleTheChances(chances) {
    // Write your code here

       /*chances.sort(function compare(a, b){
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }); *opcional
 
    var array = [];
    for(var i=0;i<chances.length;i++){
        
        array.push(chances[i]*3);
        
        
    }return array;
}*/

/* TESTE: CONTA LETRA

function vezesLetraAparece(frase, letra) {
    // Escreva seu código aqui
    var contaLetra = 0;
    var fraseLista = frase.split('');
    
    for(var i=0;i<fraseLista.length;i++){
        if(letra == fraseLista[i]){
        contaLetra++;
        } 
    //console.log(fraseLista[i]);
    }return contaLetra;
    

}

*/