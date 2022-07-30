/* 12. Faça uma função capaz de receber um vetor de inteiros, percorrê-lo através de uma
estrutura de repetição e retornar o maior valor dessa lista.
Ex:
let listaQualquer = [10, -13, 55, 0, 1, 24, 132, -5000]
retornaMaiorValor(listaQualquer); // Retornará 132 */

let listaQualquer = [10, -13, 55, 0, 1, 24, 132, -5000];

function retornaMaiorValor(listaQualquer) {

let maior = -Infinity; // Se a lista for só de numero negativos, inicializar com 0 não adianta.
    for(let i = 0; i < listaQualquer.length; i++) {
        if(listaQualquer[i] > maior) {
            maior = listaQualquer[i];
        }
    }
    return maior;
}

console.log(retornaMaiorValor(listaQualquer))
