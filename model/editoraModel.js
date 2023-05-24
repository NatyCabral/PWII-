/*IMPORTAÇÃO DO SEQUELIZE */
const sequelize = require('sequelize');

/*IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');

/*
DEFINIÇÃO DA ESTRUTURA DA TABELA DE EDITORA 
PARAMETROS:
1- NOME DA TABELA
2- UM OU MAIS OBJETOS QUE VÃO REPRESENTAR OS CAMPOS, SEUS TIPOS E REGRAS DE PREENCHIMENTO
*/
cconst editora = connection.define(
    'tbl_editora',
    {
        nome_editora:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

//editora.sync({force:true});

module.exports = editora;

//editora.sync({force:true});