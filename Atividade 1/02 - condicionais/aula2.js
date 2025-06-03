
const numero = 15;

const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('Número Inválido')
} else if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
}
