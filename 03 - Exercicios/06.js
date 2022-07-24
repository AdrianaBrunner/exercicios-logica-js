/* 6. Escreva uma função que seja capaz de receber um valor booleano ou numérico e
retornar o oposto do mesmo. Mas se o parâmetro de entrada não for dos tipos acima a
função deverá retornar uma mensagem informando o erro de entrada.
Ex: retornaOposto(1000); // Retornará -1000
Ex: retornaOposto(true); // Retornará false
Ex: retornaOposto(“testando”); // Retornará “A função espera um parâmetro do tipo “bool” ou
“number”, porém o valor informado é do tipo “string”.*/

function retornaOposto(valor) {
    if (typeof valor === "number") {
        return -valor;
    }

    if (typeof valor === "boolean") {
        return !valor;
    }

    return `A  função espera um parâmetro do tipo “bool” ou “number”, porém o valor informado é do tipo ${typeof valor} `
    
}

console.log(retornaOposto(-1))