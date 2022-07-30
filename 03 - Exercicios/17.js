/* 17. Crie uma função capaz de receber um caractere e uma string e retorne a quantidade de
vezes que este caractere aparece no texto informado.
Ex: contaCaracteres(“r”. “O rato roeu a roupa do rei de roma”); // Retornará 5 */

let frase = "O rato roeu a roupa do rei de roma";

function retornaR(letra, frase1) {
    let caractere = 0;
    for(let i = 0; i < frase1.length; i++) {
        if(frase1[i] == letra) {
            caractere += 1;
        }
    }
  return ('Quantidade de letras r na frase: ' + caractere)
 }

console.log(retornaR("r",frase))
