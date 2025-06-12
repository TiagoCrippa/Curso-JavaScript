const {gets, print} = require('./func-auxiliares');

const n = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < n; i++) {
    const numero = gets;
    if (numero % 2 === 0) {
        if (numero > maiorNumeroPar){
            maiorNumeroPar = numero;
        }
    }   else {
            if(menorNumeroImpar === 0) {
                menorNumeroImpar = numero;
            }
        }
}

print(menorNumeroImpar);