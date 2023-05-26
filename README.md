# fullstack-challenge-back

O Full-Stack Challenge representa um desafio de criar uma aplicação full stack do 0 em 1 semana! Representando a ideia de um cliente que possui seu CRUD e que pode adicionar contatos que também possuem CRUD'S

Para a instalação abra um terminal e digite o seguinte comando:
```bash
yarn
```
OU
```bash
npm install
```

Logo após é preciso criar as váriaveis do ambiente, crie um arquivo .env na raiz seguindo o padrão do .env.example

Com as váriaveis criadas agora é preciso executar as migrations utilize o seguinte comando no terminal:
```bash
yarn typeorm migration:run -- -d src/data-source.ts
```
OU
```bash
npm run typeorm migration:run -- -d src/data-source.ts
```

Agora que está tudo preparado basta executar o servidor com o comando:
```bash
yarn dev
```
OU
```bash
npm run dev
```

Link para imagem do diagrama: https://drive.google.com/file/d/1uxxgOjrmWzaEPioQ8KmVFmiJrU1OJSOG/view?usp=share_link

----------------------------------------------------------------------      Rotas --------------------------------------------------------------------------------

----- CLIENT -----

POST /client

- ENTRADA -
```json
{
	"name": "your name",
	"email": "your email",
	"password": "your password",
	"telephone": "your phone"
}
```

- RETORNO -
```json
{
	"id": 1,
	"name": "your name",
	"email": "your email",
	"telephone": "your phone",
	"createdAt": "date"
}
```
-------------
POST /login

- ENTRADA -
```json
{
	"email": "your email",
	"password": "your password"
}
```
- RETORNO -
```json
{
	"token": "aski32ik3k23lld..."
}
```
-------------
GET /client - NECESSÁRIO BEARER TOKEN

- RETORNO -
```json
{
	"id": 1,
	"name": "name",
	"email": "email",
	"password": "$2a$10$3WwvQJSiEEJQCHlHiMOCA.rb3uppo8ewUyQk5iTX8V5CjLOgGVkkG",
	"telephone": "phone",
	"createdAt": "date",
	"contacts": []
}
```
-------------
PATCH /client/id - NECESSÁRIO BEARER TOKEN

- ENTRADA -
```json
{
	"name": "name 2"
}
```
- RETORNO -
```json
{
	"name": "name 2",
	"email": "email",
	"password": "$2a$10$TY5tsjIC97tLPWWLsBjrGO598r8VsvTuDgyytwW6RHusUBPQQE8D",
	"telephone": "phone"
}
```
-------------
DELETE /client/id - NECESSÁRIO BEARER TOKEN

- RETORNO -
```json
204 No Content
```
-------------


----- CONTACT -----

POST /contact - NECESSÁRIO BEARER TOKEN

- ENTRADA -
```json
{
	"name": "your name",
	"email": "your email",
	"telephone": "your phone"
}
```

- RETORNO -
```json
{
	"id": 1,
	"name": "your name",
	"email": "your email",
	"telephone": "your phone",
	"createdAt": "date"
	"client": { "id": 1, "name...}
}
```
-------------
GET /contact - NECESSÁRIO BEARER TOKEN

- RETORNO -
```json
[
	{
		"id": 1,
		"name": "name1",
		"email": "email1",
		"telephone": "phone1",
		"createdAt": "date1"
	}
	{
		"id": 2,
		"name": "name2",
		"email": "email2",
		"telephone": "phone2",
		"createdAt": "date2"
	}
]
```
-------------
PATCH /contact/id - NECESSÁRIO BEARER TOKEN

- ENTRADA -
```json
{
	"name": "name 2"
}
```
- RETORNO -
```json
{
	"name": "name 2",
	"email": "email1",
	"password": "$2a$10$TY5tsjIC97tLPWWLsBjrGO598r8VsvTuDgyytwW6RHusUBPQQE8D",
	"telephone": "phone1"
}
```
-------------
DELETE /contact/id - NECESSÁRIO BEARER TOKEN

- RETORNO -
```json
204 No Content
```
-------------

Tecnologias e bibliotecas utilizadas:
- ZOD
- Express
- Node
- TypeScript
- JSONWEBTOKEN
- TypeORM
- JavaScript
--------------
Obrigado!

- <a href="https://www.linkedin.com/in/josephvriesman/" target="_blank">LinkedIn</a>
- <a href="https://github.com/Joseph18CV" target="_blank">GitHub</a>
- <a href="https://portfolio-joseph-one.vercel.app" target="_blank">Portfólio</a>
