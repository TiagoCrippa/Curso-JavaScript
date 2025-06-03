/*
const peso = 110;
const altura = 1.74;

const imc = peso / (altura * altura);
console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log('Abaixo do Peso');
} else if (imc > 18.5 && imc < 25) {
    console.log('Peso Normal');
} else if (imc > 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc > 30 && imc < 40) {
    console.log('Obeso')
} else {
    console.log('Está obeso')
}
    */

function calcularImc (peso, altura) {
    return peso / (altura * altura);

}

function classificarImc (imc) {
    if (imc < 18.5) {
    return 'Abaixo do Peso';
} else if (imc > 18.5 && imc < 25) {
    return 'Peso Normal';
} else if (imc > 25 && imc < 30) {
    return 'Acima do peso';
} else if (imc > 30 && imc < 40) {
    return 'Obeso';
} else {
    return 'Está obeso';
}
}

function main() {
    const peso = 110;
    const altura = 1.74;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();