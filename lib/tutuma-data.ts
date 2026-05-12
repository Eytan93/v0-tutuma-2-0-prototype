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
      'Rajabule, nace del orgullo de producir mezcales de alta calidad con técnicas 100% artesanales, logrando sabores refinados y sutiles con carácter único, resaltando todo el origen y la riqueza de la tradición mezcalera del terruño Solteco famosa cuna del mezcal Oaxaqueño.',
    accentColor: '#6B7F5E',
    products: [
      {
        id: 'rajabule-arroqueno-2019',
        name: 'Arroqueño 2019',
        agave: 'Arroqueño (Agave americana)',
        subtitle: 'Cosecha 2019',
        price: 1450,
        notes: {
          vista: 'Cristalino de grueso aperlado.',
          nariz:
            'Un complejo aroma, con notas de cacahuate que armonizan con flores, naranja y frutos dulces. Al final resalta un ligero ahumado, con notas de madera, tierra húmeda y el dulce maguey cocido.',
          boca:
            'El maguey cocido y las flores, inundan el paladar con un tenue amargor y suaves notas de humo. En el retrogusto se confirma la complejidad de las notas percibidas en nariz, la frescura de la naranja, el mango y las hierbas del campo, armoniza con los frutos secos, la madera y mantequilla.',
        },
      },
      {
        id: 'rajabule-tobala-2022',
        name: 'Tobalá 2022',
        agave: 'Tobalá (Agave potatorum)',
        subtitle: 'Cosecha 2022',
        price: 1680,
        notes: {
          vista: 'Cristalino, limpio y brillante.',
          nariz:
            'Resalta el dulce maguey cocido en primera impresión, con un tenue olor a barro y petricor. Seguido de una fresca sensación cítrica y floral, invadiendo en nariz flores del campo, azahares y jazmín. Resaltan las notas finales de frutos secos, pasas y vainilla.',
          boca:
            'Suave y untuoso al pasar por la boca, resalta con potencia los sabores herbales a té limón y poleo, que invaden al paladar con el paso de los minutos, reafirmando en el retrogusto el dulce maguey cocido.',
        },
      },
      {
        id: 'rajabule-mexicano-2022',
        name: 'Mexicano 2022',
        agave: 'Mexicano (Agave rhodacantha)',
        subtitle: 'Cosecha 2022',
        price: 1550,
        notes: {
          vista:
            'Cristalino como buen mezcal joven, con ligeras matices verdes provenientes del agave, de grueso aperlado.',
          nariz:
            'Aromas frutales a plátano, piña y manzana roja, con frescas notas de anís, hierbas del campo, flores y tierra mojada. Al final destellos ahumados de nuez, madera y maguey cocido.',
          boca:
            'Poderoso con un ligero toque amargo, de gran permanencia en boca, confirma los sabores frutales, armonizando con una fresca sensación de hierba seca, barro y un firme retrogusto a maguey cocido.',
        },
      },
      {
        id: 'rajabule-espadin-2016',
        name: 'Espadín 2016',
        agave: 'Espadín (Agave angustifolia)',
        subtitle: 'Cosecha 2016',
        price: 980,
        notes: {
          vista: 'Cristalino, con ligeras matices amarillas.',
          nariz:
            'Frescos aromas a hierba húmeda y frutas verdes, con notas cítricas y destellos finales de barro y tierra seca.',
          boca:
            'Poderoso con un ligero toque amargo, de gran permanencia en boca, confirma los sabores frutales, armonizando con una fresca sensación de hierba seca, barro y un firme retrogusto a maguey cocido.',
        },
      },
      {
        id: 'rajabule-ensamble-em-2016',
        name: 'Espadín | Mexicano 2016',
        agave: 'Espadín · Mexicano',
        subtitle: 'Ensamble 2016',
        price: 1150,
        notes: {
          vista: 'Cristalino, con ligeros matices amarillos.',
          nariz:
            'Firmes destellos florales de azahar, seguidos de frutos dulces, plátano y un matiz amaderado de leña húmeda y copal.',
          boca:
            'Muestra carácter, pero fresco y de paso suave. Se reafirman en paladar el plátano y los matices de leña húmeda y copal. Cierra armoniosamente con un retrogusto de lima y naranja, con un destello final de hierbas y flores.',
        },
      },
      {
        id: 'rajabule-ensamble-etm-2016',
        name: 'Espadín | Tobasiche | Mexicano 2016',
        agave: 'Espadín · Tobasiche · Mexicano',
        subtitle: 'Ensamble 2016',
        price: 1380,
        notes: {
          vista: 'Cristalino, con ligeras matices amarillas.',
          nariz:
            'Un complejo y potente aromático, con primeros destellos de jazmín y naranja. Las notas especiadas de clavo, pimienta y vainilla, armonizan con la frescura de las hierbas del campo y un tenue petricor. El maguey cocido y ligeras notas de humo inundan un breve final.',
          boca:
            'De fuerte carácter, reafirma en el retrogusto su complejidad aromática. Los sabores afrutados, la naranja y manzana inundan el paladar. La mezcla de chocolate y clavo, hacen una explosión de sabor al chocar con la frescura del té limón y las hierbas del campo. El maguey cocido y el tenue ahumado, se perciben al final, con gran persistencia.',
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
      'José Lucas es el heredero de una tradición mezcalera que abarca nueve generaciones. Ubicado en San Isidro Guishe, San Luis Amatlán, el palenque familiar destila magueyes endémicos de la región, reconocida como una cuna del mezcal en Oaxaca.',
    accentColor: '#8B6E4E',
    products: [
      {
        id: '400l-tepeztate',
        name: 'Tepeztate',
        agave: 'Tepeztate (Agave marmorata)',
        price: 1950,
        notes: {
          vista: 'Cristalino de fino aperlado.',
          nariz:
            'Complejo y potente, con cuerpo, pero suave y untuoso. Presenta aromas herbales y terrosos, complementados con el dulzor del maguey cocido. Notas de cáscaras de limón y flor de azahar se mezclan delicadamente con matices de frambuesa.',
          boca:
            'Se confirman las notas de maguey cocido y tierra, acompañadas por sabores a raíces de árbol y frutos rojos. Destacan también la frambuesa y toques cítricos, junto con un sutil sabor a plátano y frutos secos como el cacahuate.',
        },
      },
      {
        id: '400l-cucharillo',
        name: 'Cucharillo',
        agave: 'Cucharillo (Dasylirion serratifolium)',
        price: 1780,
        notes: {
          vista: 'Cristalino de grueso aperlado.',
          nariz:
            'Se perciben aromas frutales, destacando frutos tropicales y plátano maduro, acompañados de notas de frutos secos. También se aprecian aromas terrosos, como tierra seca, junto con un sutil toque de especias y semillas.',
          boca:
            'Potente y complejo, con una textura en boca que denota cuerpo y armonía. En boca se confirman los aromas terrosos, como la tierra seca y la raíz de árbol. Resaltan también sabores a frutos cítricos y a manzana verde, acompañados de matices de especias, hierba seca y delicadas notas florales.',
        },
      },
      {
        id: '400l-madrecuishe',
        name: 'Madrecuishe',
        agave: 'Madrecuishe (Agave karwinskii)',
        price: 1680,
        notes: {
          vista: 'Cristalino de fino aperlado.',
          nariz:
            'Potente y complejo, con una textura untuosa y armoniosa. Se aprecian aromas a tierra seca y petricor, que se mezclan con frescas notas herbales, maguey cocido y un toque de caramelo. También emergen matices de frutos tropicales y hierba del campo.',
          boca:
            'Los sabores confirman los aromas, destacando la tierra seca y el petricor. Se perciben sabores frutales a manzana y membrillo, acompañados de delicadas notas florales que completan esta experiencia sensorial.',
        },
      },
      {
        id: '400l-mexicano-sierrudo',
        name: 'Mexicano Sierrudo',
        agave: 'Mexicano Sierrudo (Agave americana)',
        price: 1850,
        notes: {
          vista: 'Cristalino con un perlado grueso.',
          nariz:
            'Un complejo aroma donde resalta primero las notas frutales de grosella y manzana. Se entrelazan con aromas terrosos de tierra seca y raíces de árbol, acompañados de ligeros matices florales. Se perciben también sutiles notas de pencas de maguey y cacahuate.',
          boca:
            'Los sabores frutales se confirman en boca, junto con el dulzor del maguey cocido y caramelo. Un toque herbal a té de limón y menta complementa el perfil, seguido por un ligero sabor a tierra seca, creando una experiencia armoniosa y con cuerpo.',
        },
      },
      {
        id: '400l-ensamble-3-agaves',
        name: 'Ensamble de Tres Agaves',
        agave: 'Espadín · Tobalá · Mexicano',
        price: 1580,
        notes: {
          vista: '',
          nariz: '',
          boca: '',
        },
      },
    ],
  },
  {
    id: 'migustoes',
    name: 'Mi Gusto Es',
    region: 'Santiago Matatlán',
    state: 'Oaxaca',
    description:
      'Mi Gusto Es es un proyecto familiar fundado en 1984 por Martín García Sernas y Simona López Hernández en Santiago Matatlán, Oaxaca, con el propósito de mantener vivo el legado ancestral del mezcal. Los magueyes se cultivan en pequeñas parcelas agroforestales junto al maíz, siguiendo la tradición de los "Metepantles".',
    accentColor: '#A0522D',
    products: [
      {
        id: 'mg-espadin',
        name: 'Espadín',
        agave: 'Espadín (Agave angustifolia)',
        price: 850,
        notes: {
          vista: 'Cristalino con ligeros matices amarillos.',
          nariz: 'Maguey cocido, aromas cítricos y ahumado ligero.',
          boca:
            'Agradable sabor cítrico, suave y de dulzor sutil, ahumado ligero y de gran persistencia en boca.',
        },
      },
      {
        id: 'mg-espadin-con-gusano',
        name: 'Espadín con Gusano',
        agave: 'Espadín (Agave angustifolia)',
        price: 950,
        notes: {
          vista: 'Cristalino con ligeros matices amarillos.',
          nariz: 'Maguey cocido, aromas cítricos y ahumado ligero.',
          boca:
            'Agradable sabor cítrico, suave y de dulzor sutil, ahumado ligero y de gran persistencia en boca.',
        },
      },
      {
        id: 'mg-espadin-capon',
        name: 'Espadín Capón',
        agave: 'Espadín Capón (Agave angustifolia)',
        price: 1100,
        notes: {
          vista: 'Cristalino con ligeros matices amarillos.',
          nariz: 'Maguey cocido, aromas cítricos y ahumado ligero.',
          boca:
            'Agradable sabor cítrico, suave y de dulzor sutil, ahumado ligero y de gran persistencia en boca.',
        },
      },
      {
        id: 'mg-espadin-reposado',
        name: 'Espadín Reposado',
        agave: 'Espadín (Agave angustifolia)',
        price: 1200,
        notes: {
          vista: '',
          nariz: 'Maguey cocido, aromas cítricos y ahumado ligero.',
          boca:
            'Agradable sabor cítrico, suave y de dulzor sutil, ahumado ligero y de gran persistencia en boca.',
        },
      },
      {
        id: 'mg-espadin-anejo',
        name: 'Espadín Añejo',
        agave: 'Espadín (Agave angustifolia)',
        price: 1400,
        notes: {
          vista:
            'Limpio y brillante, con un atractivo tono ámbar profundo, reflejo del añejamiento en barricas de roble blanco americano.',
          nariz: 'Ligeros aromas a tierra, humo, fruta madura y caramelo.',
          boca:
            'Agradable sabor cítrico, suave y de dulzor sutil, ahumado ligero y de gran persistencia en boca.',
        },
      },
      {
        id: 'mg-tobala',
        name: 'Tobalá',
        agave: 'Tobalá (Agave potatorum)',
        price: 1650,
        notes: {
          vista: 'Claro y cristalino, perla mediana de duración corta.',
          nariz: 'Fuerte presencia fresca, notas de manzana con leve esencias herbal.',
          boca:
            'Se aprecia notas ligeras de frutas dulces y flores rojas con final láctico.',
        },
      },
      {
        id: 'mg-tepeztate',
        name: 'Tepeztate',
        agave: 'Tepeztate (Agave marmorata)',
        price: 1850,
        notes: {
          vista: 'Claro y cristalino, perla mediana de duración corta.',
          nariz: 'Aroma terroso húmedo con sutil frescura.',
          boca: 'Sabor intenso a frutos secos como pera y mango, con recaída a sabor herbal.',
        },
      },
      {
        id: 'mg-espadin-pan-de-muerto',
        name: 'Espadín Pan de Muerto',
        agave: 'Espadín (Agave angustifolia)',
        subtitle: 'Edición Especial',
        price: 1100,
        notes: {
          vista: 'Cristalino y brillante, con ligeros matices dorados.',
          nariz:
            'Aromas dulces y especiados que recuerdan al pan de muerto: anís, cáscara de naranja y agave cocido, con un sutil fondo ahumado.',
          boca:
            'Suave y equilibrado, con notas de pan dulce, especias y un ahumado ligero que redondea el perfil.',
        },
      },
      {
        id: 'mg-espadin-cempasuchil',
        name: 'Espadín Cempasúchil',
        agave: 'Espadín (Agave angustifolia)',
        subtitle: 'Edición Especial',
        price: 1100,
        notes: {
          vista: 'Cristalino y brillante, con reflejos plateados.',
          nariz: 'Elegante y floral, con notas de agave cocido, cempasúchil, miel y un toque cítrico.',
          boca:
            'Sedoso y herbal, con sabores florales, cáscara de naranja y un amargor fino que equilibra el dulzor.',
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
      'Whiskey Sierra Norte nace para preservar las variedades ancestrales de maíz oaxaqueño y la cultura agrícola que las sostiene. Elaborado con 85% maíz nativo libre de transgénicos y 15% cebada malteada, es un whiskey artesanal que celebra la biodiversidad, el trabajo campesino y más de 7,000 años de historia agrícola en México.',
    accentColor: '#D4A017',
    products: [
      {
        id: 'sn-maiz-blanco',
        name: 'Single Barrel Maíz Blanco',
        agave: 'Maíz Blanco Nativo',
        price: 1200,
        notes: {
          vista: '',
          nariz: '',
          boca: 'La dulzura luminosa del Blanco. Doblemente destilado en alambiques de cobre y añejado en barricas de roble francés.',
        },
      },
      {
        id: 'sn-maiz-amarillo',
        name: 'Single Barrel Maíz Amarillo',
        agave: 'Maíz Amarillo Nativo',
        price: 1200,
        notes: {
          vista: '',
          nariz: '',
          boca: 'La suavidad dorada del Amarillo. Seleccionado dentro del Top 20 de los mejores whiskies del mundo por Whisky Advocate. Doblemente destilado en alambiques de cobre y añejado en barricas de roble francés.',
        },
      },
      {
        id: 'sn-maiz-rojo',
        name: 'Single Barrel Maíz Rojo',
        agave: 'Maíz Rojo Nativo',
        price: 1350,
        notes: {
          vista: '',
          nariz: '',
          boca: 'La estructura especiada del Rojo. Doblemente destilado en alambiques de cobre y añejado en barricas de roble francés.',
        },
      },
      {
        id: 'sn-maiz-morado',
        name: 'Single Barrel Maíz Morado',
        agave: 'Maíz Morado Nativo',
        price: 1350,
        notes: {
          vista: '',
          nariz: '',
          boca: 'La riqueza frutal del Morado. Doblemente destilado en alambiques de cobre y añejado en barricas de roble francés.',
        },
      },
      {
        id: 'sn-maiz-negro',
        name: 'Single Barrel Maíz Negro',
        agave: 'Maíz Negro Nativo',
        price: 1350,
        notes: {
          vista: '',
          nariz: '',
          boca: 'La elegancia tostada del Negro. Doblemente destilado en alambiques de cobre y añejado en barricas de roble francés.',
        },
      },
      {
        id: 'sn-maiz-arcoiris',
        name: 'Single Barrel Maíz Arcoiris',
        agave: 'Maíz Arcoiris Nativo',
        price: 1450,
        notes: {
          vista: '',
          nariz: '',
          boca: 'La vitalidad del Arcoíris. Doblemente destilado en alambiques de cobre y añejado en barricas de roble francés.',
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
