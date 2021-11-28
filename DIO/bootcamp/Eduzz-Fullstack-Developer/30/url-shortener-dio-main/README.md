# Introdução ao MongoDB e Bancos de Dados NoSQL

- Professor: completar
- https://www.linkedin.com/in/ completar
- https://github.com/ completar
- https://github.com/ completar



**O que aprendi?**



1 - npm init

2 - instalar as bibliotecas

a)



b) https://blog.geekhunter.com.br/eslint-typescript-tutorial/

```  
npm install --save-dev eslint@6 eslint-plugin-standard@4 eslint-plugin-promise@4 eslint-plugin-import@2 eslint-plugin-node@11 @typescript-eslint/eslint-plugin@2 eslint-config-standard-with-typescript
```



c)

https://www.npmjs.com/package/@hasezoey/typegoose

https://www.npmjs.com/package/@typescript-eslint/parser

https://palantir.github.io/tslint/usage/cli/

https://www.npmjs.com/package/@types/express

```
npm install -s @hasezoey/typegoose
npm install -s mongoose
npm install tslint typescript --save-dev
npm install --save @types/express
```



d)

Adicionar arquivos:

​	tsconfig.json

​	tslint.json

e) "build:watch": "tsc -w", em scripts package.json

- npm run build:watch para ativar a atualização automatica nas modificações do dist
- npm run dev para ativar a visao em tempo real do resultado da api

f) para testar

​	baixar o insomnia.rest:  https://insomnia.rest/download

​	como instalar: https://www.youtube.com/watch?v=2O8FHmHKMfM



























trocar um papo sobre rest e microserviços

vamos criar uma api rest com node + express + postgrees.

o microserviço tende a facilitar através do reuso.



bora usar:

 typescript + vscode + node + navegador

1 - npm init para criar os metadados

2 - ajustar as informações conforme o projeto

3 - yes

4 - um arquivo foi gerado: package.json

5 - npm run start - o teste reverlará um erro (você pode ver no console e editar a pasta)

6 - gerar um arquivo index.js: console.log('Deu"');

7 - Acrescentar a informação no package.json: 

`"scripts": {`

  `"test": "echo \"Error: no test specified\" && exit 1",`

  `"start": "node ./index.js"`

8 - Rodar novamente: npm run start (é provável que aparecerá Deu, no console)

9 - Instalar typescript: `npm install -g typescript`

10 - Para criar um typescript config: `tsc --init`

- Essas informações são essenciais e muito interessantes. Essas são as regras do typescript.

11 - Agora, vamos instalar dependências que farão a transpilação de typescript para javascript.

12 - Será necessário parametrizar o arquivo tsconfig.json (parametros que podem ser levados de um  projeto para o outro e alterados conforme as necessidades).

- Caso ocorram algumas indicações de problemas após as configs e não for detectado erro, abra e feche o vscode.

13 - Inverter o arquivo index.js para index.ts (arrastando para dentro da pasta @types e renomeando-o).

14 - alterar o main:  "main": "./dist/index.js", (no package.json)

15 - alterar também:  "start": "node ./"

16 - Para fazer a transpilação, vamos instalar uma biblioteca: `npm install --save-dev typescript`

- assim o projeto ficará apenas para ambiente de desenvolvimento.

- package-lock.json foi criado.

17 - Também necessário: `npm install --save-dev @types/node` para que tenhamos auto-complete e bibliotecas gerais do node.

18 - Após a instalação pode ser prudente sair e entrar novamente no vscode.

19 - em: package.json criar mais um comando, após start: `"build": "tsc -p ."`

20 - depois, no terminal: npm run build (comando para converter typescrip em js)

21 - Brinde! Criar um gitgonre para selecionar apenas os arquivos que serão upados para o git. crie um arquivo: .gitignore

- Para eu não salvar as pastas, escolho quais não serão salvas e digito no arquivo e depois salvo o arquivo. ex: 

  `./node_modules`

  `./dist`

22 - Depois de salvar, retiro ./ e confiro se as pastas estão escurecidas.

23 - Agora precisamos instalar o npm install --save express

- também instalaremos: npm install --save-dev @types/express

24 - sempre confira as dependências instaladas no arquivo: package.json.

25 - express é um gerenciador de rotas que nos permite receber e enviar informações via HTTP.

26 - instalar a biblioteca: npm install --save-dev ts-node-dev

27 - criação da pasta routes para dividir o problema em pequenas partes.

28 - para melhorar o status code: npm install --save http-status-codes









