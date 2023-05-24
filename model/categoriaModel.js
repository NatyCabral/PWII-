/*IMPORTAÇÃO DO SEQUELIZE */
const sequelize = require('sequelize');

/*IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');

/*
DEFINIÇÃO DA ESTRUTURA DA TABELA DE CATEGORIAS 
PARAMETROS:
1- NOME DA TABELA
2- UM OU MAIS OBJETOS QUE VÃO REPRESENTAR OS CAMPOS, SEUS TIPOS E REGRAS DE PREENCHIMENTO
*/
const categoria = connection.define(
    'tbl_categoria',
    {
        nome_categoria:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

//categoria.sync({force:true});

module.exports = categoria;

//categoria.sync({force:true});

