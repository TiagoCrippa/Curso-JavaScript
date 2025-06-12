const notas = [9,5,8];

let soma = 0

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
}

const media = soma/notas.length;
console.log(media);

if (media >= 7) {
    console.log('Aprovado')
} else if (media >= 5 && media < 7) {
    console.log('Recuperação');
} else {
    console.log('Reprovado')
}