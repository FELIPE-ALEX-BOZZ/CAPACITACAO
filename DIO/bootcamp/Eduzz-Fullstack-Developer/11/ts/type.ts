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

//TUPLE
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
funcaoEnum();
