/* 2. Faça uma função capaz de receber um inteiro com a idade de uma pessoa em anos e
faça a conversão dessa mesma idade para dias.
Ex: converteIdadeParaDias(20); // Retornará 7305*/

function converteIdadeParaDias (idade) {
    let anosBissextos = idade/4
    return idade * 365 + anosBissextos;
}

console.log(converteIdadeParaDias(20));