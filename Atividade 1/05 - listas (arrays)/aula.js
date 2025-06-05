/*
const alunos = ['João', 'Tiago', 'Pedro'];

console.log(alunos);

//push adiciona um na lista
//pop remove o ultimo da lista
console.log(alunos.pop());

console.log(alunos);
------------------------------
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]
console.log(soma / 5);
-------------------------------------
const nome = 'Tiago Crippa';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}
*/

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media = soma/notas.length;

console.log(media);