let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
    let numero = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
    console.log(`Número gerado: ${numero}`);
    
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);
 a