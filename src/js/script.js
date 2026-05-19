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

function classificarVinho(safra) {
    const ano = 2026;
    const idade = ano - safra

    if (idade <= 3) {
        return "Vinho jovem";
    }
    else if (idade <= 10) {
        return "Vinho amadurecido";
    }
    else {
        return "Vinho antigo";
    }
}

function exibirVinho(nome, safra, quant) {
  let classificacao = classificarVinho(safra);
  let baixo = estoqueBaixo(quant) ? "Sim" : "Não";
  let msg = "Nome: " + nome +
            "\nSafra: " + safra +
            "\nQuantidade: " + quant +
            "\nClassificação: " + classificacao +
            "\nEstoque baixo: " + baixo;
  alert(msg);
  console.log(msg);
}
let quantidade = Number(prompt("Quantos vinhos deseja cadastrar?"));
let totalEstoqueBaixo = 0;
let safraAntigaNome = "";
let safraAntigaAno = 9999;

let i = 1;
while (i <= quantidade) {
  let nome = validarTexto("Nome do vinho " + i + ":");
  let safra = validarNumero("Safra do vinho " + i + ":");
  let quant = validarNumero("Quantidade em estoque do vinho " + i + ":");

  exibirVinho(nome, safra, quant);

  if (estoqueBaixo(quant)) totalEstoqueBaixo++;
  if (safra < safraAntigaAno) {
    safraAntigaAno = safra;
    safraAntigaNome = nome;
  }

  i++;
}

alert("Total de vinhos cadastrados: " + quantidade +
      "\nVinhos com estoque baixo: " + totalEstoqueBaixo +
      "\nVinho com safra mais antiga: " + safraAntigaNome + " (" + safraAntigaAno + ")");
