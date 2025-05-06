// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

function pegarPeso(peso) {
  return prompt("Digite seu Peso:")
}

function pegarAltura(altura) {
  return prompt("Digite sua Altura:")
}

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  // TODO: implementar função
  calcularIMC(peso / (altura * altura))
  return (calcularIMC)
}

if (calcularIMC < 18.5) {
  return ("Abaixo do peso")
}
else if (calcularIMC >= 18.5) {
  return ("Peso Normal")
}
else if (calcularIMC <= 24.9) {
  return ("Peso Normal")
}
else if (calcularIMC >= 25) {
  return ("Sobrepeso")
}
else if (calcularIMC <= 29.9) {
  return ("Sobrepeso")
}
else if (calcularIMC >= 30) {
  return ("Obesidade")
}
else if (calcularIMC === NaN) {
  return ("Erro")
}



// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };