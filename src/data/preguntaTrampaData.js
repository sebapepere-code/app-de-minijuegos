export const preguntaTrampaSituations = [
    {
        id: 'sit_1', text: 'Estás perdido en un desierto abrasador.',
        objects: [
            { id: 'o1_1', text: 'Cantimplora' }, // Útil
            { id: 'o1_2', text: 'Encendedor' }, // Útil
            { id: 'o1_3', text: 'Bolsa plástica', explanation: 'Con ella se puede capturar la transpiración de plantas o crear un destilador solar improvisado.' }, // Dudoso
            { id: 'o1_4', text: 'Espejo pequeño', explanation: 'Sirve para reflejar el sol y hacer señales de rescate a lo lejos.' }, // Dudoso
            { id: 'o1_5', text: 'Revista vieja' }, // Dudoso
            { id: 'o1_6', text: 'Zapatos de invierno' }, // Dudoso
            { id: 'o1_7', text: 'Reloj analógico', explanation: 'Si usas las manecillas junto con la posición del sol, funciona como una brújula perfecta.' }, // Dudoso
            { id: 'o1_8', text: 'Botella vacía' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i1_1', text: 'Termómetro de mercurio', isImpostor: true },
            { id: 'i1_2', text: 'Botas de goma', isImpostor: true }
        ]
    },
    {
        id: 'sit_2', text: 'Estás atrapado en una isla desierta.',
        objects: [
            { id: 'o2_1', text: 'Machete' }, // Útil
            { id: 'o2_2', text: 'Botiquín' }, // Útil
            { id: 'o2_3', text: 'Cinta adhesiva', explanation: 'Permite reparar hojas, hacer vendajes impermeables o incluso armar refugios temporales.' }, // Dudoso
            { id: 'o2_4', text: 'Lupa pequeña', explanation: 'Usando la luz del sol, puedes encender fuego rápidamente sin ningún otro recurso.' }, // Dudoso
            { id: 'o2_5', text: 'Bolsa plástica' }, // Dudoso
            { id: 'o2_6', text: 'Camisa de seda' }, // Dudoso
            { id: 'o2_7', text: 'Espejo pequeño' }, // Dudoso
            { id: 'o2_8', text: 'Reloj de pared' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i2_1', text: 'Un paraguas roto', isImpostor: true },
            { id: 'i2_2', text: 'Auriculares con cable', isImpostor: true }
        ]
    },
    {
        id: 'sit_3', text: 'Estás perdido en una densa jungla.',
        objects: [
            { id: 'o3_1', text: 'Machete' }, // Útil
            { id: 'o3_2', text: 'Cuerda' }, // Útil
            { id: 'o3_3', text: 'Revista de moda' }, // Dudoso
            { id: 'o3_4', text: 'Perfume fuerte', explanation: 'El alcohol del perfume ahuyenta a algunos insectos y puede usarse para iniciar fuego.' }, // Dudoso
            { id: 'o3_5', text: 'Espejo pequeño' }, // Dudoso
            { id: 'o3_6', text: 'Lápiz labial', explanation: 'Puede usarse para marcar árboles gruesos y no perderse al caminar en círculos.' }, // Dudoso
            { id: 'o3_7', text: 'Botella vacía' }, // Dudoso
            { id: 'o3_8', text: 'Gafas de lectura' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i3_1', text: 'Raqueta de bádminton', isImpostor: true },
            { id: 'i3_2', text: 'Desodorante en aerosol', isImpostor: true }
        ]
    },
    {
        id: 'sit_4', text: 'Estás atrapado en una montaña nevada.',
        objects: [
            { id: 'o4_1', text: 'Abrigo térmico' }, // Útil
            { id: 'o4_2', text: 'Piolet' }, // Útil
            { id: 'o4_3', text: 'Bolsa de basura negra', explanation: 'Atrae la poca luz solar derritiendo la nieve y también sirve como poncho impermeable.' }, // Dudoso
            { id: 'o4_4', text: 'Cinta adhesiva' }, // Dudoso
            { id: 'o4_5', text: 'Espejo pequeño' }, // Dudoso
            { id: 'o4_6', text: 'Revista' }, // Dudoso
            { id: 'o4_7', text: 'Gafas de sol', explanation: 'Evitan la oftalmia de la nieve (ceguera temporal por los reflejos extremos del sol).' }, // Dudoso
            { id: 'o4_8', text: 'Zapatillas de lona' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i4_1', text: 'Traje de neopreno', isImpostor: true },
            { id: 'i4_2', text: 'Bolsa de hielo', isImpostor: true }
        ]
    },
    {
        id: 'sit_5', text: 'Estás encerrado en un edificio abandonado.',
        objects: [
            { id: 'o5_1', text: 'Linterna' }, // Útil
            { id: 'o5_2', text: 'Barra de hierro' }, // Útil
            { id: 'o5_3', text: 'Tiza', explanation: 'Los pasillos son laberintos. Marcar puertas previene que camines en círculos.' }, // Dudoso
            { id: 'o5_4', text: 'Reloj de bolsillo' }, // Dudoso
            { id: 'o5_5', text: 'Espejo pequeño', explanation: 'Te permite espiar esquinas doblando visualmente los pasillos sin arriesgar el cuerpo.' }, // Dudoso
            { id: 'o5_6', text: 'Botella vacía' }, // Dudoso
            { id: 'o5_7', text: 'Zapatos formales' }, // Dudoso
            { id: 'o5_8', text: 'Camisa vieja' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i5_1', text: 'Controles de consola', isImpostor: true },
            { id: 'i5_2', text: 'Reloj despertador', isImpostor: true }
        ]
    },
    {
        id: 'sit_6', text: 'Estás perdido a la deriva en el mar.',
        objects: [
            { id: 'o6_1', text: 'Balsa inflable' }, // Útil
            { id: 'o6_2', text: 'Bengalas' }, // Útil
            { id: 'o6_3', text: 'Bolsa plástica', explanation: 'Puede usarse para atrapar agua de lluvia purísima y guardarla para consumo lento.' }, // Dudoso
            { id: 'o6_4', text: 'Espejo pequeño', explanation: 'Mandar destellos pasivos a un barco o avión lejano sin gastar bengalas.' }, // Dudoso
            { id: 'o6_5', text: 'Zapatos pesados' }, // Dudoso
            { id: 'o6_6', text: 'Revista' }, // Dudoso
            { id: 'o6_7', text: 'Reloj resistente al agua' }, // Dudoso
            { id: 'o6_8', text: 'Gafas' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i6_1', text: 'Ancla pequeña', isImpostor: true },
            { id: 'i6_2', text: 'Flotador de flamenco', isImpostor: true }
        ]
    },
    {
        id: 'sit_7', text: 'Ocurrió un apocalipsis zombie.',
        objects: [
            { id: 'o7_1', text: 'Bate de béisbol' }, // Útil
            { id: 'o7_2', text: 'Linterna' }, // Útil
            { id: 'o7_3', text: 'Cinta adhesiva', explanation: 'Envolverla alrededor de tus antebrazos sirve como una armadura contra mordidas humanas.' }, // Dudoso
            { id: 'o7_4', text: 'Revista gruesa', explanation: 'Pegadas al cuerpo debajo de la ropa también detienen cualquier mordida sorpresa.' }, // Dudoso
            { id: 'o7_5', text: 'Botella vacía' }, // Dudoso
            { id: 'o7_6', text: 'Espejo pequeño' }, // Dudoso
            { id: 'o7_7', text: 'Zapatos con luces' }, // Dudoso
            { id: 'o7_8', text: 'Perfume' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i7_1', text: 'Micrófono de karaoke', isImpostor: true },
            { id: 'i7_2', text: 'Calculadora científica', isImpostor: true }
        ]
    },
    {
        id: 'sit_8', text: 'Tu avión se estrelló en un bosque.',
        objects: [
            { id: 'o8_1', text: 'Hacha de emergencia' }, // Útil
            { id: 'o8_2', text: 'Mantas térmicas' }, // Útil
            { id: 'o8_3', text: 'Revista de vuelo', explanation: 'Las páginas gruesas de papel son perfectas para iniciar fuego incluso húmedas.' }, // Dudoso
            { id: 'o8_4', text: 'Lápiz labial' }, // Dudoso
            { id: 'o8_5', text: 'Bolsa plástica' }, // Dudoso
            { id: 'o8_6', text: 'Zapatos de tacón' }, // Dudoso
            { id: 'o8_7', text: 'Cinta adhesiva' }, // Dudoso
            { id: 'o8_8', text: 'Botella vacía de licor' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i8_1', text: 'Bandeja de plástico duro', isImpostor: true },
            { id: 'i8_2', text: 'Cinturón de seguridad suelto', isImpostor: true }
        ]
    },
    {
        id: 'sit_9', text: 'Estás atrapado en un ascensor.',
        objects: [
            { id: 'o9_1', text: 'Teléfono móvil' }, // Útil
            { id: 'o9_2', text: 'Multiherramienta' }, // Útil
            { id: 'o9_3', text: 'Clip de pelo', explanation: 'Se puede adaptar para forzar la compuerta interior superior o el panel de rescate.' }, // Dudoso
            { id: 'o9_4', text: 'Zapatos de cuero' }, // Dudoso
            { id: 'o9_5', text: 'Espejo pequeño' }, // Dudoso
            { id: 'o9_6', text: 'Gafas de lectura' }, // Dudoso
            { id: 'o9_7', text: 'Reloj' }, // Dudoso
            { id: 'o9_8', text: 'Botella vacía' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i9_1', text: 'Paracaídas portátil', isImpostor: true },
            { id: 'i9_2', text: 'Zapatos de tap', isImpostor: true }
        ]
    },
    {
        id: 'sit_10', text: 'Colapsó el suelo de un edificio en ruinas sobre ti.',
        objects: [
            { id: 'o10_1', text: 'Linterna fuerte' }, // Útil
            { id: 'o10_2', text: 'Raciones de comida' }, // Útil
            { id: 'o10_3', text: 'Camisa mojada', explanation: 'Al atarla a la cara funciona como un filtro respirador para no inhalar el denso polvo.' }, // Dudoso
            { id: 'o10_4', text: 'Cinta adhesiva' }, // Dudoso
            { id: 'o10_5', text: 'Espejo pequeño', explanation: 'Te permite asomarte por entre pequeños escombros derrumbados para buscar salida.' }, // Dudoso
            { id: 'o10_6', text: 'Revista gruesa' }, // Dudoso
            { id: 'o10_7', text: 'Lápiz' }, // Dudoso
            { id: 'o10_8', text: 'Botella vacía' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i10_1', text: 'Cubo Rubik', isImpostor: true },
            { id: 'i10_2', text: 'Revista de moda gorda', isImpostor: true }
        ]
    },
    {
        id: 'sit_11', text: 'Hay un apagón global prolongado.',
        objects: [
            { id: 'o11_1', text: 'Velas' }, // Útil
            { id: 'o11_2', text: 'Radio a pilas' }, // Útil
            { id: 'o11_3', text: 'Dinero en efectivo', explanation: 'Al no haber cajeros, los billetes físicos vuelven a ser lo único para intercambiar favores.' }, // Dudoso
            { id: 'o11_4', text: 'Espejo pequeño', explanation: 'Amplifica inmensamente la pobre luz de una sola vela en una habitación oscura.' }, // Dudoso
            { id: 'o11_5', text: 'Botella vacía' }, // Dudoso
            { id: 'o11_6', text: 'Zapatos viejos' }, // Dudoso
            { id: 'o11_7', text: 'Lata de refresco' }, // Dudoso
            { id: 'o11_8', text: 'Revistas' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i11_1', text: 'Cargador de pared', isImpostor: true },
            { id: 'i11_2', text: 'Plancha para el pelo', isImpostor: true }
        ]
    },
    {
        id: 'sit_12', text: 'Una tormenta de nieve bloqueó tu casa enteramente.',
        objects: [
            { id: 'o12_1', text: 'Leña' }, // Útil
            { id: 'o12_2', text: 'Mantas gruesas' }, // Útil
            { id: 'o12_3', text: 'Cinta adhesiva', explanation: 'Sellar meticulosamente los bordes de puertas y ventanas congeladas evita que entre frío.' }, // Dudoso
            { id: 'o12_4', text: 'Revistas viejas' }, // Dudoso
            { id: 'o12_5', text: 'Espejo pequeño' }, // Dudoso
            { id: 'o12_6', text: 'Botellas vacías' }, // Dudoso
            { id: 'o12_7', text: 'Zapatos de verano' }, // Dudoso
            { id: 'o12_8', text: 'Gafas de lectura' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i12_1', text: 'Ventilador de mesa', isImpostor: true },
            { id: 'i12_2', text: 'Traje de baño', isImpostor: true }
        ]
    },
    {
        id: 'sit_13', text: 'Tu auto se descompuso en una ruta vacía de noche profunda.',
        objects: [
            { id: 'o13_1', text: 'Linterna' }, // Útil
            { id: 'o13_2', text: 'Triángulos reflectantes' }, // Útil
            { id: 'o13_3', text: 'Botella vacía', explanation: 'Se puede usar para transportar un poco de gasolina y armar un fuego visible de auxilio.' }, // Dudoso
            { id: 'o13_4', text: 'Revista', explanation: 'Se quema bien y sirve para hacer fuego junto al auto apagado.' }, // Dudoso
            { id: 'o13_5', text: 'Espejo pequeño' }, // Dudoso
            { id: 'o13_6', text: 'Zapatos de vestir' }, // Dudoso
            { id: 'o13_7', text: 'Cinta adhesiva' }, // Dudoso
            { id: 'o13_8', text: 'Gafas de sol' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i13_1', text: 'Grapadora', isImpostor: true },
            { id: 'i13_2', text: 'Juego de dados', isImpostor: true }
        ]
    },
    {
        id: 'sit_14', text: 'Un tsunami se acerca a la costa rápidamente.',
        objects: [
            { id: 'o14_1', text: 'Chaleco salvavidas' }, // Útil
            { id: 'o14_2', text: 'Cuerda fuerte' }, // Útil
            { id: 'o14_3', text: 'Botella vacía de plástico', explanation: 'Una botella vacía de 2 litros debajo de la prenda proporciona altísima flotabilidad de auxilio.' }, // Dudoso
            { id: 'o14_4', text: 'Casco de bicicleta', explanation: 'En tsunamis la gente muere por escombros rápidos golpeando áreas vitales; protege tu cabeza al máximo.' }, // Dudoso
            { id: 'o14_5', text: 'Tabla de surf' }, // Dudoso
            { id: 'o14_6', text: 'Camisa vieja' }, // Dudoso
            { id: 'o14_7', text: 'Espejo pequeño' }, // Dudoso
            { id: 'o14_8', text: 'Zapatos pesados' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i14_1', text: 'Maleta pesada de libros', isImpostor: true },
            { id: 'i14_2', text: 'Bolas de boliche', isImpostor: true }
        ]
    },
    {
        id: 'sit_15', text: 'Te han secuestrado y atado en el maletero de un auto.',
        objects: [
            { id: 'o15_1', text: 'Navaja pequeña' }, // Útil
            { id: 'o15_2', text: 'Linterna llavero' }, // Útil
            { id: 'o15_3', text: 'Clip de pelo', explanation: 'Se puede modificar forzándolo para desenganchar el sistema simple del baúl interior del vehículo.' }, // Dudoso
            { id: 'o15_4', text: 'Cordones de zapatos' }, // Dudoso
            { id: 'o15_5', text: 'Gafas rotas', explanation: 'Los cristales muy afilados de los lentes podrían ser tu única manera de cortar amarras delgadas.' }, // Dudoso
            { id: 'o15_6', text: 'Espejo pequeño' }, // Dudoso
            { id: 'o15_7', text: 'Reloj' }, // Dudoso
            { id: 'o15_8', text: 'Revista' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i15_1', text: 'Volante de sobra', isImpostor: true },
            { id: 'i15_2', text: 'Peluciño enorme', isImpostor: true }
        ]
    },
    {
        id: 'sit_16', text: 'Tu barco se incendia en medio del océano.',
        objects: [
            { id: 'o16_1', text: 'Chaleco salvavidas' }, // Útil
            { id: 'o16_2', text: 'Extintor' }, // Útil
            { id: 'o16_3', text: 'Grasa', explanation: 'Untarla en el cuerpo antes del salto demora agresivamente el inicio de la mortal hipotermia salina.' }, // Dudoso
            { id: 'o16_4', text: 'Bolsa plástica' }, // Dudoso
            { id: 'o16_5', text: 'Cinta adhesiva' }, // Dudoso
            { id: 'o16_6', text: 'Zapatos formales' }, // Dudoso
            { id: 'o16_7', text: 'Revista' }, // Dudoso
            { id: 'o16_8', text: 'Espejo pequeño' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i16_1', text: 'Manguera de jardín de 2m', isImpostor: true },
            { id: 'i16_2', text: 'Ancla hiperpesada oxidada', isImpostor: true }
        ]
    },
    {
        id: 'sit_17', text: 'Estás perdido en un laberinto de túneles bajo tierra.',
        objects: [
            { id: 'o17_1', text: 'Linterna' }, // Útil
            { id: 'o17_2', text: 'Brújula' }, // Útil
            { id: 'o17_3', text: 'Hilo de coser', explanation: 'Atar la punta en la salida previene completamente que vuelvas hacia atrás dando enormes vueltas perdidas.' }, // Dudoso
            { id: 'o17_4', text: 'Tiza' }, // Dudoso
            { id: 'o17_5', text: 'Botella vacía', explanation: 'Permite atrapar agua estancada profunda en pequeñas cuencas rocosas inaccesibles de la pared.' }, // Dudoso
            { id: 'o17_6', text: 'Revista' }, // Dudoso
            { id: 'o17_7', text: 'Espejo pequeño' }, // Dudoso
            { id: 'o17_8', text: 'Zapatos pesados' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i17_1', text: 'Binoculares lejanos', isImpostor: true },
            { id: 'i17_2', text: 'Bolsa de dormir suave', isImpostor: true }
        ]
    },
    {
        id: 'sit_18', text: 'Hay un brote viral rápido propagándose por el aire.',
        objects: [
            { id: 'o18_1', text: 'Máscara antigás' }, // Útil
            { id: 'o18_2', text: 'Desinfectante' }, // Útil
            { id: 'o18_3', text: 'Cinta adhesiva', explanation: 'Vital para sellar las herméticas fisuras del viento debajo de cualquier puerta refugio infectable.' }, // Dudoso
            { id: 'o18_4', text: 'Bolsa plástica' }, // Dudoso
            { id: 'o18_5', text: 'Gafas de sol', explanation: 'Evitan que rocío microscópico o sangre caiga libremente directamente hacia las pupilas húmedas.' }, // Dudoso
            { id: 'o18_6', text: 'Espejo pequeño' }, // Dudoso
            { id: 'o18_7', text: 'Revista' }, // Dudoso
            { id: 'o18_8', text: 'Cinturón' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i18_1', text: 'Matamoscas de plástico', isImpostor: true },
            { id: 'i18_2', text: 'Termómetro rectal', isImpostor: true }
        ]
    },
    {
        id: 'sit_19', text: 'Caes adentro del foso de leones de un zoológico abandonado.',
        objects: [
            { id: 'o19_1', text: 'Taser' }, // Útil
            { id: 'o19_2', text: 'Garrocha' }, // Útil
            { id: 'o19_3', text: 'Manta inmensa', explanation: 'Abierta ampliamente por encima, falsea tu imponente tamaño; los leones se amedrentan retrocediendo.' }, // Dudoso
            { id: 'o19_4', text: 'Zapatos sueltos' }, // Dudoso
            { id: 'o19_5', text: 'Perfume fuerte', explanation: 'Dispararlo en el sensible hocico canino arruina rápidamente su enorme y afinado rastreo de instinto.' }, // Dudoso
            { id: 'o19_6', text: 'Revista' }, // Dudoso
            { id: 'o19_7', text: 'Botella vacía' }, // Dudoso
            { id: 'o19_8', text: 'Espejo pequeño' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i19_1', text: 'Látigo de circo roto', isImpostor: true },
            { id: 'i19_2', text: 'Cuerda deshilachada corta', isImpostor: true }
        ]
    },
    {
        id: 'sit_20', text: 'Una manada de lobos rodeó tu campamento por la noche.',
        objects: [
            { id: 'o20_1', text: 'Rifle' }, // Útil
            { id: 'o20_2', text: 'Palo ardiente' }, // Útil
            { id: 'o20_3', text: 'Olla de metal', explanation: 'Hacer enorme escándalo rítmico espanta profundamente al canino primitivo y asusta gravemente sus reflejos.' }, // Dudoso
            { id: 'o20_4', text: 'Perfume' }, // Dudoso
            { id: 'o20_5', text: 'Revista', explanation: 'Te permite aumentar rápidamente la intensidad viva incipiente de un débil fuego de fogata.' }, // Dudoso
            { id: 'o20_6', text: 'Zapatos extra' }, // Dudoso
            { id: 'o20_7', text: 'Gafas de lectura' }, // Dudoso
            { id: 'o20_8', text: 'Espejo pequeño' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i20_1', text: 'Filete de carne fresca', isImpostor: true },
            { id: 'i20_2', text: 'Bozal de perro pequeño', isImpostor: true }
        ]
    },
    {
        id: 'sit_21', text: 'Un oso gris enorme irrumpe destrozando tu tienda de campaña.',
        objects: [
            { id: 'o21_1', text: 'Aerosol anti-osos' }, // Útil
            { id: 'o21_2', text: 'Cuchillo' }, // Útil
            { id: 'o21_3', text: 'Mochila robusta', explanation: 'Fingiendo una cruda asfixia falsa, dejar que golpee la mochila dura protege tu columna vertebral.' }, // Dudoso
            { id: 'o21_4', text: 'Cinta adhesiva' }, // Dudoso
            { id: 'o21_5', text: 'Zapatos ruidosos', explanation: 'Crear ruido sordo a gran escala contra cualquier tacho duro ahuyentará su intrépido asalto inicial.' }, // Dudoso
            { id: 'o21_6', text: 'Botella vacía' }, // Dudoso
            { id: 'o21_7', text: 'Espejo pequeño' }, // Dudoso
            { id: 'o21_8', text: 'Revista' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i21_1', text: 'Tarro de miel natural', isImpostor: true },
            { id: 'i21_2', text: 'Sartén de teflón pequeña', isImpostor: true }
        ]
    },
    {
        id: 'sit_22', text: 'Quedaste a la intemperie en medio del clima de la Antártida.',
        objects: [
            { id: 'o22_1', text: 'Abrigo térmico' }, // Útil
            { id: 'o22_2', text: 'Calentador' }, // Útil
            { id: 'o22_3', text: 'Lona plástica', explanation: 'La lona permite concentrar íntegramente todo el intenso calor expulsado creando rápida burbuja climatizada de salvamento.' }, // Dudoso
            { id: 'o22_4', text: 'Gafas de sol', explanation: 'Previene obligatoriamente la ceguera antártica fatal causada severamente por reflejos solares puros cristalizados profundos directos al globo ocular.' }, // Dudoso
            { id: 'o22_5', text: 'Botella vacía' }, // Dudoso
            { id: 'o22_6', text: 'Zapatos ligeros' }, // Dudoso
            { id: 'o22_7', text: 'Espejo pequeño' }, // Dudoso
            { id: 'o22_8', text: 'Revista' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i22_1', text: 'Ventilador a pilas', isImpostor: true },
            { id: 'i22_2', text: 'Bikini ajustado', isImpostor: true }
        ]
    },
    {
        id: 'sit_23', text: 'Sobreviviste a una avalancha enterrado boca abajo bajo la nieve.',
        objects: [
            { id: 'o23_1', text: 'Pala pequeña' }, // Útil
            { id: 'o23_2', text: 'Baliza' }, // Útil
            { id: 'o23_3', text: 'Caramelo duro', explanation: 'Favorece una salivación pesada obligatoria, demostrándote dónde es asombrosamente la parte de arriba o abajo oscuro por la gravedad pura.' }, // Dudoso
            { id: 'o23_4', text: 'Bufanda elástica gruesa', explanation: 'Evita crear una compacta y gélida gran masa interna pulmonar con tu propio aire exhalado natural helado rápido bloqueante mortal por obstrucción.' }, // Dudoso
            { id: 'o23_5', text: 'Cinta adhesiva' }, // Dudoso
            { id: 'o23_6', text: 'Botella vacía' }, // Dudoso
            { id: 'o23_7', text: 'Zapatos ligeros' }, // Dudoso
            { id: 'o23_8', text: 'Revista vieja' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i23_1', text: 'Secador de pelo enchufable', isImpostor: true },
            { id: 'i23_2', text: 'Lanzallamas sin combustible', isImpostor: true }
        ]
    },
    {
        id: 'sit_24', text: 'Estás perdido en un pantano asfixiante e infinito.',
        objects: [
            { id: 'o24_1', text: 'Machete' }, // Útil
            { id: 'o24_2', text: 'Botas altas' }, // Útil
            { id: 'o24_3', text: 'Rama enorme', explanation: 'Usarla profundamente cruzando delante localiza peligrosos cráteres en el fango de forma previa perimetral letales silenciosos escondidos bajo el lodo.' }, // Dudoso
            { id: 'o24_4', text: 'Bolsa plástica' }, // Dudoso
            { id: 'o24_5', text: 'Espejo pequeño' }, // Dudoso
            { id: 'o24_6', text: 'Revista fina' }, // Dudoso
            { id: 'o24_7', text: 'Camisa extra' }, // Dudoso
            { id: 'o24_8', text: 'Reloj' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i24_1', text: 'Gafas de buceo acuáticas', isImpostor: true },
            { id: 'i24_2', text: 'Patineta deportiva lisa', isImpostor: true }
        ]
    },
    {
        id: 'sit_25', text: 'Una nave nodriza de ovnis empieza a abducir personas por la calle.',
        objects: [
            { id: 'o25_1', text: 'Escopeta' }, // Útil
            { id: 'o25_2', text: 'Linterna táctica' }, // Útil
            { id: 'o25_3', text: 'Manta de aluminio', explanation: 'Anula directamente y fuertemente la lectura exterior marcadora calorífica sobre todo todo humano blando biológico visible para sensores ocultos lejanos cazadores nocturnos térmicos.' }, // Dudoso
            { id: 'o25_4', text: 'Espejo pequeño', explanation: 'Lograría confundir fuertemente y de repente potentes láseres directos perjudiciales rebotando y refractando visualmente potentes cegadores ópticos hostiles extraños visuales de ataque visuales de las naves.' }, // Dudoso
            { id: 'o25_5', text: 'Revista gruesa' }, // Dudoso
            { id: 'o25_6', text: 'Cinta adhesiva' }, // Dudoso
            { id: 'o25_7', text: 'Gafas 3D' }, // Dudoso
            { id: 'o25_8', text: 'Botella vacía' } // Dudoso
        ],
        impostorObjects: [
            { id: 'i25_1', text: 'Pistola de burbujas azul', isImpostor: true },
            { id: 'i25_2', text: 'Máscara de látex Obama', isImpostor: true }
        ]
    }
];
