# Introdução ao MongoDB e Bancos de Dados NoSQL

- Professor: Diana Martine Matias Pontes
- https://www.linkedin.com/in/renanjpaula/
- https://github.com/RenanJPaula



**O que aprendi?**

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





