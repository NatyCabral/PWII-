const express = require('express');

const router = express.Router();

const categoriaModel = require ('../model/categoriaModel.js');

router.post('/categoria/inserir', (req, res)=>{
    let nome_categoria = req.body.nome_categoria; 

    categoriaModel.create(
        {nome_categoria}
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: `O categoria ${nome_categoria} foi adicionado com sucesso!`
            })
        }
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus: true,
            mensageStatus: `Não foi possivel adicionar o categoria ${nome_categoria}.`
        })
    })
})

router.get('/categoria/selecionar', (req,res)=>{
    (categoriaModel.findAll()).then(
        (filmes)=>{
            res.json(filmes);
        })

})

router.put('/categoria/alterar', (req,res)=>{
    let id = req.body.id;
    let nome_categoriacategoria = req.body.nome_categoria;
    
    categoriaModel.update(
        {nome_categoria},{where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`O nome do categoria foi alterado para ${nome_categoria} com sucesso!`
            })
        }   
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus:`Não foi possivel mudar o nome do categoria para ${nome_categoria}.`
        })
    })

})

router.delete('/categoria/excluir/:id', (req,res)=>{
    let id = req.params.id;
    console.log('ID: ' + id);
    
    categoriaModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`O categoria com ID: ${id} deletada com sucesso!`
            })
        }   
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus:`O categoria com ID: ${id}, não pode ser deletado`
        })
    })
})


module.exports = router;
