function encontrarMenorNumero(arr) {
    let menorNumero = arr[0]; // Começamos com o primeiro número do array como o menor

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < menorNumero) {
            menorNumero = arr[i]; // Atualiza o menor número se encontrar um número menor
        }
    }

    return menorNumero;
}

// Exemplo de uso
let numeros = [15, 2, 88, 7, 43];
let resultado = encontrarMenorNumero(numeros);
console.log(`O menor número é: ${resultado}`);
