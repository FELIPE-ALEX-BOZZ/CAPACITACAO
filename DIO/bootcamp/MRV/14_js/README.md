# Variáveis e Tipos em JavaScript

Professor:

LinkedIn:

Github:



## Pré-requisitos

- VSCode ou editor preferido
- Se VSCode, extensão Live Server

## Observações

- Posso criar um arquivo index.js automaticamente, no vscode, referenciando-o na página index.html, por exemplo, e após referenciar, segurando ctrl e clicando na referencia feita o vscode criará o arquivo atuomaticamente.
- ![image-20211215210313597](C:\Users\Usuário\AppData\Roaming\Typora\typora-user-images\image-20211215210313597.png)
- ![image-20211215210339748](C:\Users\Usuário\AppData\Roaming\Typora\typora-user-images\image-20211215210339748.png)
- ![image-20211215210355165](C:\Users\Usuário\AppData\Roaming\Typora\typora-user-images\image-20211215210355165.png)
- #SHOWD+
- É boa prática referenciar o script.js no final do body.
- Declare as variáveis no topo do bloco do código. Quando o interpretador for interpretar o script, pela prática de host, ele pegará todas as variáveis e incluirá no topo.

## Passo a passo

****

1. Providencie os pré-requisitos.


## O que aprendi?

****

1. O que é hoisting? Na definição do JavaScript, “hoisting” é o processo de mover as definições das variáveis e funções para o topo do escopo onde eslas foram declaradas. O escopo pode ser dentro de uma função, local, ou mesmo global. O escopo é definido onde a variável foi declarada.

2. Hoje em dia é perigoso trabalhar com variáveis globais (var). Portanto, a boa prática é trabalhar com variáveis de bloco, com let. Trabalhar com variáveis globais podem também gerar problemas de segurança no código.

3. padrões  para declaração de constantes devem ser const + NOME MAIUSCULO (const CONSTANTE = valor). Não é possível declarar constantes anônimas. Não é possível redeclarar e nem reatribuir uma constante.

4. Existe uma nova possibilidade de atribuir valor a uma variável, chamada Interpolação (declarar uma string utilizando cráse para mesclar o texto com variáveis). ex.: let interpolacao = `atribuir ${variavel1} e a ${variavel2}`.

5. limpar console no navegador: console.clear()

6. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/escape

7. ```javascript
   let aspas = "\"";  ou aspas = `"`; //aspas = '"'
   ```

   