/*IMPORTAÇÃO DO SEQUELIZE */
const sequelize = require ('sequelize');

/*IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require ('../database/database');

/*
DEFINIÇÃO DA ESTRUTURA DA TABELA DE AUTOR 
PARAMETROS:
1- NOME DA TABELA
2- UM OU MAIS OBJETOS QUE VÃO REPRESENTAR OS CAMPOS, SEUS TIPOS E REGRAS DE PREENCHIMENTO
*/
const autor = connection.define(
    'tbl_autor',
    {
        nome_autor:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

//autor.sync({force:true});

module.exports = autor;