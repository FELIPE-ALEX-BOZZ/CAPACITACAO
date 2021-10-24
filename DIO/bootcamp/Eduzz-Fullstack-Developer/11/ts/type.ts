/*class Default{
    texto: string;
    numero: number;
    qualquer: any;
    boleano: boolean;
    array: Array<any>;

    constructor(){
        this.metodo();
        //exemplo com array de json
        this.array = [
            {
            teste:'teste'
            }
        ]
    }

    metodo(){
        this.numero = 10;
        this.texto = 'Este é um alert simples em typescript';
        return alert(this.texto);
    }
}*/

/*TUPLE
let a: [string,any,number][] = [
    ['url',123,456],
    ['port',789,1012]
]
function funcao(){
    a.forEach(element =>{
        console.log(element[0]);
    });
}
funcao();

//ENUM
enum CardSuits {
    Clubs,
    Hearts,
    Spades,
    Diamonds,
    Golds
}

function funcaoEnum(){
    let x = 1;
    if(x === CardSuits.Clubs){
        alert('true');
    }else{
        alert('false');
    }
}
funcaoEnum();*/

//TYPES: tipo de estrutura de dados para os parâmetros da classe, função, etc. para fazer validação.
//INTERFACES: contratos para eu implementar as minhas classes

/*-- Criando a interface
interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void; //executa uma função para receber a altura do rugido.
}

//-- Extendendo a interface. A extensão criará uma propriedade com tipo boleano.
interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

//-- Vou criar uma constante, chamada animal, que utilize a tipagem de IAnimal
//-- Utilize o atalho Ctrl + Barra de espaço para mostrar a lista de propriedades que posso adicionar ao objeto.
const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => ('$(alturaEmDecibeis)dB')
}

animal.executarRugido('s');*/ //através da validação do tipo está me avisando que o parâmetro deve ser número.

/*-- Utilizando a interface IFelino.
const felino: IFelino = {
    nome: 'Onça',
    tipo: 'terrestre',
    visaoNoturna:true
}

interface ICanino extends IAnimal {
    porte: 'Pequeno' | 'Médio' | 'Grande'
}

type IDomestico = IFelino | ICanino;

const bichano: IDomestico = {
    nome: 'Lobo',
    tipo: 'terrestre',
    porte: 'Grande',
    visaoNoturna: false,
    
}*/

/*
Referências da aula: https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement
Aqui encontraremos todas as propriedades que este tipo fornece.d
Exemplo: 

*/
/*var input = document.getElementById('input') as HTMLInputElement;

var inputs = input;

inputs.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});*/

//211023 
/*interface IUsuario{
    id: string;
    email: string;
}
interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirection(usuario:IAdmin | IUsuario){

}*/
//11C Definir as variáveis
/*interface Cachorro{
    nome:string;
    idade:number;
    parque_favorito?:string; //ponto de interrogação torna o valor opcional
}

const meuCachorro: Cachorro = {
    nome:'bill',
    idade:3,
    parque_favorito:'bosque'
}*/

//Usando biblioteca externa
