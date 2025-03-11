let frase = "Ola mundo";
let vogais = ['a', 'e', 'i', 'o', 'u'];
let resultado = [];

for (let i = 0; i < frase.length; i++) {
    let letra = frase[i].toLowerCase(); // Converte a letra para minúscula
    if (vogais.includes(letra)) {
        resultado.push(letra); // Adiciona a vogal ao array resultado
    }
}

console.log(resultado); // Resultado: ['o', 'a', 'u', 'o']

