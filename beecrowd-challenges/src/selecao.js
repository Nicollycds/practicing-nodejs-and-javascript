// Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

// Entrada
// Quatro números inteiros A, B, C e D.

// Saída
// Mostre a respectiva mensagem após a validação dos valores.

function verificarValores(input) {
  var [A, B, C, D] = input.split(' ').map(value => parseInt(value));

  if (B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 == 0) {
    return "Valores aceitos";
  } else {
    return "Valores nao aceitos";
  }
}

module.exports = verificarValores;