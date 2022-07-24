/* 14. Faça uma função que será capaz de retornar a média aritmética dos valores de um
vetor de inteiros. Utilize a função “retornaSoma” para facilitar o seu desenvolvimento.
Ex:
let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
retornaMedia(valores) // Retornará 6 */

let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function retornaMedia(valores) {
    let media = 0;
    let soma = 0;

    for(let i = 0; i < valores.length; i++) {
        soma = soma + valores[i];
    }
        media = soma / valores.length;
    return media;
}

console.log(retornaMedia(valores));