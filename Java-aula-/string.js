let soma = 0;

for (let i = 0; i < 10; i++) {
    let numero = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
    console.log(`Número gerado: ${numero}`);
    soma += numero; // Soma o número gerado à variável soma
}

console.log(`Soma de todos os números: ${soma}`);
