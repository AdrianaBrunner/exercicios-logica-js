/* 9. Crie uma função capaz de retornar um booleano após verificar se o número informado é par.
Ex: ehPar(2) // Retornará true
Ex: ehPar(15) // Retornará false*/

function verificaPar(valor) {
    if(valor%2 == 0) {
        return true;
    }
    return false;
}

console.log(verificaPar(2));

console.log(verificaPar(3));