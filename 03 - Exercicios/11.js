/* 11. Faça uma função que receba os parâmetros de peso(kg) e altura(cm) e seja capaz de
retornar o IMC (índice de massa corporal).
Ex: calculaIMC(60, 173); // Retornará 20.05 */

function calculaImc(peso, altura) {
    let imc = (peso / (altura * altura))
    return parseFloat(imc).toFixed(2);
}

console.log(calculaImc(60, 1.73))