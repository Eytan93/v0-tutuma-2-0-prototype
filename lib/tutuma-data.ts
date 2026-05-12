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
            'Cristalino, brillante, con un perlado (rosario) de persistencia media que indica su graduación alcohólica equilibrada.',
          nariz:
            'Aromas intensos a agave cocido, notas profundas de tierra húmeda y un toque sutil de hierba recién cortada.',
          boca:
            'Entrada elegante y untuosa. Predominan sabores dulces que recuerdan al caramelo de agave, seguidos de un final ligeramente amargo y mineral muy sofisticado.',
        },
      },
      {
        id: 'rajabule-tobala',
        name: 'Rajabule Tobalá',
        agave: 'Tobalá',
        price: 1680,
        notes: {
          vista: 'Cuerpo ligero a medio, transparente con matices plateados.',
          nariz:
            'Perfil marcadamente floral (flores blancas) y frutal. Se perciben destellos de manzana verde y un ahumado muy tenue que no opaca el aroma del agave.',
          boca:
            'Dulzor equilibrado con una textura sedosa. Es delicado al paladar con una persistencia larga y un retrogusto que evoca la frescura del campo.',
        },
      },
      {
        id: 'rajabule-mexicano',
        name: 'Rajabule Mexicano',
        agave: 'Mexicano',
        price: 1550,
        notes: {
          vista:
            'Limpio y de gran cuerpo; al agitar la copa, las "piernas" o lágrimas bajan lentamente.',
          nariz:
            'Explosión de notas especiadas (pimienta, clavo) y un carácter vegetal robusto.',
          boca:
            'Ataque potente pero armónico. Sabores terrosos y minerales que llenan el paladar, con un final seco y ligeramente picante que invita a otro trago.',
        },
      },
      {
        id: 'rajabule-espadin-2016',
        name: 'Rajabule Espadín (2016)',
        agave: 'Espadín',
        subtitle: 'Cosecha 2016',
        price: 980,
        notes: {
          vista: 'Transparencia total con destellos luminosos.',
          nariz:
            'Notas cítricas (cáscara de naranja) mezcladas con el aroma dulce del horno de piedra y un ahumado de leña de encino muy bien integrado.',
          boca:
            'Suave y balanceado. El tiempo de reposo en vidrio ha redondeado los sabores, eliminando la agresividad del alcohol y resaltando notas frutales y de agave maduro.',
        },
      },
      {
        id: 'rajabule-ensamble-em',
        name: 'Rajabule Ensamble (Espadín | Mexicano)',
        agave: 'Espadín · Mexicano',
        price: 1150,
        notes: {
          vista: 'Cristalino con buena densidad.',
          nariz:
            'Un equilibrio entre lo frutal del Espadín y lo herbáceo del Mexicano. Aparecen notas de frutos secos y semillas tostadas.',
          boca:
            'Gran estructura. La dulzura inicial se transforma en un final complejo, especiado y con una mineralidad característica del agua de pozo utilizada en su destilación.',
        },
      },
      {
        id: 'rajabule-ensamble-etm',
        name: 'Rajabule Ensamble (Espadín | Tobasiche | Mexicano)',
        agave: 'Espadín · Tobasiche · Mexicano',
        price: 1380,
        notes: {
          vista: 'Brillante, con un perlado fino y constante.',
          nariz:
            'Muy compleja debido al Tobasiche. Notas de madera húmeda, resina y un trasfondo herbal silvestre.',
          boca:
            'Una experiencia robusta. Se perciben capas de sabor que van desde lo dulce hasta lo amaderado, con una textura persistente que deja un recuerdo de humo y tierra.',
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
            'Cristalino, brillante, con un perlado (rosario) que se forma rápidamente al agitar la botella.',
          nariz:
            'Predominan las notas de agave cocido y mieles dulces. Se percibe un ahumado ligero y equilibrado con destellos de cítricos y hierbas silvestres.',
          boca:
            'Es suave y sedoso en el paladar. Presenta un equilibrio entre la dulzura del agave maduro y un final ligeramente ahumado y terroso.',
        },
      },
      {
        id: '400l-tobala',
        name: '400 Lustros Tobalá',
        agave: 'Tobalá',
        price: 1780,
        notes: {
          vista:
            'Limpio y transparente, con una densidad media que se refleja en sus piernas persistentes en la copa.',
          nariz:
            'Perfil aromático muy complejo y delicado. Sobresalen las notas florales (rosas y flores de campo) acompañadas de un aroma a fruta tropical madura.',
          boca:
            'Entrada dulce y frutal. Su cuerpo es robusto pero amable, con un retrogusto largo que deja sensaciones de mantequilla y un toque mineral sutil.',
        },
      },
      {
        id: '400l-ensamble-et',
        name: '400 Lustros Ensamble (Espadín | Tobalá)',
        agave: 'Espadín · Tobalá',
        price: 1580,
        notes: {
          vista: 'Gran brillantez y transparencia, con destellos plateados.',
          nariz:
            'Una mezcla armoniosa que combina el carácter cítrico del Espadín con la elegancia floral del Tobalá. Se detectan notas de frutos secos y un fondo de pino.',
          boca:
            'Ofrece una explosión de sabores; primero el dulzor frutal seguido de una estructura más firme y herbácea. El final es persistente, equilibrando perfectamente el humo con la frescura del agave.',
        },
      },
      {
        id: '400l-tepeztate',
        name: '400 Lustros Tepeztate',
        agave: 'Tepeztate',
        price: 1950,
        notes: {
          vista: 'Cristalino con matices luminosos.',
          nariz:
            'Aroma intensamente herbal y vegetal (pimiento verde, hierbabuena). Es el más "salvaje" de la línea en nariz, con notas marcadas de tierra húmeda.',
          boca:
            'En boca es potente y con carácter. Sus sabores son marcadamente especiados y minerales, con un final seco y persistente que recuerda a las raíces y plantas silvestres.',
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
          vista: 'Cristalino y brillante, con una densidad ligera a media y un perlado limpio.',
          nariz:
            'Aromas dulces predominantes de agave cocido y melaza. Se perciben notas frutales de plátano y manzana, con un ahumado muy tenue que recuerda al carbón vegetal.',
          boca:
            'Entrada suave y fresca. En el paladar es predominantemente dulce y cítrico, con una textura fluida que facilita la apreciación de sus notas de hierba fresca. El final es corto y limpio.',
        },
      },
      {
        id: 'mg-tobala',
        name: 'Mi Gusto Es Tobalá',
        agave: 'Tobalá',
        price: 1650,
        notes: {
          vista: 'Cuerpo medio, transparente con destellos plateados muy vivos.',
          nariz:
            'Perfil marcadamente floral y silvestre. Notas de flores de azahar y un toque sutil de resina de pino y tierra seca.',
          boca:
            'Ataque untuoso. Se confirman las notas frutales y un dulzor que recuerda al piloncillo. Es un mezcal complejo pero muy balanceado, con un final persistente que deja un recuerdo de frutos secos.',
        },
      },
      {
        id: 'mg-tepeztate',
        name: 'Mi Gusto Es Tepeztate',
        agave: 'Tepeztate',
        price: 1850,
        notes: {
          vista: 'Limpio y brillante, con piernas (lágrimas) que descienden con lentitud en la copa.',
          nariz:
            'Aroma herbal intenso. Sobresalen las notas de pimiento verde, hierbas de campo y un carácter mineral muy marcado (piedra húmeda).',
          boca:
            'Potente y estructurado. Especiado en el paladar con sabores que evocan la raíz del agave y un final seco, persistente y ligeramente picante.',
        },
      },
      {
        id: 'mg-ensamble-et',
        name: 'Mi Gusto Es Ensamble (Espadín | Tobalá)',
        agave: 'Espadín · Tobalá',
        price: 1450,
        notes: {
          vista: 'Cristalino con gran luminosidad.',
          nariz:
            'Un equilibrio aromático entre lo frutal y lo floral. Se perciben capas de aroma que van desde el agave dulce hasta un fondo de hierbabuena.',
          boca:
            'Ofrece una experiencia redonda; combina la suavidad de la entrada del Espadín con la complejidad y el cuerpo del Tobalá. El retrogusto es elegante, mezclando notas de humo suave con un final dulce y mineral.',
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
          vista: 'Color oro pálido, muy limpio y brillante.',
          nariz:
            'Aromas sutiles y frescos. Predomina el maíz tostado, notas de vainilla suave y un ligero toque de manzana verde y pera.',
          boca:
            'Es el más ligero de la familia. Entrada suave con sabores de mantequilla, almendras y un final limpio con un toque de pimienta blanca.',
        },
      },
      {
        id: 'sn-maiz-amarillo',
        name: 'Sierra Norte Maíz Amarillo',
        agave: 'Maíz Amarillo Nativo',
        price: 1200,
        notes: {
          vista: 'Tono ámbar claro con reflejos dorados.',
          nariz:
            'Perfil más robusto que el blanco. Notas marcadas de palomitas de maíz, caramelo, miel y un fondo de madera de roble tostada.',
          boca:
            'Cuerpo medio y untuoso. Sabores de cereales dulces, pan horneado y un toque de canela. El final es seco y persistente, con una nota de frutos secos.',
        },
      },
      {
        id: 'sn-maiz-negro',
        name: 'Sierra Norte Maíz Negro',
        agave: 'Maíz Negro Nativo',
        price: 1350,
        notes: {
          vista: 'Color ámbar profundo, cobrizo.',
          nariz:
            'Aroma complejo y profundo. Notas intensas de frutos rojos secos (pasas, ciruela pasa), chocolate oscuro y cuero.',
          boca:
            'Estructura firme. En paladar destacan las notas de cacao, cerezas negras y un ahumado muy sutil proveniente de la barrica. Es un whisky con mucha personalidad y un final largo y especiado.',
        },
      },
      {
        id: 'sn-maiz-rojo',
        name: 'Sierra Norte Maíz Rojo',
        agave: 'Maíz Rojo Nativo',
        price: 1350,
        notes: {
          vista: 'Color ámbar con matices rojizos y brillantes.',
          nariz:
            'Perfil marcadamente dulce y especiado. Notas de marzapán, nuez moscada y un aroma floral inusual que recuerda al hibisco (flor de jamaica).',
          boca:
            'Entrada cálida. Predominan sabores de mermelada de frutas, regaliz y madera dulce. Tiene un equilibrio excelente entre el dulzor del maíz rojo y la astringencia de la barrica.',
        },
      },
      {
        id: 'sn-maiz-morado',
        name: 'Sierra Norte Maíz Morado',
        agave: 'Maíz Morado Nativo',
        price: 1350,
        notes: {
          vista: 'Dorado intenso con reflejos caoba.',
          nariz:
            'Notas dulces de frutas tropicales deshidratadas, vainilla intensa y un toque de caramelo quemado.',
          boca:
            'Textura sedosa. Sabores que evocan al maíz dulce, con notas de melaza y un final que recuerda a la cáscara de cítricos confitada.',
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
    description:
      'El agave es tiempo condensado. Cada planta necesita entre 7 y 35 años para alcanzar su madurez — una paciencia que la industria moderna no conoce.',
  },
  {
    number: '02',
    title: 'La Milpa',
    description:
      'El sistema de cultivo ancestral que alimenta y sostiene. El agave convive con maíz, frijol y calabaza en una simbiosis que la modernidad olvidó.',
  },
  {
    number: '03',
    title: 'Polinizadores',
    description:
      'Murciélagos, colibríes y abejas son los mensajeros silenciosos. Sin ellos, no hay diversidad genética. Sin diversidad, no hay mezcal.',
  },
  {
    number: '04',
    title: 'Fermentación Viva',
    description:
      'Las levaduras silvestres del lugar son únicas. El mezcal artesanal fermenta al aire libre, capturando el espíritu del terruño en cada lote.',
  },
  {
    number: '05',
    title: 'El Quiebre',
    description:
      'La jima — el corte del agave — es un momento de ruptura y de ofrenda. El maestro decide cuándo la planta está lista. Nadie más.',
  },
  {
    number: '06',
    title: 'Tradición',
    description:
      'El conocimiento se transmite de maestro a aprendiz, de generación en generación. No hay receta escrita. Solo memoria viva.',
  },
  {
    number: '07',
    title: 'Sostener',
    description:
      'Tutuma conecta origen con mesa. Cada botella que llega a ti es un acto de conservación: del agave, del maestro, de la comunidad.',
  },
]
