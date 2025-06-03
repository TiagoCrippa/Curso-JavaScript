
class pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    descrever() {
         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

/*
const tiago = new pessoa('Tiago', 24);

const renan = new pessoa('Renan', 30);

console.log(tiago);
console.log(renan);
*/

function compararPessoas(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velha que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velha que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const tiago = new pessoa('Tiago', 24);
const renan = new pessoa('Renan', 30);

compararPessoas(tiago, renan);