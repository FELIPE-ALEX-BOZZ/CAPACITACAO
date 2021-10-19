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
var a = [
    ['url', 123, 456],
    ['port', 789, 1012]
];
function funcao() {
    a.forEach(function (element) {
        console.log(element[0]);
    });
}
funcao();
//ENUM
var CardSuits;
(function (CardSuits) {
    CardSuits[CardSuits["Clubs"] = 0] = "Clubs";
    CardSuits[CardSuits["Hearts"] = 1] = "Hearts";
    CardSuits[CardSuits["Spades"] = 2] = "Spades";
    CardSuits[CardSuits["Diamonds"] = 3] = "Diamonds";
    CardSuits[CardSuits["Golds"] = 4] = "Golds";
})(CardSuits || (CardSuits = {}));
function funcaoEnum() {
    var x = 1;
    if (x === CardSuits.Clubs) {
        alert('true');
    }
    else {
        alert('false');
    }
}
funcaoEnum();
