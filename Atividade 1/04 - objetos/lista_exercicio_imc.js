
class pessoa {

    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
       const imc = this.calcularImc();

       if(imc < 18.5) {
        return 'Abaixo do peso';
       } else if (imc > 18.5 && imc < 25) {
        return 'Peso normal';
       } else if (imc > 25 && imc < 30) {
        return 'Acima do peso';
       } else if (imc > 30 && imc < 40) {
        return 'Obeso';
       } else {
        return 'Está obeso';
       }
    }

}

const tiago = new pessoa('Tiago', 74, 1.73);
console.log(tiago.classificarImc());
