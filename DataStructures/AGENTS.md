# Contexto para agentes

## Escopo

Este diretório (`DataStructures`) é um módulo didático JavaScript/CommonJS dentro do repositório `Estudos-Gerais-2025`. Ele reúne exemplos pequenos e independentes de estruturas de dados, arrays e complexidade Big O.

## Como executar e validar

- Demonstração integrada: `node src/index.js`.
- Exemplos individuais: `node <caminho-do-arquivo>.js`.
- Não há dependências de runtime nem testes automatizados configurados.
- Em Windows, prefira `node src/index.js` se a política do PowerShell impedir a execução de `npm.ps1`.

## Arquitetura atual

- `src/index.js` importa e demonstra `LinkedList`, `Stack` e `Queue`.
- `src/linked-list/main.js`, `src/stack/main.js` e `src/queue/main.js` exportam as classes via `module.exports`.
- `src/arrays` e `src/bigO` são exemplos pedagógicos independentes; não devem ser importados automaticamente pelo ponto de entrada sem uma solicitação explícita.

## Convenções para mudanças

- Preserve CommonJS (`require` e `module.exports`) salvo solicitação explícita para migrar.
- Mantenha exemplos curtos, legíveis e comentados em português quando modificar ou criar material didático.
- Ao corrigir um exemplo de complexidade, atualize tanto o código quanto o comentário que o explica.
- Não altere arquivos não relacionados que já estejam modificados no worktree; trate-os como trabalho do usuário.
- Prefira adicionar testes Node nativos ou um framework somente se a tarefa pedir verificação automatizada.

## Questões conhecidas

- `findNemo3` tem pior caso O(n²) pelo uso de `indexOf` dentro do loop.
- `isDuplicateWithSet` está incompleto: falta adicionar cada item ao `Set`, e o limite do loop deve evitar acessar `array[array.length]`.
- A fila usa `shift()` em `dequeue`, portanto a remoção é O(n) nesta implementação baseada em array.
