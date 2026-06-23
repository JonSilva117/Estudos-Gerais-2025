# Space Complexity

Neste documento vamos falar sobre o espaço de memória utilizado por um algoritmo.

## Conceito principal

Ao tentar reduzir a complexidade de tempo, muitas vezes acabamos aumentando a complexidade de espaço.

- Esse comportamento é conhecido como **time-space trade-off**.
- Em outras palavras: otimizar um algoritmo para rodar mais rápido pode exigir mais memória.

## O que consome espaço de memória

Em geral, tudo que exige armazenamento durante a execução do algoritmo soma ao consumo de espaço:

- **Variáveis**
- **Chamadas de função** (não a definição, mas cada invocação da função)
- **Estruturas de dados** (listas, arrays, mapas, filas, pilhas, etc.)
- **Alocações adicionais** (buffers, objetos temporários, etc.)

## Observação

A análise de complexidade de espaço normalmente é feita em relação ao tamanho da entrada, assim como no caso da complexidade de tempo.
 