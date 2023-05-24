const express = require('express');

const router = express.Router();

const autorModel = require ('../model/autorModel.js');

router.post('/autor/inserir', (req, res)=>{
    let nome_autor = req.body.nome_autor; 

    autorModel.create(
        {nome_autor}
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: `O autor ${nome_autor} foi adicionado com sucesso!`
            })
        }
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus: true,
            mensageStatus: `Não foi possivel adicionar o autor ${nome_autor}.`
        })
    })
})

router.get('/autor/selecionar', (req,res)=>{
    (autorModel.findAll()).then(
        (filmes)=>{
            res.json(filmes);
        })

})

router.put('/autor/alterar', (req,res)=>{
    let id = req.body.id;
    let nome_autor = req.body.nome_autor;
    
    autorModel.update(
        {nome_autor},{where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`O nome do autor foi alterado para ${nome_autor} com sucesso!`
            })
        }   
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus:`Não foi possivel mudar o nome do autor para ${nome_autor}.`
        })
    })

})

router.delete('/autor/excluir/:id', (req,res)=>{
    let id = req.params.id;
    console.log('ID: ' + id);
    
    autorModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`O autor com ID: ${id} deletada com sucesso!`
            })
        }   
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus:`O autor com ID: ${id}, não pode ser deletado`
        })
    })
})


module.exports = router;
