

var visitante = "Felipe";
alert(visitante);
console.log(visitante);

/*function boasvindas(){
	let visitante = "Felipe Alex Bozz",
	alert(visitante);
}*/

//vector
var lista = ["Bill","Lála","Pequeno"]; //criando lista
console.log(lista); //mostra lista no console
lista.push('Cachorrinho FDP'); //inclui na última posição da lista
console.log(lista);
lista.pop(); // extrai da última posição da lista
console.log(lista);
console.log(lista.length); // length conta o número de índices/lugares
console.log(lista.reverse()); // inversão da ordem da lista
console.log(lista.toString()); // converte a informação da lista para uma string já com separador.
console.log(lista.join("-")); // também converte para string mas possibilita escolher o separador

//dicionário
var familia = {nome:"Ana", idade:"30"};
console.log(familia);

var familia2 = [{nome:"Ana", idade:"30"},{nome:"Felipe", idade:"35"}];
console.log(familia2);
console.log(familia2[1].nome);
console.log(familia2[1].idade);

//codicionais
var idade = prompt("Qual a sua idade?"); // coleta a idade do vivente
if (idade>=18) {
	console.log("Continue");
}else{
	console.log("Entrada não permitida");
}

//laços de repetição
var counter = 0;
while(counter<5){
	console.log(counter);
	counter++
}


