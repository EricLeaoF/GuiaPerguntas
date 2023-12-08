# GuiaPerguntas

# Aplicação de Perguntas e Respostas

Este é um exemplo de aplicação simples de perguntas e respostas usando Node.js, Express, Sequelize (para interagir com o banco de dados) e EJS como view engine.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em seu sistema antes de prosseguir.

- [Node.js](https://nodejs.org/)

## Configuração do Banco de Dados

Antes de executar a aplicação, você precisa configurar o banco de dados. Certifique-se de ter um banco de dados MySQL em execução. As configurações de conexão estão no arquivo `database/database.js`. 

```javascript
// database/database.js

const Sequelize = require("sequelize");

const connection = new Sequelize('nome_do_banco', 'usuario', 'senha', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = connection;
```
## Executando a Aplicação

Após instalar as dependências e configurar o banco de dados, execute a aplicação com o seguinte comando:

node index.js
