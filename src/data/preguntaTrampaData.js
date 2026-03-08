export const preguntaTrampaSituations = [
    {
        id: 'sit_1', text: 'Estás perdido en un desierto abrasador.',
        objects: [
            { id: 'o1_1', text: 'Cantimplora' },
            { id: 'o1_2', text: 'Brújula' },
            { id: 'o1_3', text: 'Gafas de sol', explanation: 'No solo protegen tu visión del daño solar extremo, sino que sus cristales pueden usarse para concentrar la luz del sol e iniciar un fuego si encuentras yesca.' },
            { id: 'o1_4', text: 'Espejo', explanation: 'El espejo es la mejor herramienta de señalización pasiva. Puede reflejar la luz del sol a kilómetros de distancia para llamar la atención de aviones de rescate.' },
            { id: 'o1_5', text: 'Cuchillo' },
            { id: 'o1_6', text: 'Encendedor' },
            { id: 'o1_7', text: 'Sombrero' },
            { id: 'o1_8', text: 'Lonas' }
        ],
        impostorObjects: [
            { id: 'i1_1', text: 'Termómetro de mercurio', isImpostor: true },
            { id: 'i1_2', text: 'Botas de goma', isImpostor: true }
        ]
    },
    {
        id: 'sit_2', text: 'Estás atrapado en una isla desierta.',
        objects: [
            { id: 'o2_1', text: 'Machete' },
            { id: 'o2_2', text: 'Red de pesca' },
            { id: 'o2_3', text: 'Lona impermeable', explanation: 'Con la lona puedes crear un refugio temporal, pero más importante aún, puedes amarrarla para recolectar el agua de lluvia o crear un destilador solar para conseguir agua potable.' },
            { id: 'o2_4', text: 'Pedernal' },
            { id: 'o2_5', text: 'Cuerda' },
            { id: 'o2_6', text: 'Botiquín' },
            { id: 'o2_7', text: 'Lupa', explanation: 'Puedes usar la lupa para concentrar los rayos del sol en hojas secas y encender una fogata sin esfuerzo para purificar agua o cocinar.' },
            { id: 'o2_8', text: 'Bidón vacío' }
        ],
        impostorObjects: [
            { id: 'i2_1', text: 'Un paraguas roto', isImpostor: true },
            { id: 'i2_2', text: 'Auriculares con cable', isImpostor: true }
        ]
    },
    {
        id: 'sit_3', text: 'Estás perdido en una densa jungla.',
        objects: [
            { id: 'o3_1', text: 'Machete' },
            { id: 'o3_2', text: 'Botas altas' },
            { id: 'o3_3', text: 'Repelente' },
            { id: 'o3_4', text: 'Cuerda' },
            { id: 'o3_5', text: 'Mosquitero', explanation: 'En la selva, los mosquitos son más letales que los depredadores grandes debido a las enfermedades. Además, la red puede usarse para pescar en ríos poco profundos.' },
            { id: 'o3_6', text: 'Navaja' },
            { id: 'o3_7', text: 'Fósforos' },
            { id: 'o3_8', text: 'Bolsa plástica', explanation: 'Se puede atar alrededor de las hojas de los árboles vivos. Durante el día, transpirarán, dejando agua limpia y potable dentro de la bolsa.' }
        ],
        impostorObjects: [
            { id: 'i3_1', text: 'Raqueta de bádminton', isImpostor: true },
            { id: 'i3_2', text: 'Desodorante en aerosol', isImpostor: true }
        ]
    },
    {
        id: 'sit_4', text: 'Estás atrapado en una montaña nevada.',
        objects: [
            { id: 'o4_1', text: 'Abrigo térmico' },
            { id: 'o4_2', text: 'Bengala' },
            { id: 'o4_3', text: 'Piolet' },
            { id: 'o4_4', text: 'Cuerda' },
            { id: 'o4_5', text: 'Gafas de nieve', explanation: 'Evitan la oftalmia de la nieve (ceguera por los reflejos del sol en el hielo), manteniendo tus ojos íntegros para buscar descensos seguros.' },
            { id: 'o4_6', text: 'Brújula' },
            { id: 'o4_7', text: 'Botas de nieve' },
            { id: 'o4_8', text: 'Crema solar' }
        ],
        impostorObjects: [
            { id: 'i4_1', text: 'Traje de neopreno', isImpostor: true },
            { id: 'i4_2', text: 'Bolsa de hielo', isImpostor: true }
        ]
    },
    {
        id: 'sit_5', text: 'Estás encerrado en un edificio abandonado.',
        objects: [
            { id: 'o5_1', text: 'Linterna' },
            { id: 'o5_2', text: 'Barra de hierro' },
            { id: 'o5_3', text: 'Cuerda' },
            { id: 'o5_4', text: 'Tiza', explanation: 'Los edificios abandonados son laberintos. Usar tiza para marcar las puertas y pasillos por los que ya pasaste es vital para no caminar en círculos.' },
            { id: 'o5_5', text: 'Navaja suiza' },
            { id: 'o5_6', text: 'Espejo pequeño' },
            { id: 'o5_7', text: 'Cinta americana' },
            { id: 'o5_8', text: 'Guantes de cuero' }
        ],
        impostorObjects: [
            { id: 'i5_1', text: 'Controles de consola', isImpostor: true },
            { id: 'i5_2', text: 'Reloj despertador', isImpostor: true }
        ]
    },
    {
        id: 'sit_6', text: 'Estás perdido a la deriva en el mar.',
        objects: [
            { id: 'o6_1', text: 'Balsa inflable' },
            { id: 'o6_2', text: 'Bengalas' },
            { id: 'o6_3', text: 'Espejo de señales' },
            { id: 'o6_4', text: 'Caña de pescar' },
            { id: 'o6_5', text: 'Toldo', explanation: 'Dar sombra es esencial para no morir de insolación ni perder líquidos rápido mediante la transpiración.' },
            { id: 'o6_6', text: 'Silbato' },
            { id: 'o6_7', text: 'Cuerda larga' },
            { id: 'o6_8', text: 'Bolsa de basura negra', explanation: 'Amarrada o estirada, se puede usar para recolectar agua de lluvia de manera súper eficiente.' }
        ],
        impostorObjects: [
            { id: 'i6_1', text: 'Ancla pequeña', isImpostor: true },
            { id: 'i6_2', text: 'Flotador de flamenco', isImpostor: true }
        ]
    },
    {
        id: 'sit_7', text: 'Ocurrió un apocalipsis zombie.',
        objects: [
            { id: 'o7_1', text: 'Bate de béisbol' },
            { id: 'o7_2', text: 'Cuchillo de caza' },
            { id: 'o7_3', text: 'Mochila grande' },
            { id: 'o7_4', text: 'Linterna' },
            { id: 'o7_5', text: 'Cinta americana', explanation: 'Literalmente puedes usarla para crear refuerzos de "armadura" gruesa envolviendo tus antebrazos, evitando que las mordidas traspasen a tu piel.' },
            { id: 'o7_6', text: 'Radio a pilas' },
            { id: 'o7_7', text: 'Antibióticos' },
            { id: 'o7_8', text: 'Botas militares' }
        ],
        impostorObjects: [
            { id: 'i7_1', text: 'Micrófono de karaoke', isImpostor: true },
            { id: 'i7_2', text: 'Calculadora científica', isImpostor: true }
        ]
    },
    {
        id: 'sit_8', text: 'Tu avión se estrelló en un bosque.',
        objects: [
            { id: 'o8_1', text: 'Hacha de emergencia' },
            { id: 'o8_2', text: 'Pistola de bengalas' },
            { id: 'o8_3', text: 'Mantas térmicas' },
            { id: 'o8_4', text: 'Brújula' },
            { id: 'o8_5', text: 'Cuerda' },
            { id: 'o8_6', text: 'Asiento de avión', explanation: 'Su relleno funciona como aislante perfecto para sentarse sin perder calor corporal por el contacto con la tierra húmeda, e incluso funciona como salvavidas si hay un lago.' },
            { id: 'o8_7', text: 'Revista de vuelo', explanation: 'Su uso principal parece estúpido, pero las hojas gruesas del papel son la excelente base seca para iniciar la combustión de una fogata de rescate.' },
            { id: 'o8_8', text: 'Maletín de piloto' }
        ],
        impostorObjects: [
            { id: 'i8_1', text: 'Bandeja de plástico duro', isImpostor: true },
            { id: 'i8_2', text: 'Cinturón de seguridad suelto', isImpostor: true }
        ]
    },
    {
        id: 'sit_9', text: 'Estás atrapado en un ascensor.',
        objects: [
            { id: 'o9_1', text: 'Teléfono móvil' },
            { id: 'o9_2', text: 'Linterna' },
            { id: 'o9_3', text: 'Silbato' },
            { id: 'o9_4', text: 'Herramienta multiusos' },
            { id: 'o9_5', text: 'Botella de agua' },
            { id: 'o9_6', text: 'Espejo', explanation: 'Puede usarse para deslizarlo por la ranura superior o lateral y confirmar si el piso está alineado sin asomar peligrosamente la cabeza.' },
            { id: 'o9_7', text: 'Lapicera metálica' },
            { id: 'o9_8', text: 'Chaqueta gruesa' }
        ],
        impostorObjects: [
            { id: 'i9_1', text: 'Paracaídas portátil', isImpostor: true },
            { id: 'i9_2', text: 'Zapatos de tap', isImpostor: true }
        ]
    },
    {
        id: 'sit_10', text: 'Colapsó el suelo de un edificio en ruinas sobre ti.',
        objects: [
            { id: 'o10_1', text: 'Mascarilla N95' },
            { id: 'o10_2', text: 'Linterna fuerte' },
            { id: 'o10_3', text: 'Silbato de advertencia' },
            { id: 'o10_4', text: 'Agua embotellada', explanation: 'Además de hidratar, el agua se usa para humedecer un trapo y filtrar el respiradero, lo cual evita la muerte por inhalación del denso polvo del escombro.' },
            { id: 'o10_5', text: 'Barrita de energía' },
            { id: 'o10_6', text: 'Radio de pilas' },
            { id: 'o10_7', text: 'Cinta resistente' },
            { id: 'o10_8', text: 'Manta térmica' }
        ],
        impostorObjects: [
            { id: 'i10_1', text: 'Cubo Rubik', isImpostor: true },
            { id: 'i10_2', text: 'Revista de moda gorda', isImpostor: true }
        ]
    },
    {
        id: 'sit_11', text: 'Hay un apagón global prolongado.',
        objects: [
            { id: 'o11_1', text: 'Velas' },
            { id: 'o11_2', text: 'Fósforos' },
            { id: 'o11_3', text: 'Radio a pilas' },
            { id: 'o11_4', text: 'Latas de conserva' },
            { id: 'o11_5', text: 'Abrelatas manual', explanation: 'Prácticamente inútil el resto del año, una lata abierta preservará tu vida si la red eléctrica desaparece para siempre.' },
            { id: 'o11_6', text: 'Dinero en efectivo', explanation: 'Cando los cajeros y tarjetas falten, los billetes físicos volverán a ser lo único que las otras personas aceptarán para intercambiarte comida o recursos.' },
            { id: 'o11_7', text: 'Generador a gas' },
            { id: 'o11_8', text: 'Batería de coche' }
        ],
        impostorObjects: [
            { id: 'i11_1', text: 'Cargador de pared', isImpostor: true },
            { id: 'i11_2', text: 'Plancha para el pelo', isImpostor: true }
        ]
    },
    {
        id: 'sit_12', text: 'Una tormenta de nieve bloqueó tu casa enteramente.',
        objects: [
            { id: 'o12_1', text: 'Pala' },
            { id: 'o12_2', text: 'Leña' },
            { id: 'o12_3', text: 'Comida enlatada' },
            { id: 'o12_4', text: 'Mantas gruesas' },
            { id: 'o12_5', text: 'Cocina de gas campestre' },
            { id: 'o12_6', text: 'Cinta protectora', explanation: 'Las tormentas de nieve helada congelarán el interior por filtraciones diminutas de aire. Se debe aislar las grietas de puertas y ventanas para no morir de hipotermia adentro.' },
            { id: 'o12_7', text: 'Linterna LED' },
            { id: 'o12_8', text: 'Radio portátil' }
        ],
        impostorObjects: [
            { id: 'i12_1', text: 'Ventilador de mesa', isImpostor: true },
            { id: 'i12_2', text: 'Traje de baño', isImpostor: true }
        ]
    },
    {
        id: 'sit_13', text: 'Tu auto se descompuso en una ruta vacía de noche profunda.',
        objects: [
            { id: 'o13_1', text: 'Triángulos reflectantes' },
            { id: 'o13_2', text: 'Gato hidráulico' },
            { id: 'o13_3', text: 'Cables pasa corriente' },
            { id: 'o13_4', text: 'Linterna' },
            { id: 'o13_5', text: 'Rueda de repuesto' },
            { id: 'o13_6', text: 'Botella gruesa vacía', explanation: 'Permite hacer sifón o recolectar gasolina del tanque para encender una fogata de advertencia grande a un lado de la ruta.' },
            { id: 'o13_7', text: 'Chaqueta de alta visibilidad' },
            { id: 'o13_8', text: 'Manta térmica' }
        ],
        impostorObjects: [
            { id: 'i13_1', text: 'Grapadora', isImpostor: true },
            { id: 'i13_2', text: 'Juego de dados', isImpostor: true }
        ]
    },
    {
        id: 'sit_14', text: 'Un tsunami se acerca a la costa rápidamente.',
        objects: [
            { id: 'o14_1', text: 'Chaleco salvavidas' },
            { id: 'o14_2', text: 'Tabla de surf', explanation: 'Al no tener bote, anclar tu brazo a una tabla de surf te mantendrá 100% sobre la superficie cuando la gran masa de agua choque.' },
            { id: 'o14_3', text: 'Cuerda fuerte' },
            { id: 'o14_4', text: 'Silbato' },
            { id: 'o14_5', text: 'Bote salvavidas inflable' },
            { id: 'o14_6', text: 'Botiquín' },
            { id: 'o14_7', text: 'Linterna impermeable' },
            { id: 'o14_8', text: 'Casco resistente', explanation: 'En tsunamis, la gente rara vez se ahoga primero; mueren golpeados por los trozos de casas y estática que viajan a la velocidad del agua. Proteger la cabeza es crucial.' }
        ],
        impostorObjects: [
            { id: 'i14_1', text: 'Maleta pesada de libros', isImpostor: true },
            { id: 'i14_2', text: 'Bolas de boliche', isImpostor: true }
        ]
    },
    {
        id: 'sit_15', text: 'Te han secuestrado y atado en el maletero de un auto.',
        objects: [
            { id: 'o15_1', text: 'Navaja pequeña' },
            { id: 'o15_2', text: 'Teléfono celular oculto' },
            { id: 'o15_3', text: 'Linterna llavero' },
            { id: 'o15_4', text: 'Clip de pelo duro', explanation: 'Se puede modificar para abrir y forzar la cerradura interior estándar que tienen casi todos los maleteros de autos modernos o deslizar cerrojos.' },
            { id: 'o15_5', text: 'Destornillador' },
            { id: 'o15_6', text: 'Cordones de zapatos fuertes' },
            { id: 'o15_7', text: 'Llave inglesa' },
            { id: 'o15_8', text: 'Encendedor ligero' }
        ],
        impostorObjects: [
            { id: 'i15_1', text: 'Volante de sobra', isImpostor: true },
            { id: 'i15_2', text: 'Peluciño enorme', isImpostor: true }
        ]
    },
    {
        id: 'sit_16', text: 'Tu barco se incendia en medio del océano.',
        objects: [
            { id: 'o16_1', text: 'Chaleco salvavidas' },
            { id: 'o16_2', text: 'Extintor grande' },
            { id: 'o16_3', text: 'Aro salvavidas ciego' },
            { id: 'o16_4', text: 'Bote de remos' },
            { id: 'o16_5', text: 'Botiquín estanco' },
            { id: 'o16_6', text: 'Manteca o grasa', explanation: 'Aplicar grasa gruesa en todo tu cuerpo antes de saltar al agua retrasa severamente la hipotermia y protege la piel del sol al flotar horas.' },
            { id: 'o16_7', text: 'Cuchillo de buceo' },
            { id: 'o16_8', text: 'Espejo de señales' }
        ],
        impostorObjects: [
            { id: 'i16_1', text: 'Manguera de jardín de 2m', isImpostor: true },
            { id: 'i16_2', text: 'Ancla hiperpesada oxidada', isImpostor: true }
        ]
    },
    {
        id: 'sit_17', text: 'Estás perdido en un laberinto de túneles bajo tierra.',
        objects: [
            { id: 'o17_1', text: 'Hilo resistente largo', explanation: 'Atar el hilo a la entrada te garantiza volver al inicio sin importar cuántas vueltas innecesarias des.' },
            { id: 'o17_2', text: 'Linterna duradera' },
            { id: 'o17_3', text: 'Tiza gruesa' },
            { id: 'o17_4', text: 'Brújula' },
            { id: 'o17_5', text: 'Silbato' },
            { id: 'o17_6', text: 'Botella de agua' },
            { id: 'o17_7', text: 'Martillo rompepiedra' },
            { id: 'o17_8', text: 'Navaja suiza' }
        ],
        impostorObjects: [
            { id: 'i17_1', text: 'Binoculares lejanos', isImpostor: true },
            { id: 'i17_2', text: 'Bolsa de dormir suave', isImpostor: true }
        ]
    },
    {
        id: 'sit_18', text: 'Hay un brote viral rápido propagándose por el aire.',
        objects: [
            { id: 'o18_1', text: 'Máscara antigás' },
            { id: 'o18_2', text: 'Filtros extra N99' },
            { id: 'o18_3', text: 'Traje NBQ protector' },
            { id: 'o18_4', text: 'Cinta americana', explanation: 'Vital para sellar los bordes de puertas y las ventanas en tu refugio, impidiendo que el aire exterior biocontaminado ingrese.' },
            { id: 'o18_5', text: 'Desinfectante 90%' },
            { id: 'o18_6', text: 'Guantes de nitrilo' },
            { id: 'o18_7', text: 'Raciones letargo' },
            { id: 'o18_8', text: 'Botellas de cloro' }
        ],
        impostorObjects: [
            { id: 'i18_1', text: 'Matamoscas de plástico', isImpostor: true },
            { id: 'i18_2', text: 'Termómetro rectal', isImpostor: true }
        ]
    },
    {
        id: 'sit_19', text: 'Caes adentro del foso de leones de un zoológico abandonado.',
        objects: [
            { id: 'o19_1', text: 'Garrocha larga' },
            { id: 'o19_2', text: 'Taser eléctrico' },
            { id: 'o19_3', text: 'Manta inmensa', explanation: 'Abrir bruscamente una lona o manta enorme por encima de tu cabeza deforma tu silueta ante el depredador. Los leones dudan y retroceden al ver cambiar tu tamaño.' },
            { id: 'o19_4', text: 'Escalera plegable' },
            { id: 'o19_5', text: 'Carne podrida olorosa', explanation: 'Tirarla en la dirección opuesta gana valiosos segundos para trepar el muro, los animales responden al olor y siguen la distracción inmediata.' },
            { id: 'o19_6', text: 'Silbato sónico' },
            { id: 'o19_7', text: 'Linterna deslumbrante' },
            { id: 'o19_8', text: 'Pistola vengalas' }
        ],
        impostorObjects: [
            { id: 'i19_1', text: 'Látigo de circo roto', isImpostor: true },
            { id: 'i19_2', text: 'Cuerda deshilachada corta', isImpostor: true }
        ]
    },
    {
        id: 'sit_20', text: 'Una manada de lobos rodeó tu campamento por la noche.',
        objects: [
            { id: 'o20_1', text: 'Aerosol repelente pimiento' },
            { id: 'o20_2', text: 'Rifle calibre grueso' },
            { id: 'o20_3', text: 'Cuchillo de caza' },
            { id: 'o20_4', text: 'Bocina de aire para osos' },
            { id: 'o20_5', text: 'Palo ardiente' },
            { id: 'o20_6', text: 'Recipiente de chapa', explanation: 'Golpearlo rítmicamente contra piedras produce ruidos anormales de estructura metálica, asustando gravemente el instinto de los caninos.' },
            { id: 'o20_7', text: 'Bengala rojiza marina' },
            { id: 'o20_8', text: 'Linterna flash 1000 lumen' }
        ],
        impostorObjects: [
            { id: 'i20_1', text: 'Filete de carne fresca', isImpostor: true },
            { id: 'i20_2', text: 'Bozal de perro pequeño', isImpostor: true }
        ]
    },
    {
        id: 'sit_21', text: 'Un oso gris enorme irrumpe destrozando tu tienda de campaña.',
        objects: [
            { id: 'o21_1', text: 'Pistola pesada' },
            { id: 'o21_2', text: 'Aerosol anti-osos concentrado' },
            { id: 'o21_3', text: 'Silbato ensordecedor' },
            { id: 'o21_4', text: 'Bengala de ignición rápida' },
            { id: 'o21_5', text: 'Mochila robusta', explanation: 'Al correr o fingir estar muerto, dejar que el animal muerda la mochila te protege la columna vertebral.' },
            { id: 'o21_6', text: 'Cuchillo militar cerrado' },
            { id: 'o21_7', text: 'Chaqueta gruesa de kevlar' },
            { id: 'o21_8', text: 'Botas duras protectoras' }
        ],
        impostorObjects: [
            { id: 'i21_1', text: 'Tarro de miel natural', isImpostor: true },
            { id: 'i21_2', text: 'Sartén de teflón pequeña', isImpostor: true }
        ]
    },
    {
        id: 'sit_22', text: 'Quedaste a la intemperie en medio del clima de la Antártida.',
        objects: [
            { id: 'o22_1', text: 'Abrigo pluma de ganso' },
            { id: 'o22_2', text: 'Calentador de queroseno' },
            { id: 'o22_3', text: 'Bolsa de dormir -40°C' },
            { id: 'o22_4', text: 'Radio de onda corta SOS' },
            { id: 'o22_5', text: 'Lona rompevientos gruesa' },
            { id: 'o22_6', text: 'Burbuja térmica', explanation: 'Te permite reciclar el poco calor exhalado al respirar manteniéndolo cerca de tu cuerpo como burbuja aislante.' },
            { id: 'o22_7', text: 'Raciones hipercalóricas' },
            { id: 'o22_8', text: 'Botellas de líquido oscuro' }
        ],
        impostorObjects: [
            { id: 'i22_1', text: 'Ventilador a pilas', isImpostor: true },
            { id: 'i22_2', text: 'Bikini ajustado', isImpostor: true }
        ]
    },
    {
        id: 'sit_23', text: 'Sobreviviste a una avalancha enterrado boca abajo bajo la nieve.',
        objects: [
            { id: 'o23_1', text: 'Baliza de rescate ARVA' },
            { id: 'o23_2', text: 'Sonda plegable detectora' },
            { id: 'o23_3', text: 'Pala ultraligera compacta' },
            { id: 'o23_4', text: 'Botella gruesa de agua' },
            { id: 'o23_5', text: 'Babero salva-hielo' },
            { id: 'o23_6', text: 'Saliva humana', explanation: 'Es la única forma de saber hacia dónde excavar en plena oscuridad: si dejas caer un poco de saliva al suelo de la pala sabrás la verdadera dirección gravitacional en un entorno donde arriba y abajo se ven exactamente iguales.' },
            { id: 'o23_7', text: 'Silbato perforador' },
            { id: 'o23_8', text: 'Linterna minera potente' }
        ],
        impostorObjects: [
            { id: 'i23_1', text: 'Secador de pelo enchufable', isImpostor: true },
            { id: 'i23_2', text: 'Lanzallamas sin combustible', isImpostor: true }
        ]
    },
    {
        id: 'sit_24', text: 'Estás perdido en un pantano asfixiante e infinito.',
        objects: [
            { id: 'o24_1', text: 'Machete chato afilado' },
            { id: 'o24_2', text: 'Botas impermeables altas' },
            { id: 'o24_3', text: 'Lona gruesa oscura' },
            { id: 'o24_4', text: 'Rama enorme inquebrantable', explanation: 'Al atravesar ciénagas podridas, enterrar una rama al frente prevendrá que tu cuerpo caiga directo a un sumidero arenoso gigante que no viste venir.' },
            { id: 'o24_5', text: 'Mosquitero cabeza ancho' },
            { id: 'o24_6', text: 'Silbato rescatista agudo' },
            { id: 'o24_7', text: 'Cuchillo multiuso grueso' },
            { id: 'o24_8', text: 'Bengalas humo rojas' }
        ],
        impostorObjects: [
            { id: 'i24_1', text: 'Gafas de buceo acuáticas', isImpostor: true },
            { id: 'i24_2', text: 'Patineta deportiva lisa', isImpostor: true }
        ]
    },
    {
        id: 'sit_25', text: 'Una nave nodriza de ovnis empieza a abducir personas por la calle.',
        objects: [
            { id: 'o25_1', text: 'Caño cloacal oscuro profundo' },
            { id: 'o25_2', text: 'Lentes infrarrojos ciegos' },
            { id: 'o25_3', text: 'Escopeta munición doble' },
            { id: 'o25_4', text: 'Linterna policial cegadora' },
            { id: 'o25_5', text: 'Manta aluminio isotérmica', explanation: 'Las naves usan frecuentemente sistemas térmicos para marcar cuerpos biológicos nocturnos; cubrirse con aluminio anulará totalmente la firma de calor de tu cuerpo.' },
            { id: 'o25_6', text: 'Radio frecuencia encriptada' },
            { id: 'o25_7', text: 'Cadena metálica encordada' },
            { id: 'o25_8', text: 'Granada humo aturdidora' }
        ],
        impostorObjects: [
            { id: 'i25_1', text: 'Pistola de burbujas azul', isImpostor: true },
            { id: 'i25_2', text: 'Máscara de látex Obama', isImpostor: true }
        ]
    }
];
