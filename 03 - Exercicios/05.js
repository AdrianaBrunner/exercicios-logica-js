/* 5. Crie uma função que ao receber dois números irá retornar um booleano informando se o
primeiro é maior ou igual ao segundo.
Ex: verificaMaiorOuIgual(1, 0); // Retornará true */

function verificaMaiorouIgual(valor1, valor2) {
    if (valor1 >= valor2) {
        return true;
    }

    return false;
}

console.log(verificaMaiorouIgual(1,0));
console.log(verificaMaiorouIgual(0,1));
console.log(verificaMaiorouIgual(0,0));