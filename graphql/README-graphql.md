# API GraphQL

Esta API GraphQL expõe os mesmos serviços da API REST, permitindo registro, login, consulta de usuários e transferências, com autenticação JWT nas operações de transferência.

## Instalação de dependências

```bash
npm install express@4 apollo-server-express@3 graphql jsonwebtoken
```

## Como executar

1. Inicie a API GraphQL:
   ```bash
   node graphql/server.js
   ```
2. Playground disponível em: [http://localhost:4000/graphql](http://localhost:4000/graphql)

## Autenticação
- Realize o login para obter o token JWT.
- Para mutations de transferência, envie o token no header:
  ```json
  { "Authorization": "Bearer SEU_TOKEN_AQUI" }
  ```

## Exemplos de Queries e Mutations

### Registrar usuário
```graphql
mutation {
  register(username: "natalia", password: "123456", favorecidos: ["arthur"]) {
    username
    favorecidos
  }
}
```

### Login
```graphql
mutation {
  login(username: "natalia", password: "123456") {
    user { username favorecidos }
    token
  }
}
```

### Transferência (requer token JWT)
```graphql
mutation {
  transfer(from: "natalia", to: "arthur", amount: 100) {
    from
    to
    amount
    date
  }
}
```

### Consultar usuários
```graphql
query {
  users { username favorecidos }
}
```

### Consultar transferências (requer token JWT)
```graphql
query {
  transfers {
    from
    to
    amount
    date
  }
}
```
