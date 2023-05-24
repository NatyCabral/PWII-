const express = require('express');

const router = express.Router();

const livroModel = require ('../model/livroModel.js');

router.post('/livro/inserir', (req, res)=>{
    let nome_livro = req.body.nome_livro; 

    livroModel.create(
        {nome_livro}
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: `O livro ${nome_livro} foi adicionado com sucesso!`
            })
        }
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus: true,
            mensageStatus: `Não foi possivel adicionar o livro ${nome_livro}.`
        })
    })
})

router.get('/livro/selecionar', (req,res)=>{
    (livroModel.findAll()).then(
        (filmes)=>{
            res.json(filmes);
        })

})

router.put('/livro/alterar', (req,res)=>{
    let id = req.body.id;
    let nome_livro = req.body.nome_livro;
    
    livroModel.update(
        {nome_livro},{where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`O nome do livro foi alterado para ${nome_livro} com sucesso!`
            })
        }   
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus:`Não foi possivel mudar o nome do livro para ${nome_livro}.`
        })
    })

})

router.delete('/livro/excluir/:id', (req,res)=>{
    let id = req.params.id;
    console.log('ID: ' + id);
    
    livroModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`O livro com ID: ${id} deletada com sucesso!`
            })
        }   
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus:`O livro com ID: ${id}, não pode ser deletado`
        })
    })
})


module.exports = router;
