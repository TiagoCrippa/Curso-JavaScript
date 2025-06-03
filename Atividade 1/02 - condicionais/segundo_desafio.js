
const valorGasolina = 6.66;
const valorEtanol = 5.79;
const kmPorLitro = 10;
const distanciaKm = 100;

const tipoCombustivel = 'Etanol';

if (tipoCombustivel == 'Gasolina') {
    custo = (distanciaKm / kmPorLitro) * valorGasolina;
    console.log('Valor gasto de gasolina na viagem R$', custo.toFixed(2));
} else {
    custo = (distanciaKm / kmPorLitro) * valorEtanol;
    console.log('Valor gasto de etanol na viagem R$', custo.toFixed(2));
}
