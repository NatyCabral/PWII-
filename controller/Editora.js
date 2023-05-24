const express = require('express');

const router = express.Router();

const editoraModel = require ('../model/editoraModel.js');

router.post('/editora/inserir', (req, res)=>{
    let nome_editora = req.body.nome_editora; 

    editoraModel.create(
        {nome_editora}
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: `O editora ${nome_editora} foi adicionado com sucesso!`
            })
        }
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus: true,
            mensageStatus: `Não foi possivel adicionar o editora ${nome_editora}.`
        })
    })
})

router.get('/editora/selecionar', (req,res)=>{
    (editoraModel.findAll()).then(
        (filmes)=>{
            res.json(filmes);
        })

})

router.put('/editora/alterar', (req,res)=>{
    let id = req.body.id;
    let nome_editora = req.body.nome_editora;
    
    editoraModel.update(
        {nome_editora},{where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`O nome do editora foi alterado para ${nome_editora} com sucesso!`
            })
        }   
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus:`Não foi possivel mudar o nome do editora para ${nome_editora}.`
        })
    })

})

router.delete('/editora/excluir/:id', (req,res)=>{
    let id = req.params.id;
    console.log('ID: ' + id);
    
    editoraModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`O editora com ID: ${id} deletada com sucesso!`
            })
        }   
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus:`O editora com ID: ${id}, não pode ser deletado`
        })
    })
})


module.exports = router;
