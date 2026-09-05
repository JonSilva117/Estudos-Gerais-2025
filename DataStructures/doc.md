# Estruturas de Dados e Big O

Este diretório contém exemplos curtos em JavaScript para estudar estruturas de dados, arrays e análise de complexidade. O projeto não possui interface gráfica nem dependências externas: cada arquivo pode ser executado diretamente pelo Node.js.

## Executar a demonstração principal

Na raiz do repositório, execute:

```powershell
node src/index.js
```

O comando cria uma lista encadeada, uma pilha e uma fila, e imprime o resultado das operações. O script `npm start` aponta para o mesmo arquivo; se o PowerShell bloquear `npm.ps1`, use o comando `node` acima ou ajuste a política de execução do ambiente.

## Estruturas implementadas

### Lista encadeada

Implementação: `src/linked-list/main.js`.

Cada `Node` contém um `value` e uma referência `next` para o próximo nó. A classe `LinkedList` armazena `head` e `size`.

```js
const { LinkedList } = require('./src/linked-list/main');

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.remove(10);
console.log(list.find(20));
list.print(); // 5 -> 20
```

| Operação | Complexidade de tempo |
| --- | --- |
| `prepend` | O(1) |
| `append` | O(n), pois percorre até o último nó |
| `find` | O(n) |
| `remove` | O(n) no caso geral |

### Pilha

Implementação: `src/stack/main.js`. Uma pilha segue LIFO (*last in, first out*): o último valor inserido é o primeiro removido.

```js
const { Stack } = require('./src/stack/main');

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();       // 3
stack.peek();      // 2
stack.print();     // Stack (top -> bottom): 2, 1
```

`push`, `pop` e `peek` são O(1) amortizado/esperado ao usar o final do array.

### Fila

Implementação: `src/queue/main.js`. Uma fila segue FIFO (*first in, first out*): o primeiro valor inserido é o primeiro removido.

```js
const { Queue } = require('./src/queue/main');

const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.dequeue();   // A
queue.front();     // B
queue.print();     // Queue (front -> back): B, C
```

`enqueue` é O(1) amortizado. A implementação atual de `dequeue` usa `Array.prototype.shift()`, que é O(n) porque os itens restantes podem ser reposicionados.

## Arrays

Os exemplos em `src/arrays` mostram operações nativas:

```js
const strings = ['a', 'b', 'c', 'd'];
strings.push('e');             // adiciona ao fim
strings.pop();                 // remove do fim
strings.unshift('z');          // adiciona ao início
strings.splice(2, 0, 'alien'); // insere no índice 2
```

Em geral, acesso por índice, `push` e `pop` são O(1) amortizado; `unshift` e inserções no meio via `splice` são O(n).

## Big O: exemplos presentes

Os arquivos em `src/bigO` são exercícios independentes, executáveis um por vez, por exemplo:

```powershell
node src/bigO/Rules/RuleNumberFour.js
node src/bigO/Exercises/ExerciseThree.js
```

| Tema | Arquivos | Ideia principal |
| --- | --- | --- |
| Busca linear | `bigO/main.js`, `Rules/RuleNumberOne.js` | Percorrer a entrada até encontrar um item: O(n). |
| Descartar constantes | `Rules/RuleNumberTwo.js`, exercícios 1 e 2 | O(4 + 5n) simplifica para O(n). |
| Entradas distintas | `Rules/RuleNumberThree.js` | Dois loops independentes em entradas diferentes: O(n + m). |
| Termo dominante | `Rules/RuleNumberFour.js` | O(n + n²) simplifica para O(n²). |
| Pares de elementos | `Exercises/ExerciseThree.js` | Dois loops sobre a mesma entrada: O(n²). |
| Itens comuns | `Exercises/InterviwerExercise.js` | Loops aninhados: O(nm); `Map`/`Set`: O(n + m) com memória extra. |
| Two Sum | `Exercises/TwoSumsExercise.js` | Força bruta O(n²); `Map` reduz para O(n) e usa O(n) de espaço. |
| Espaço | `SpaceComplexity/*.js` | Distingue memória constante O(1) de memória proporcional à entrada O(n). |

## Pontos de estudo e limitações atuais

- `findNemo3` em `src/bigO/main.js` chama `indexOf` dentro de um loop e, no pior caso, é O(n²), apesar de comentários antigos sugerirem O(n).
- `isDuplicateWithSet` em `Exercises/IsDuplicateExercise.js` ainda não insere itens no `Set`; é um exercício incompleto e não detecta duplicatas corretamente.
- A versão simples de `twoSum` pode combinar um elemento com ele próprio. Para exigir dois índices distintos, o segundo loop deve começar em `i + 1`.
- Não há testes automatizados. O script `test` no `package.json` é apenas um placeholder que falha intencionalmente.

## Organização

```text
src/
  index.js                 # demonstração integrada de lista, pilha e fila
  linked-list/main.js      # LinkedList e Node
  stack/main.js            # Stack
  queue/main.js            # Queue
  arrays/                  # operações e exemplos com arrays
  bigO/                    # regras, exercícios e espaço de memória
package.json               # scripts Node.js
```
