
class carro {

    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGastoDeViagem(distanciaKm, preco) {
        return (distanciaKm * this.gastoMedio) * preco;
    }

}

const ferrari = new carro('Fiat','vermelho', 1/12);
console.log('O gasto da Viagem com o Fiat foi de R$',ferrari.calcularGastoDeViagem(70,5));

const palio = new carro ('Fiat', 'preto', 1/10);
console.log('O gasto da Viagem com o palio foi de R$', palio.calcularGastoDeViagem(70,5));