# Task Manager API

## Descrição

Este projeto é uma API simples de gerenciamento de tarefas desenvolvida em Node.js. O principal objetivo é explorar as funcionalidades nativas do Node.js, sem o uso de bibliotecas externas, para entender melhor como construir aplicações com este ambiente de execução.

## Funcionalidades

- **Listar tarefas**: Recupera todas as tarefas existentes.
- **Criar tarefa**: Adiciona uma nova tarefa com título e descrição.
- **Obter tarefa por ID**: Recupera uma tarefa específica pelo seu ID.
- **Atualizar tarefa**: Modifica os dados de uma tarefa existente.
- **Deletar tarefa**: Remove uma tarefa específica pelo seu ID.

## Estrutura do Projeto

```
src/
├── database/
│   └── database.js          # Lógica de persistência de dados (simulada)
├── routes/
│   └── tasks.js             # Roteamento das requisições de tarefas
├── services/
│   └── taskService.js       # Lógica de manipulação de tarefas
└── server.js                # Configuração do servidor HTTP
```

## Tecnologias Utilizadas

- Node.js (sem bibliotecas externas)

## Como Executar

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd <nome-do-repositorio>
   ```

2. **Inicie o servidor**:
   ```bash
   node src/server.js
   ```

3. **Acesse a API**:
   O servidor será iniciado na porta `3333`. Você pode testar as rotas da API usando ferramentas como Postman ou cURL.

## Rotas da API

### `GET /task`
Retorna todas as tarefas.

### `POST /task`
Cria uma nova tarefa. O corpo da requisição deve conter um JSON com os campos `title` e `description`.

### `GET /task/:id`
Retorna uma tarefa específica pelo ID.

### `PUT /task/:id`
Atualiza uma tarefa existente. O corpo da requisição deve conter um JSON com os campos que você deseja atualizar.

### `DELETE /task/:id`
Deleta uma tarefa específica pelo ID.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. 

## Licença

Este projeto é de domínio público e pode ser utilizado por qualquer pessoa.

```

### Instruções

- Substitua `<url-do-repositorio>` e `<nome-do-repositorio>` pelos valores apropriados ao seu repositório.
- Você pode adicionar mais seções conforme necessário, como um guia de contribuição mais detalhado, informações sobre testes, ou outros aspectos específicos que você queira destacar.

Sinta-se à vontade para fazer ajustes conforme necessário! Se precisar de mais alguma coisa, é só avisar.