const valorProduto = 100;

const pagamento = 0;

if (pagamento === 1) {
    const desconto = valorProduto * 0.1;
    console.log('Desconto de R$ ', desconto);

    const valorFinal = valorProduto - desconto;
    console.log('Valor final a ser pago é: R$ ', valorFinal);

} else if (pagamento === 2) {
    const desconto = valorProduto * 0.15;
    console.log('Desconto de R$ ', desconto);

    const valorFinal = valorProduto - desconto;
    console.log('Valor final a ser pago é: R$ ', valorFinal);

} else if (pagamento === 3) {

    console.log('Valor final a ser pago é: R$ ', valorProduto);

} else {
    
    const juros = valorProduto * 0.1;
    console.log('Juros de R$ ', juros);

    const valorFinal = valorProduto + juros;
    console.log('Valor final a ser pago é: R$ ', valorFinal);
} 