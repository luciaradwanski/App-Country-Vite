const { default: axios } = require('axios');
const { Router } = require('express');
const { Country, Activity} = require('../db')
const { Op } = require('sequelize');
/* const { UPSERT } = require('sequelize/types/query-types'); */



const router = Router();


router.get('/', async (req,res)=>{
    
    const {name} = req.query
    
    try{
        if(name){
            //traigo datos de BD filtrado por name
            const allCountries = await Country.findAll({ 
                attributes: ['id', 'name','continent','image', 'population'],
                include: [Activity],
                where: {name: {[Op.iLike]: "%" + name + "%"}}
            });
            
            if(allCountries.length>0){
                res.status(201).send(allCountries)
            }  
            else{
                res.status(404).json('No existen datos del país ingresado')
            }

        }   else {    /* traigo datos de BD */   

            const allCountries = await Country.findAll({ 
                attributes: ['id', 'name','continent','image', 'population'],
                include: [Activity],
                order:[['name', 'ASC']] });
            
            if(allCountries.length>0){
                res.status(201).send(allCountries)
            }  
            else{
                res.status(404).json({message: 'No existen paises'})
            }  
        }
 
    }   catch(error) {
            res.status(404).json({message: 'No se pueden mostrar los paises'})
    }
})



router.get('/:id', async (req,res)=>{

    const { id } = req.params
    
    try{
        let detail = await Country.findByPk(id.toUpperCase(), { include: [Activity] });
        if(!detail) {
            res.status(404).json({message: 'País no encontrado'})
        } else {
            res.json(detail)
        }
    } catch(error){
        res.status(400).json({message: 'No existen datos del pais seleccionado'})
    }    
})






module.exports = router;
