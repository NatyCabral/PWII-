/*IMPORTAÇÃO DO SEQUELIZE */
const sequelize = require('sequelize');

/*IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');

/*
DEFINIÇÃO DA ESTRUTURA DA TABELA DE LIVRO 
PARAMETROS:
1- NOME DA TABELA
2- UM OU MAIS OBJETOS QUE VÃO REPRESENTAR OS CAMPOS, SEUS TIPOS E REGRAS DE PREENCHIMENTO
*/
cconst livro = connection.define(
    'tbl_livro',
    {
        nome_livro:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

//livro.sync({force:true});

module.exports = livro;

//livro.sync({force:true});