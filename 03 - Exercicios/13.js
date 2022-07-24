/* 13. Faça uma função capaz de retornar a soma de valores de uma lista numérica.
Ex:
let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
retornaSoma(valores) // Retornará 66 */


let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function retornaSoma(valores) {
let soma = 0;

    for(let i = 0; i < valores.length; i++) {
        soma = soma + valores[i];
    }
    return soma
}

console.log(retornaSoma(valores))