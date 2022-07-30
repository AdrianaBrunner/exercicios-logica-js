/* 16. Crie uma função que receba um texto pelo parâmetro e conte a quantidade de palavras
contidas no mesmo.
Ex: contaPalavras(“O rato roeu a roupa do rei”) // Retornará 7 */

let frase = "O rato roeu a roupa do rei"

function contaPalavras(frase) {
    let soma = 0;
    for(let i = 0; i < frase.length; i++) {
        if(frase[i] === " ") {
            soma += 1;
        }
    }
    return soma + 1   
}

console.log(contaPalavras(frase));