/* 3. Crie uma função que receba um número entre 1 e 7 e quando chamada retorne o dia da
semana correspondente por extenso.
Ex: retornaDiaPorExtenso(1); // Retornará "Domingo" */

function retornaDiaSemanaPorExtenso(dia) {
    /*switch(dia) {
        case 1:
            "Domingo"
        break;
        case 2:
            "Segunda"
        break;
        case 3:
            "Terça"
        break;
        case 4:
            "Quarta"
        break;
        case 5:
            "Quinta"
        break;
        case 6:
            "Sexta"
        break;
        case 7:
            "Sábado"
        break;*/

        // Padrão Elseless

        if(dia==1) {
            return "Domingo"
        }
        if(dia==2) {
            return "Segunda"
        }
        if(dia==3) {
            return "Terça"
        }
        if(dia==4) {
            return "Quarta"
        }
        if(dia==5) {
            return "Quinta"
        }
        if(dia==6) {
            return "Sexta"
        }
        if(dia==7) {
            return "Sabado"
        }
    }

    console.log(retornaDiaSemanaPorExtenso(7));