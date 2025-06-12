 const {gets, print} = require('./func-auxiliares2');

 const valorSalarioBruto = gets();
 const adicionalDosBeneficios = gets();

 function calcularPorcentagem(salario, percentual){
    return salario * (percentual / 100);
 }

 function pegarPercentualComBaseNoSalario(salario) {
    if(salario >= 0 && salario <= 1100){
        return 5;
    } else if (salario > 1100 && salario < 2500){
        return 10;
    } else {
        return 15;
    }
 }

 const valorTransferir = valorSalarioBruto - (calcularPorcentagem(valorSalarioBruto,pegarPercentualComBaseNoSalario(valorSalarioBruto))) + adicionalDosBeneficios;

 print(valorTransferir);