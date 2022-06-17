const mongoose = require('mongoose')
const { Schema } = mongoose

const zapatoSchema = new Schema({
    id: Number,
    marca: String,
    colores: Array,
    /* costos: {
        proveedor: String,
        mayoreo: String,
        menudeo: String
    },
    tamano: Array,
    tipo: Array, */
    tallas: Array,
    precio: Number,
    material: String
})

const Zapato = mongoose.model('Zapato', zapatoSchema)
module.exports = Zapato;