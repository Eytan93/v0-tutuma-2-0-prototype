export interface TastingNote {
  vista: string
  nariz: string
  boca: string
}

export interface Product {
  id: string
  name: string
  subtitle?: string
  agave?: string
  price: number
  notes: TastingNote
}

export interface Brand {
  id: string
  name: string
  region: string
  state: string
  description: string
  accentColor: string
  products: Product[]
}

export const brands: Brand[] = [
  {
    id: 'rajabule',
    name: 'Rajabule',
    region: 'Sola de Vega',
    state: 'Oaxaca',
    description:
      'Destilados de la Sierra Sur oaxaqueña, donde el terruño solteco imprime su carácter único en cada expresión.',
    accentColor: '#6B7F5E',
    products: [
      {
        id: 'rajabule-arroqueno',
        name: 'Rajabule Arroqueño',
        agave: 'Arroqueño',
        price: 1450,
        notes: {
          vista:
            'Cristalino con un perlado largo y envolvente. La luz atraviesa limpiamente, revelando la pureza de una destilación magistral.',
          nariz:
            'La tierra solteca en su máxima expresión. Agave profundo y cocido, seguido de minerales vivos (piedra mojada, sílex) y un herbáceo silvestre que susurra historias del Caballito Blanco.',
          boca:
            'Untuoso al primer contacto. Dulzor del agave que evoca piloncillo y miel, abriéndose hacia un ahumado elegante. El final es mineral y seco — como lamer roca de río — con una persistencia que permanece.',
        },
      },
      {
        id: 'rajabule-tobala',
        name: 'Rajabule Tobalá',
        agave: 'Tobalá',
        price: 1680,
        notes: {
          vista: 'Corpulencia media en cuerpo pálido. Las "lágrimas" bajan con ritmo mesurado — prueba de su estructura alcohólica controlada.',
          nariz:
            'Dominio floral: flores blancas de agave en floración, jazmín sutil. Cítricos frescos (lima, pomelo) sin perder el ahumado tenue que le confiere misterio. Un bouquet que invita y desconciert.',
          boca:
            'Sedoso desde el primer instante. Dulzura balanceada que recuerda a la flor de agave cocida, con una textura oleosa que recubre el paladar. Largo retrogusto mentolado y floral — como sorber rocío de flores silvestres.',
        },
      },
      {
        id: 'rajabule-mexicano',
        name: 'Rajabule Mexicano',
        agave: 'Mexicano',
        price: 1550,
        notes: {
          vista:
            'Cristalino de cuerpo denso; las "piernas" descienden como savia lenta, indicando peso alcohólico sin agresividad.',
          nariz:
            'Especias artesanales: pimienta negra, clavo de olor, anís. Fondo vegetal profundo (romero salvaje, pimentón). Un carácter masculino, terrestre, que exige respeto.',
          boca:
            'Ataque potente pero nunca agresivo. Especiado puro: pimienta que abraza, minerales (grafito, pizarra) y un ahumado persistente. Final seco y ligeramente álgido — como sorber humo de encino en la noche fría.',
        },
      },
      {
        id: 'rajabule-espadin-2016',
        name: 'Rajabule Espadín (2016)',
        agave: 'Espadín',
        subtitle: 'Cosecha 2016',
        price: 980,
        notes: {
          vista: 'Cristalino refulgente. Destellos de luz confirman su transparencia absoluta y pureza.',
          nariz:
            'Cítricos penetrantes (cáscara de naranja, bergamota) entrelazados con humo de encino bien integrado (no invasor). Frutos secos al fondo. El tiempo en vidrio ha pulido cada nota.',
          boca:
            'Suavidad envolvente. Los años de descanso en vidrio han redondeado las aristas del alcohol joven. Predominan frutales, dulzor de agave maduro y un final mineral limpio — el mezcal en su fase de madurez.',
        },
      },
      {
        id: 'rajabule-ensamble-em',
        name: 'Rajabule Ensamble (Espadín | Mexicano)',
        agave: 'Espadín · Mexicano',
        price: 1150,
        notes: {
          vista: 'Cristalino con luminosidad interior. Densidad media que habla de balance alcohólico.',
          nariz:
            'Tensión creativa: cítricos del Espadín chocan con especias del Mexicano. Frutos secos (almendra, avellana) medían entre ambas personalidades. Fondo mineral complejo.',
          boca:
            'Estructura en capas: entrada frutal dulce, cuerpo especiado robusto, final mineral y fumado. La suma es mayor que sus partes — un diálogo entre tradición (Mexicano) e innovación (Espadín).',
        },
      },
      {
        id: 'rajabule-ensamble-etm',
        name: 'Rajabule Ensamble (Espadín | Tobasiche | Mexicano)',
        agave: 'Espadín · Tobasiche · Mexicano',
        price: 1380,
        notes: {
          vista: 'Perlado fino y constante — la firma de un ensamble de tres agaves en perfecta armonía.',
          nariz:
            'Complejidad orquestal. El Tobasiche aporta madera y resina. El Espadín, frescura cítrica. El Mexicano, ancla especiada. Todo unido por un humo profundo que evoca la noche en el campo.',
          boca:
            'Robustez elegante. Capas que revelan sabores nuevos en cada sorbo: dulzor, especias, humo, madera mojada, tierra húmeda. Persistencia larga — el final no termina, resuena.',
        },
      },
    ],
  },
  {
    id: '400lustros',
    name: '400 Lustros',
    region: 'Miahuatlán',
    state: 'Oaxaca',
    description:
      'Expresiones silvestres de la sierra de Miahuatlán, con agaves de maduración excepcional y maestros de generaciones.',
    accentColor: '#8B6E4E',
    products: [
      {
        id: '400l-espadin',
        name: '400 Lustros Espadín',
        agave: 'Espadín',
        price: 980,
        notes: {
          vista:
            'Cristalino refulgente. El perlado (rosario) forma rápidamente — el sello de un mezcal bien fermentado, bien destilado.',
          nariz:
            'Agave cocido profundo, dulces de miel silvestre. Un ahumado ligero y bien controlado que recuerda al carbón vegetal, no opresivo. Fondo de cítricos verdes y hierba de montaña.',
          boca:
            'Sedoso desde el primer contacto. El dulzor del agave maduro contrasta con un ahumado presente pero amable. El final es terroso y mineral — la Sierra de Miahuatlán expresada en vidrio.',
        },
      },
      {
        id: '400l-tobala',
        name: '400 Lustros Tobalá',
        agave: 'Tobalá',
        price: 1780,
        notes: {
          vista:
            'Cuerpo medio con transparencia plateada. Las "lágrimas" descienden con elegancia — cada gota cuenta una historia de lentitud y paciencia.',
          nariz:
            'Floral complejo: rosas silvestres, flores de azahar. Tras la flor, frutas tropicales maduras (mango, papaya), un toque de mantequilla. Trasfondo mineral vivo.',
          boca:
            'Untuoso y noble. La dulzura frutal se abre hacia una estructura más firme, con minerales claros (agua calcárea de pozo). Retrogusto largo y elegante — flores, frutas, minerales en armonía.',
        },
      },
      {
        id: '400l-ensamble-et',
        name: '400 Lustros Ensamble (Espadín | Tobalá)',
        agave: 'Espadín · Tobalá',
        price: 1580,
        notes: {
          vista: 'Brillante y transparente, con destellos plateados claros. Densidad visible pero no pesado.',
          nariz:
            'Fusión armónica: cítricos frescos del Espadín enlazados con flores del Tobalá. Frutos secos como puente entre ambos. Fondo de pino verde y minerales limpios.',
          boca:
            'Explosión sensorial equilibrada. Dulzura frutal al inicio, seguida de especias sutiles y una estructura mineral firme. El humo es presencia, no protagonista. Final persistente y sofisticado.',
        },
      },
      {
        id: '400l-tepeztate',
        name: '400 Lustros Tepeztate',
        agave: 'Tepeztate',
        price: 1950,
        notes: {
          vista: 'Cristalino con matices luminosos. Densidad media-alta que habla de su complejidad inherente.',
          nariz:
            'Lo "salvaje" hecho fragancia: pimiento verde, hierbabuena silvestre, eucalipto. Tierra mojada y raíces vivas. Sin suavidad — es la sierra sin domesticar, pura mineralidad agresiva en buenos términos.',
          boca:
            'Potencia controlada. Especiado puro (pimienta verde, anís) se mezcla con sabores de raíz y mineral. Seco al final, persistente, ligeramente álgido. Es un mezcal para respetar, no para beber apresuradamente.',
        },
      },
    ],
  },
  {
    id: 'migusto',
    name: 'Mi Gusto Es',
    region: 'Matatlán',
    state: 'Oaxaca',
    description:
      'Desde el corazón de Matatlán, capital mundial del mezcal, una colección que celebra la tradición y la innovación.',
    accentColor: '#C27B3E',
    products: [
      {
        id: 'mg-espadin',
        name: 'Mi Gusto Es Espadín',
        agave: 'Espadín',
        price: 850,
        notes: {
          vista: 'Cristalino luminoso, densidad ligera. Perlado limpio que habla de una fermentación espontánea perfecta en Matatlán.',
          nariz:
            'Agave dulce dominante (melaza, miel). Frutas: plátano maduro, manzana. Un ahumado tenue — casi una caricia — que recuerda al carbón vegetal. Aire fresco al fondo.',
          boca:
            'Entrada suave y acercable. En paladar: dulzor cítrico de agave joven, hierba fresca, una textura etérea. Final corto pero satisfecho — es el mezcal de iniciación, la puerta que abre.',
        },
      },
      {
        id: 'mg-tobala',
        name: 'Mi Gusto Es Tobalá',
        agave: 'Tobalá',
        price: 1650,
        notes: {
          vista: 'Cuerpo medio con plateado vivo. Las "lágrimas" brillan como estrellas en la copa — índice de un destilado fino.',
          nariz:
            'Floral silvestre puro: flores de agave, azahar, un toque de resina. Sutileza que impresiona. Fondo mineral de tierra seca y rocas de primavera.',
          boca:
            'Untuoso entrada. Notas frutales (durazno, albaricoque) que recuerdan a piloncillo derretido. Complejo pero balanceado — cada elemento en su lugar. Retrogusto largo de frutos secos y flores.',
        },
      },
      {
        id: 'mg-tepeztate',
        name: 'Mi Gusto Es Tepeztate',
        agave: 'Tepeztate',
        price: 1850,
        notes: {
          vista: 'Cristalino y brillante. Las "lágrimas" descienden lentamente — evidencia de estructura alcohólica bien controlada.',
          nariz:
            'Herbal intenso desde el primer contacto: pimiento verde, hierbabuena agresiva, minerales crudos (sílex, piedra pómez). Carácter salvaje y sin domesticar.',
          boca:
            'Potencia robusta y presente. Especiado puro en el paladar (pimienta, anís), seguido de minerales secos (piedra, tiza). Final seco y persistente — el agave silvestre en su máxima expresión.',
        },
      },
      {
        id: 'mg-ensamble-et',
        name: 'Mi Gusto Es Ensamble (Espadín | Tobalá)',
        agave: 'Espadín · Tobalá',
        price: 1450,
        notes: {
          vista: 'Cristalino con luminosidad palpable. Densidad media que refleja la armonía de sus componentes.',
          nariz:
            'Diálogo aromático perfecto: frutas dulces del Espadín (cítricos, manzana) entrelazadas con flores del Tobalá (azahar, rosa silvestre). Fondo herbal que media ambos.',
          boca:
            'Redondez elegante. La entrada frutal (dulce) transita suavemente hacia una estructura más floral y mineral. El humo es sutil, amable. Retrogusto largo y grato — equilibrio hecho bebida.',
        },
      },
    ],
  },
  {
    id: 'sierranorte',
    name: 'Sierra Norte',
    region: 'Sierra Juárez',
    state: 'Oaxaca',
    description:
      'Whiskey de maíz oaxaqueño elaborado con variedades nativas de la Sierra Juárez. Cada color, un carácter distinto.',
    accentColor: '#D4A017',
    products: [
      {
        id: 'sn-maiz-blanco',
        name: 'Sierra Norte Maíz Blanco',
        agave: 'Maíz Blanco Nativo',
        price: 1200,
        notes: {
          vista: 'Oro pálido y cristalino — la luz atraviesa sin obstáculos, revelando la pureza del maíz blanco de la Sierra Juárez.',
          nariz:
            'Delicadeza en forma líquida. Maíz tostado suave, vainilla sutil (no invasiva), manzana verde recién cortada. Un whiskey que susurra, no grita. Aire fresco de altura.',
          boca:
            'Entrada suave y mantecosa. Sabores de cereales dulces, almendra, un toque de pimienta blanca que sorprende. Es elegante, acercable — el maíz blanco en su mejor expresión.',
        },
      },
      {
        id: 'sn-maiz-amarillo',
        name: 'Sierra Norte Maíz Amarillo',
        agave: 'Maíz Amarillo Nativo',
        price: 1200,
        notes: {
          vista: 'Ámbar claro con reflejos dorados intensos — el color de la cosecha madura.',
          nariz:
            'Energía pura del maíz: palomitas de maíz tostado, caramelo derretido, miel silvestre. Fondo de roble tostado (de la barrica). Un perfil robusto y acogedor.',
          boca:
            'Cuerpo medio y untuoso. Cereales dulces (maíz dulce), pan horneado recién sacado del fuego, canela sutil. Final seco y persistente — la calidez de la sierra en cada sorbo.',
        },
      },
      {
        id: 'sn-maiz-negro',
        name: 'Sierra Norte Maíz Negro',
        agave: 'Maíz Negro Nativo',
        price: 1350,
        notes: {
          vista: 'Ámbar profundo con matices cobrizos casi opacos — el color del misterio y la profundidad.',
          nariz:
            'Complejidad madura. Frutos rojos deshidratados (pasas, ciruela pasa), chocolate negro amargo, cuero antiguo. Un whiskey que habla de tiempo y maduración.',
          boca:
            'Estructura firme y presente. Cacao intenso, cerezas negras, un ahumado muy sutil que proviene del contacto con la barrica. Final largo, especiado y noble — un whiskey para meditación.',
        },
      },
      {
        id: 'sn-maiz-rojo',
        name: 'Sierra Norte Maíz Rojo',
        agave: 'Maíz Rojo Nativo',
        price: 1350,
        notes: {
          vista: 'Ámbar con matices rojizos radiantes — el color del fuego contenido en vidrio.',
          nariz:
            'Dulzura y especias en tensión armónica. Marzapán delicado, nuez moscada, un toque floral inesperado (hibisco). La Sierra Juárez expresada en aromas.',
          boca:
            'Entrada cálida y envolvente. Mermelada de frutas (cereza, fresa), regaliz suave, madera dulce de la barrica. Equilibrio excelente entre dulzor y astringencia — es generoso sin ser pegajoso.',
        },
      },
      {
        id: 'sn-maiz-morado',
        name: 'Sierra Norte Maíz Morado',
        agave: 'Maíz Morado Nativo',
        price: 1350,
        notes: {
          vista: 'Dorado intenso con reflejos caoba profundos. La luz se absorbe, no refleja — índice de concentración alcohólica y madurez.',
          nariz:
            'Frutas tropicales deshidratadas (mango, papaya), vainilla pronunciada (de la barrica), caramelo quemado (notas de roble tostado). Perfil amable y seductor.',
          boca:
            'Textura sedosa que vuelve y vuelve. Maíz dulce auténtico, melaza, confituras. El final recuerda a cáscara de cítricos confitada — amargo controlado que invita a otro sorbo.',
        },
      },
    ],
  },
]

