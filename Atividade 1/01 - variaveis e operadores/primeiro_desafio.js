
const valorCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaKm = 100;

let custo = (distanciaKm / kmPorLitro) * valorCombustivel;

console.log('Valor gasto de combustivel na viagem R$', custo.toFixed(2));
