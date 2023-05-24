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

--- Rotas ---

----- CLIENT -----

POST /client

- ENTRADA -
{
	"name": "your name",
	"email": "your email",
	"password": "your password",
	"telephone": "your phone"
}

- RETORNO -
{
	"id": 1,
	"name": "your name",
	"email": "your email",
	"telephone": "your phone",
	"createdAt": "date"
}
-------------
POST /login

- ENTRADA -
{
	"email": "your email",
	"password": "your password"
}
- RETORNO -
{
	"token": "aski32ik3k23lld..."
}
-------------
GET /client/id - NECESSÁRIO BEARER TOKEN

- RETORNO -
{
	"id": 1,
	"name": "name",
	"email": "email",
	"password": "$2a$10$3WwvQJSiEEJQCHlHiMOCA.rb3uppo8ewUyQk5iTX8V5CjLOgGVkkG",
	"telephone": "phone",
	"createdAt": "date",
	"contacts": []
}
-------------
PATCH /client/id - NECESSÁRIO BEARER TOKEN

- ENTRADA -
{
	"name": "name 2"
}
- RETORNO -
{
	"name": "name 2",
	"email": "email",
	"password": "$2a$10$TY5tsjIC97tLPWWLsBjrGO598r8VsvTuDgyytwW6RHusUBPQQE8D",
	"telephone": "phone"
}
-------------
DELETE /client/id - NECESSÁRIO BEARER TOKEN
- RETORNO -
204 No Content
-------------
