
function teste(n){
	alert(n);
}

function buscaNumeroPrimos(n) {

    var numerosPrimos = [];
    var divisores=0;
    var contador = 1;
    var contaZero = 0;

    while(divisores<n){
    	console.log("Divisor: "+divisores);
    	while(contador<n){
    		
    		//console.log("----Contador: "+contador+" x "+divisores);
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
	    
	    	    

    //}
	    
     

	console.log(numerosPrimos);
 	//console.log(contador);
}
// fim do seu código