export const allProducts = brands.flatMap((brand) =>
  brand.products.map((product) => ({
    ...product,
    brandName: brand.name,
    brandId: brand.id,
    accentColor: brand.accentColor,
  }))
)

export const sistemaCapitulos = [
  {
    number: '01',
    title: 'El Tiempo',
    image: '/images/cap-01-tiempo.jpg',
    description:
      'El maguey no se apresura. Respetamos los años de maduración biológica necesarios para que la tierra, el clima y los minerales se expresen plenamente en el corazón de la piña. Resistimos la exigencia de volumen y velocidad del mercado industrial, entendiendo que el tiempo es el primer ingrediente innegociable de un destilado honesto.',
  },
  {
    number: '02',
    title: 'La Milpa',
    image: '/images/cap-02-milpa.jpg',
    description:
      'El maíz nativo no es solo un insumo, es el pilar del sistema de soporte y la soberanía alimentaria de las comunidades. Sin la milpa, no hay territorio sustentable. Defendemos las variedades endémicas y el policultivo tradicional frente al monocultivo, asegurando la resiliencia del suelo y la nutrición de quienes trabajan la tierra.',
  },
  {
    number: '03',
    title: 'Polinizadores',
    image: '/images/cap-03-polinizadores.jpg',
    description:
      'Los guardianes invisibles del ecosistema. Protegemos el ciclo de vida reproductivo permitiendo que un porcentaje de la siembra alcance la floración (quiote). Esto alimenta a los murciélagos nectarívoros y aves, garantizando la polinización cruzada y la diversidad genética vital para la supervivencia a largo plazo de los agaves silvestres.',
  },
  {
    number: '04',
    title: 'Fermentación Viva',
    image: '/images/cap-04-fermentacion.jpg',
    description:
      'Procesos honestos que mantienen la microbiología local intacta. Creemos en una fermentación espontánea y abierta, guiada por las levaduras salvajes y bacterias del entorno, sin el uso de aceleradores, levaduras comerciales ni aditivos químicos. Es aquí donde el verdadero \'terroir\' y la huella del clima se impregnan en el perfil líquido.',
  },
  {
    number: '05',
    title: 'El Quiebre',
    image: '/images/cap-05-quiebre.jpg',
    description:
      'Reconocemos que los recursos son finitos. Identificamos el límite exacto donde la demanda del mercado amenaza la regeneración natural y la integridad de la tradición. En ese punto de quiebre, decimos \'no\' al sobre-extractivismo. Nuestro compromiso es con el equilibrio del ecosistema, no con la escalabilidad infinita comercial.',
  },
  {
    number: '06',
    title: 'Tradición',
    image: '/images/cap-06-tradicion.jpg',
    description:
      'Combatimos el marketing vacío con trazabilidad absoluta y transparencia radical. La tradición no es un eslogan, es el conocimiento generacional de las familias productoras. Garantizamos el pago justo, el reconocimiento directo a los maestros operativos y la preservación de las técnicas ancestrales sin apropiación.',
  },
  {
    number: '07',
    title: 'Sostener',
    image: '/images/cap-07-sostener.jpg',
    description:
      '1 Botella = 1 Acción. El acto de consumo se convierte en el motor de la regeneración. Este último paso cierra el ciclo biocultural asegurando que la demanda del mercado nutra el territorio. Cada adquisición financia directamente proyectos de infraestructura natural: desde la reforestación estratégica para retener agua en los acuíferos, hasta el fortalecimiento de bancos de semillas criollas que salvaguardan la diversidad genética frente a la crisis climática.',
  },
]
