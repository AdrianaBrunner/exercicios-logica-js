/*1. Elabore uma função "saudação" que ao ser chamada seja capaz de retornar uma
saudação, concatenada com um argumento do tipo string e ponto de exclamação no final.
Ex: saudacao(“Maria”); // Retornará “Olá Maria!*/

function retornaSaudacao(nome) {
    return `Olá, ${nome}`;
}

console.log(retornaSaudacao("Maria"));