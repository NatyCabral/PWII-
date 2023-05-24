//*IMPORTAÇÃO DO SEQUELIZE*/
const SEQUELIZE= require('sequelize');

/*

CRIAÇÃO DA CONEXÃO COM O BANCO DE DADOS
1- HOST DO BANCO
2- USUÁRIO
3-SENHA 
4- OBJETO JSON QUE DETERMINA AS CONFIGURAÇÕES DA CONEXÃO:
    4.1- HOST DO BANCO
    4.2-PORTA LÓGICA 
    4.3- DIALETO SQL 
    4.4- TIMEZONE -3
*/
const connection = new SEQUELIZE(
    'pw2_api_livraria',
    'root',
    '',
    {
        host:'localhost',
        port:'3306',
        dialect: 'mysql',
        timezone:'-03:00',
    },
);


module.exports = connection;