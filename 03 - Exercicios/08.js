/* 8. Crie uma função de potenciação que, assim como o método Math.Pow, deverá ser capaz
de receber dois parâmetros (base, expoente) e retornará a base elevada ao expoente.
Ex: calculaPotencia(5, 2); // Retornará 25 */

function calculaPotencia(base, expoente) {
    if(expoente==0) {
        return 1;
    }

    if(expoente==1) {
        return base;
    }

    let potencia = 1;

    for(i=0; i<expoente; i++) {
        potencia = potencia * base;
    }
    return potencia;
}

console.log(calculaPotencia(2,0));
console.log(calculaPotencia(5,0));
console.log(calculaPotencia(5,2));