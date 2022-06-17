var marcas = ["Nike", "Adidas", "Converse", "Jordan", "Court", "Pirma", "New Balance", "Skechers", "Panam", "Puma", "Vans",
    "Timberland", "Levis", "Gucci", "Reebok", "Umbro", "Lotto", "Under Armour", "Lacoste", "Kappa"
];
var colores = ["negro", "blanco", "azul", "rojo", "verde", "amarillo", "rosa", "miel", "gris", "cafe", "naranja", "morado",
    "tinto", "plata", "dorado", "oxford", "beige", "indigo", "olivo", "caqui"
];
var costos1 = ["50", "75", "100", "125", "150", "175", "200", "225", "250", "275"];
var costos2 = ["300", "350", "400", "450", "500", "550", "600", "650", "700", "750"];
var costos3 = ["800", "850", "900", "950", "1000", "1100", "1200", "1300", "1400", "1500"];
var tamanos = ["chico", "mediano", "grande", ""];
var tipos = ["sport", "casual", "sandalia", "huarache", "bota", "low", "mid", "high", "tenis", "zapato", ""];
var tallas = ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"];
var materiales = ["cuero", "vinipiel", "tela", "plastico", "reciclado", "caucho", "lona", "sintetico", "madera", "corcho"];

for (i = 0; i < 10; i++) {

    var tallasV = tallas;
    var a, b, c;
    for (a = tallasV.length; a; a--) {
        b = Math.floor(Math.random() * a);
        c = tallasV[a - 1];
        tallasV[a - 1] = tallasV[b];
        tallasV[b] = c;
    }

    db.zapatos.insert({
        //insercion de id
        id: (i + 1),
        //insercion de marca
        marca: marcas[Math.floor(Math.random() * marcas.length)],
        //insercion de calores
        colores: [colores[Math.floor(Math.random() * colores.length)],
            colores[Math.floor(Math.random() * colores.length)],
            colores[Math.floor(Math.random() * colores.length)],
            colores[Math.floor(Math.random() * colores.length)],
            colores[Math.floor(Math.random() * colores.length)]
        ],
        //insercion de costos
        /* costos: {
            proveedor: costos1[Math.floor(Math.random() * costos1.length)],
            mayoreo: costos2[Math.floor(Math.random() * costos2.length)],
            menudeo: costos3[Math.floor(Math.random() * costos3.length)]
        }, */
        //insercion de tamaño
        /* tamano: [tamanos[Math.floor(Math.random() * tamanos.length)],
            tamanos[Math.floor(Math.random() * tamanos.length)],
            tamanos[Math.floor(Math.random() * tamanos.length)]
        ], */
        //insercion de tipo
        /* tipo: [tipos[Math.floor(Math.random() * tipos.length)],
            tipos[Math.floor(Math.random() * tipos.length)],
            tipos[Math.floor(Math.random() * tipos.length)]
        ], */
        //insercion de talla
        tallas: tallasV,
        //insercion de precio
        precio: Math.floor(Math.random() * (2000 - 100) + 100),
        //insercion de material
        material: materiales[Math.floor(Math.random() * materiales.length)]
    });
}