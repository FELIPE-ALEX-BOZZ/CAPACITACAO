function verifPalindromo(string){
    if(!string) return "String Inexistente!";
    return string.split("").reverse().join("") === string;
}
//console.log(verifPalindromo("ovo"));

//solução 2
function verifPalindromo2(string){
    if(!string) return "String Inexistente!";
    for(let i=0;i<string.length/2;i++){
        if(string[i]!== string[string.length -1 -i]){
            return false;
        }
        
    }return true;
}
console.log(verifPalindromo2("omo"));