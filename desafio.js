function verificarFase() {
  const nome = document.getElementById("nome").value;
  const idade = parseInt(document.getElementById("idade").value);

  const resultado = document.getElementById("resultado");

  if (isNaN(idade) || idade < 0) {
    resultado.textContent = "Idade inválida";
    } else {
      var fase = "";
      if (idade <= 11) {
        fase = "Criança";
      } else if (idade >= 12 && idade <= 20) {
        fase = "Adolescente";
      } else if (idade >= 21 && idade <= 65) {
        fase = "Adulto";
      } else if (idade <= 65) {
        fase = "Idoso";
      }
  
      resultado.textContent = `${nome}, você é da faixa etária: ${fase}.`;
    }
  }