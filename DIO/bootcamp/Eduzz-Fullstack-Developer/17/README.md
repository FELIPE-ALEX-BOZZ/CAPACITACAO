# Trabalhando com Componentes em React

- Professor: Nathally Souza

- Linkedin: https://www.linkedin.com/in/nathsouza/?originalSubdomain=br

  


**Objetivo:**

- Aprender e testar React

**React**

Framework baseado em js que permitirá modularizar as aplicações.

Componentes modularizados facilita o trabalho e permite o reaproveitamento de código.

**passos:**

1. baixar o Node: Gerenciador de pacotes com bibliotecas Js.

2. Defina a pasta do projeto.

3. terminal (cmd): npx create-react-app react-dio (este último é o nome da aplicação que sempre deverá utilizar o padrão cammelCase) base: https://reactjs.org/docs/create-a-new-react-app.html

   1. Este comando criará a aplicação na pasta escolhida e criará as dependências dentro da aplicação que chamarão os pacotes necessários.

4. acesse a pasta criada: `cd react-dio` (por exemplo)

5. abra o editor de código: `code .` (por exemplo)

6. ![image-20211026192737375](C:\Users\Usuário\AppData\Roaming\Typora\typora-user-images\image-20211026192737375.png)

   1. node-modules: pasta que contém todas as dependências necessárias para rodar o React. Não necessariamente utilizaremos todas essas dependências.
      1. No vscode ela aparece em cinza, ou seja, ela está listada em gitgnore (contém a lista de arquivos que não serão upados para o GITHUB). Esta pasta não é carregada porque poderemos reconfirgurá-la com comando npm i (caso de alguém que importa seu projeto do github, por exemplo).

7. ![image-20211026193428576](C:\Users\Usuário\AppData\Roaming\Typora\typora-user-images\image-20211026193428576.png)

   1. A pasta public, inicialmente, possui o arquivo index.html (principal arquivo). Os outros podem até mesmo ser deletados no início do projeto. É no index que renderizaremos toda a aplicação. Portanto trabalharemos com conceito de single page application SPA.

8. ![image-20211026194642807](C:\Users\Usuário\AppData\Roaming\Typora\typora-user-images\image-20211026194642807.png)

   1. Toda a aplicação será renderizada na div root.

9. ![image-20211026194842712](C:\Users\Usuário\AppData\Roaming\Typora\typora-user-images\image-20211026194842712.png)

   1. Partiu limpeza de arquivos desnecessários, mantendo apenas index, na pasta public.

![](C:\Users\Usuário\AppData\Roaming\Typora\typora-user-images\image-20211026195453118.png)

1. Na pasta src teremos também arquivos dispensáveis para este projeto. Os principais são o index e app.js.
2. ![image-20211026195851456](C:\Users\Usuário\AppData\Roaming\Typora\typora-user-images\image-20211026195851456.png)
3. em index, marcados com "certo" temos os elementos indispensáveis.
4. ![image-20211026200122052](C:\Users\Usuário\AppData\Roaming\Typora\typora-user-images\image-20211026200122052.png)
5. ![image-20211026200414802](C:\Users\Usuário\AppData\Roaming\Typora\typora-user-images\image-20211026200414802.png)
6. ele renderizará conforme app
7. ![image-20211026200527983](C:\Users\Usuário\AppData\Roaming\Typora\typora-user-images\image-20211026200527983.png)
8. arquivo com componente funcional que retorna uma div com o conteúdo inicial.
9. ![image-20211026200818192](C:\Users\Usuário\AppData\Roaming\Typora\typora-user-images\image-20211026200818192.png)
10. para inicializar a visualização do resultado no navegador, abra o terminal e digite npm start para inicializar o servidor e rodar o projeto localmente. após o comando, aguarde alguns instantes. Se tudo estiver correto o navegador padrão será aberto e a página do projeto automaticamente carregada.
11. Você sabe o que é React fragment? Trata-se de uma div vazia (exemplo: <> conteúdo</>). Ela é utilizada para que possamos trabalhar com componentes irmãos.
12. *Irmãos* são elementos que estão no mesmo nível da árvore do DOM.
13. https://getbootstrap.com/docs/5.1/getting-started/introduction/
    1. podemos trabalhar com bootstrap em cdn, por exemplo: <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
14. próximo...>


​      

