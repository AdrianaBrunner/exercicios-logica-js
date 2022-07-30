/* 18. Implemente um algoritmo simples de “mecanismo de busca”, isto é, uma função que irá
receber dois parâmetros: O primeiro será a palavra a ser pesquisada na lista, o segundo
uma lista de strings. Caso a palavra pesquisada seja encontrada, a função deverá retornar
true, do contrário retornará false.
Ex: buscaPalavras('r', ['rato', 'roeu', 'roupa', 'rei', 'roma']); // Retornará false
Ex: buscaPalavras('roma', ['rato', 'roeu', 'roupa', 'rei', 'roma']); // Retornará true */

let frase1 = ['rato', 'roeu', 'roupa', 'rei', 'roma']

function buscaPalavras(palavra, strings) {

    for (let i = 0; i < strings.length; i++) {
        if (strings[i] === palavra) {
            return true
        }
    }
    return false
}

//console.log(buscaPalavras("r", frase1));
console.log(buscaPalavras('roma', frase1));