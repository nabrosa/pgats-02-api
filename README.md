# API de Transferências

Esta API permite realizar operações de registro, login, consulta de usuários e transferências de valores entre usuários, com regras básicas de negócio. O objetivo é servir como base para estudos de testes e automação de APIs.

## Tecnologias
- Node.js
- Express
- Swagger (documentação)


## Instalação

1. Clone o repositório ou copie os arquivos para seu ambiente local.
2. Instale as dependências para REST e GraphQL:
  ```bash
  npm install express@4 swagger-ui-express apollo-server-express@3 graphql jsonwebtoken
  ```


## Como executar

- Para iniciar o servidor REST:
  ```bash
  node server.js
  ```
- Para iniciar o servidor GraphQL:
  ```bash
  node graphql/server.js
  ```
- Para importar o app em testes:
  ```js
  const app = require('./app');
  // ou para GraphQL
  const app = require('./graphql/app');
  ```
## API GraphQL

- Endpoint: `/graphql` (porta 4000 por padrão)
- Playground: acesse `/graphql` no navegador para explorar e testar queries e mutations.

Veja exemplos de queries e mutations no arquivo `graphql/README-graphql.md`.

## Endpoints

- `POST /register`: Registra novo usuário. Não permite duplicidade de username.
- `POST /login`: Realiza login. Username e senha obrigatórios.
- `GET /users`: Lista todos os usuários cadastrados.
- `POST /transfer`: Realiza transferência. Só permite valores acima de R$ 5.000,00 para favorecidos.
- `GET /transfers`: Lista todas as transferências realizadas.
- `GET /api-docs`: Documentação Swagger interativa.

## Regras de Negócio
- Login exige username e senha.
- Não é permitido registrar usuários duplicados.
- Transferências acima de R$ 5.000,00 só podem ser feitas para favorecidos.

## Documentação
Acesse `/api-docs` para visualizar e testar os endpoints via Swagger.

## Observações
- O banco de dados é em memória, os dados são perdidos ao reiniciar o servidor.
- Para testes automatizados, utilize o arquivo `app.js` sem o método `listen()`.
