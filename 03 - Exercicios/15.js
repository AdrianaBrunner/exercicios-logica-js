/* 15. Faça uma biblioteca para calculos geométricos que conterá as seguintes funções:
calculaAreaQuadrado(lado);
calculaAreaRetangulo(base, altura);
calculaAreaTriangulo(base, altura);
calculaComprimentoCircunferencia(raio);
calculaAreaCircunferencia(raio); */

function calculaAreaQuadrado(lado) {
    let areaQuadrado = lado * lado;
    return areaQuadrado;
}

function calculaAreaRetangulo(base, altura) {
    let areaRetangulo = base * altura;
    return areaRetangulo;
}

function calculaAreaTriangulo(base, altura) {
    let areaTriangulo = (base * altura) / 2;
    return areaTriangulo;
}

function calculaComprimentoCircunferencia(raio) {
    let comprimentoCircunferencia = 2 * Math.PI * raio;
    return parseFloat((comprimentoCircunferencia).toFixed(2));
}

function calculaAreaCircunferencia(raio) {
    let areaCircunferencia = Math.PI * raio * raio;
    return parseFloat((areaCircunferencia).toFixed(2));
}

console.log(calculaAreaQuadrado(2));
console.log(calculaAreaRetangulo(3, 2));
console.log(calculaAreaTriangulo(3, 2));
console.log(calculaComprimentoCircunferencia(5));
console.log(calculaAreaCircunferencia(5));