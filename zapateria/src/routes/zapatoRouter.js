const express = require('express');
const router = express.Router();

const Zapato = require('../models/zapato')

//obtener todos los zapatos
router.get('/', async(req, res) => {
    const zapatos = await Zapato.find();
    console.log(zapatos);
    res.json(zapatos)
});

//obtener por id un zapato
router.get('/:id', async(req, res) => {
    const _id = req.params.id
    const zapato = await Zapato.findOne({ _id: _id });
    console.log(zapato)
    res.json(zapato)
})

//insertar un zapato
router.post('/', async(req, res) => {
    const { id, marca, colores, tallas, precio, material } = req.body;
    const zapato = new Zapato({ id, marca, colores, tallas, precio, material });
    await zapato.save()
    res.json({ status: "Zapato guardado" })
});

//actualizar un zapato - se manda el objectID
router.put('/:Oid', async(req, res) => {
    const { id, marca, colores, tallas, precio, material } = req.body;
    const newZapato = { id, marca, colores, tallas, precio, material };
    console.log(newZapato)
    await Zapato.findByIdAndUpdate(req.params.Oid, newZapato, { useFindAndModify: false });
    res.json({ status: 'Zapato actualizado' })
});

//eliminar un zapato - se manda el objectID
router.delete('/:id', async(req, res) => {
    const id = req.params.id
    await Zapato.findByIdAndDelete({ _id: id })
    res.json({ status: 'Zapato eliminado' })
})

module.exports = router;