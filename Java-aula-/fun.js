function verificarAprovacao(nota) {
    let resultado;
  
    if (nota >= 7) {
      resultado = "Aprovado";
    } else {
      resultado = "Reprovado";
    }
  
    return resultado;
  }
  
  
  // Testando a função
  console.log(verificarAprovacao(8)); // Aprovado
  console.log(verificarAprovacao(6)); // Reprovado
  console.log(verificarAprovacao(7)); // Aprovado
  