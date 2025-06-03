

function metodoPagamento(valorProduto, tipoPagamento) {
    if (tipoPagamento === 1) {
    const desconto = valorProduto * 0.1;

    const valorFinal = valorProduto - desconto;
    return ('Valor final a ser pago é: R$ ', valorFinal);

} else if (tipoPagamento === 2) {
    const desconto = valorProduto * 0.15;

    const valorFinal = valorProduto - desconto;
    return ('Valor final a ser pago é: R$ ', valorFinal);

} else if (tipoPagamento === 3) {

    return ('Valor final a ser pago é: R$ ', valorProduto);

} else {
    
    const juros = valorProduto * 0.1;

    const valorFinal = valorProduto + juros;
    return ('Valor final a ser pago é: R$ ', valorFinal);
} 
}

function main() {

    const valorProduto = 100;
    const tipoPagamento = 2;

    console.log(metodoPagamento(valorProduto, tipoPagamento));
}

main();