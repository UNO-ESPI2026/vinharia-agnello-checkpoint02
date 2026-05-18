function validarTexto(mensagem) {
  let valor = prompt(mensagem);

  while (valor === null || valor.trim() === "") {
    alert("Entrada inválida. Digite um valor válido.");
    valor = prompt(mensagem);
  }
  
  return valor.trim();
}

function validarNumero(mensagem) {
  let valor = Number(prompt(mensagem));

  while (isNaN(valor) || valor < 0) {
    alert("Entrada inválida. Digite um número válido.");
    valor = Number(prompt(mensagem));
  }

  return valor;
}

function estoqueBaixo(quantidade) {
    return quantidade < 5;
}