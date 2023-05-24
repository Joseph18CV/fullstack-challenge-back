# fullstack-challenge-back

O Full-Stack Challenge representa um desafio de criar uma aplicação full stack do 0 em 1 semana! Representando a ideia de um cliente que possui seu CRUD e que pode adicionar contatos que também possuem CRUD'S

Para a instalação abra um terminal e digite o seguinte comando: 
yarn
OU
npm install

Logo após é preciso criar as váriaveis do ambiente, crie um arquivo .env na raiz seguindo o padrão do .env.example

Com as váriaveis criadas agora é preciso executar as migrations utilize o seguinte comando no terminal:
yarn typeorm migration:run -- -d src/data-source.ts
OU
npm run typeorm migration:run -- -d src/data-source.ts

Agora que está tudo preparado basta executar o servidor com o comando:
yarn dev
OU
npm run dev

Link para imagem do diagrama: https://drive.google.com/file/d/1uxxgOjrmWzaEPioQ8KmVFmiJrU1OJSOG/view?usp=share_link
