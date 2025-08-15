# API de Transferências

Esta API permite realizar operações de registro, login, consulta de usuários e transferências de valores entre usuários, com regras básicas de negócio. O objetivo é servir como base para estudos de testes e automação de APIs.

## Tecnologias
- Node.js
- Express
- Swagger (documentação)

## Instalação

1. Clone o repositório ou copie os arquivos para seu ambiente local.
2. Instale as dependências:
   ```bash
   npm install express swagger-ui-express
   ```

## Como executar

- Para iniciar o servidor:
  ```bash
  node server.js
  ```
- Para importar o app em testes:
  ```js
  const app = require('./app');
  ```

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
