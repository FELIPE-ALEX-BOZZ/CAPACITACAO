function verifPalindromo(string){
    if(!string) return;
    return string.split("").reverse().join("") === string;
}
console.log(verifPalindromo("ana"));