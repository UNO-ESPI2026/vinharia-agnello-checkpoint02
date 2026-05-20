# Vinharia Agnello – Sistema de Gerenciamento de Vinhos

## Descrição

Evolução do sistema de cadastro de vinhos da Vinharia Agnello, agora com validação de entradas, classificação automática por safra e relatório final consolidado. O sistema foi desenvolvido em JavaScript puro, rodando no console e via `prompt()`/`alert()`.

Nesta versão foram implementados:

- **Validação de entradas** — funções dedicadas impedem que o usuário envie campos vazios ou valores não numéricos
- **Classificação por safra** — o sistema calcula automaticamente se o vinho é jovem (até 3 anos), amadurecido (até 10 anos) ou antigo (mais de 10 anos)
- **Alerta de estoque baixo** — vinhos com menos de 5 unidades são sinalizados automaticamente
- **Relatório final** — ao término do cadastro, exibe o total de vinhos, quantos estão com estoque baixo e qual possui a safra mais antiga
- **Funções reutilizáveis** — sem repetição de código; cada responsabilidade está isolada em sua própria função
- **Escopo respeitado** — variáveis locais declaradas dentro das funções, sem vazamento para o escopo global

---

## Objetivo da Atividade

Aprofundar os fundamentos do JavaScript com:

- Funções e reutilização de código
- Escopo de variáveis
- Laços de repetição e iteração (`while`)

---

## Funcionalidades

- Cadastro de múltiplos vinhos em sequência
- Coleta das seguintes informações por vinho:
  - Nome
  - Safra (ano)
  - Quantidade em estoque
- Classificação automática com base na idade da safra:
  - **Jovem** — até 3 anos
  - **Amadurecido** — entre 4 e 10 anos
  - **Antigo** — mais de 10 anos
- Sinalização de estoque baixo (menos de 5 unidades)
- Relatório final com:
  - Total de vinhos cadastrados
  - Total de vinhos com estoque baixo
  - Vinho com a safra mais antiga

---

## Regras Técnicas

- Sistema funciona inteiramente via `prompt()` e `alert()`
- Nenhum array ou objeto foi utilizado — todas as informações são armazenadas em variáveis individuais
- Funções obrigatórias implementadas:
  - `validarTexto()` — valida entradas de texto
  - `validarNumero()` — valida entradas numéricas
  - `estoqueBaixo()` — verifica se a quantidade está abaixo de 5
  - `classificarVinho()` — classifica o vinho pela safra
  - `exibirVinho()` — exibe os dados no console e via alert


---

## Integrantes do Grupo

- Bruce Li Yan Ting
- Giovanna Andrade Parejas
- Laura Cardin Mirili

---

## Acesse o Projeto

GitHub Pages:
https://uno-espi2026.github.io/vinharia-agnello-checkpoint02/

Repositório GitHub:
https://github.com/UNO-ESPI2026/vinharia-agnello-checkpoint02
