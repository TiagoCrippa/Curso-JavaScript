
const {gets, print} = require('./funcoes-auxiliares')

const numerosSorteados = [];


/*
    for (let i = 0; i < 5; i++) {
        const numeroSorteado = gets();
        if(numeroSorteado > maiorValor){
            maiorValor = numeroSorteado;
        }
    }
*/

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];

    if(numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);