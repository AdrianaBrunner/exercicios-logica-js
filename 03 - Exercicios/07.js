/* 7. Crie uma função que dado dois valores (passados como parâmetros) mostre no console
a soma, subtração, multiplicação e divisão desses valores.
Ex: imprimeOperacoesMatematicasBasicas(5, 4); // Imprimirá no console
5 + 4 = 9
5 - 4 = 1
5 x 4 = 20
5 / 4 = 1.25
 */

function imprimeOperacoesMatematicas (valor1, valor2) {
    console.log(parseFloat(valor1) + parseFloat(valor2));
    console.log(parseFloat(valor1) - parseFloat(valor2));
    console.log(parseFloat(valor1) * parseFloat(valor2));
    console.log(parseFloat(valor1) / parseFloat(valor2));
}

imprimeOperacoesMatematicas(5,"2.5");