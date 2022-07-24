/* 10. Agora, utilizando a função feita acima, faça uma outra função capaz de encontrar todos
os pares entre dois números informados.
Ex: retornaParesEntreValores(1, 10); // Retornará 2, 4, 6, 8
*/

function retornaParesEntreValores(valor1, valor2) {
    let listaPares = [];

    for(let i=valor1+1; i<valor2; i++) {
        if(i%2==0) {
            listaPares.push(i);
        }
    }

    return listaPares
}

console.log(retornaParesEntreValores(1,10))