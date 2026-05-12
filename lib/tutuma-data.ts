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
      'El arte de producir mezcal de alta calidad de forma sustentable. Sabores refinados y sutiles con carácter único, resaltando todo el origen y la riqueza de la tradición mezcalera del terruño Solteco.',
    accentColor: '#6B7F5E',
    products: [
      {
        id: 'rajabule-arroqueno-2019',
        name: 'Arroqueño 2019',
        agave: 'Arroqueño',
        subtitle: 'Cosecha 2019',
        price: 1450,
        notes: {
          vista:
            'Cristalino como buen mezcal joven, con ligeros matices verdes provenientes del agave, de grueso aperlado.',
          nariz:
            'Aromas frutales a plátano, piña y manzana roja, con frescas notas de anís, hierbas del campo, flores y tierra mojada. Al final destellos ahumados de nuez, madera y maguey cocido.',
          boca:
            'Poderoso con un ligero toque amargo, de gran permanencia en boca, confirma los sabores frutales, armonizando con una fresca sensación de hierba seca, barro y un firme retrogusto a maguey cocido.',
        },
      },
      {
        id: 'rajabule-tobala-2022',
        name: 'Tobalá 2022',
        agave: 'Tobalá',
        subtitle: 'Cosecha 2022',
        price: 1680,
        notes: {
          vista:
            'Cristalino como buen mezcal joven, con ligeros matices verdes provenientes del agave, de grueso aperlado.',
          nariz:
            'Aromas frutales a plátano, piña y manzana roja, con frescas notas de anís, hierbas del campo, flores y tierra mojada. Al final destellos ahumados de nuez, madera y maguey cocido.',
          boca:
            'Poderoso con un ligero toque amargo, de gran permanencia en boca, confirma los sabores frutales, armonizando con una fresca sensación de hierba seca, barro y un firme retrogusto a maguey cocido.',
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
            'Cristalino como buen mezcal joven, con ligeros matices verdes provenientes del agave, de grueso aperlado.',
          nariz:
            'Aromas frutales a plátano, piña y manzana roja, con frescas notas de anís, hierbas del campo, flores y tierra mojada. Al final destellos ahumados de nuez, madera y maguey cocido.',
          boca:
            'Poderoso con un ligero toque amargo, de gran permanencia en boca, confirma los sabores frutales, armonizando con una fresca sensación de hierba seca, barro y un firme retrogusto a maguey cocido.',
        },
      },
      {
        id: 'rajabule-espadin-2016',
        name: 'Espadín 2016',
        agave: 'Espadín',
        subtitle: 'Cosecha 2016',
        price: 980,
        notes: {
          vista:
            'Cristalino como buen mezcal joven, con ligeros matices verdes provenientes del agave, de grueso aperlado.',
          nariz:
            'Aromas frutales a plátano, piña y manzana roja, con frescas notas de anís, hierbas del campo, flores y tierra mojada. Al final destellos ahumados de nuez, madera y maguey cocido.',
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
          vista:
            'Cristalino como buen mezcal joven, con ligeros matices verdes provenientes del agave, de grueso aperlado.',
          nariz:
            'Aromas frutales a plátano, piña y manzana roja, con frescas notas de anís, hierbas del campo, flores y tierra mojada. Al final destellos ahumados de nuez, madera y maguey cocido.',
          boca:
            'Poderoso con un ligero toque amargo, de gran permanencia en boca, confirma los sabores frutales, armonizando con una fresca sensación de hierba seca, barro y un firme retrogusto a maguey cocido.',
        },
      },
      {
        id: 'rajabule-ensamble-etm-2016',
        name: 'Espadín | Tobasiche | Mexicano 2016',
        agave: 'Espadín · Tobasiche · Mexicano',
        subtitle: 'Ensamble 2016',
        price: 1380,
        notes: {
          vista:
            'Cristalino, con ligeros matices amarillos.',
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
      '8 generaciones dedicadas con esmero a la tradición y la pasión del mezcal. Mezcales de alta calidad mediante técnicas 100% artesanales, destacando la riqueza de las tierras en San Isidro Guishe.',
    accentColor: '#8B6E4E',
    products: [
      {
        id: '400l-tepeztate',
        name: 'Tepeztate',
        agave: 'Tepeztate (Agave marmorata)',
        price: 1950,
        notes: {
          vista:
            'Cristalino de fino aperlado.',
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
          vista:
            'Cristalino de grueso aperlado.',
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
          vista:
            'Cristalino de fino aperlado.',
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
          vista:
            'Cristalino con un perlado grueso.',
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
          vista:
            'Cristalino de fino aperlado, con brillo intenso.',
          nariz:
            'Fusión armónica de tres personalidades: dulzor del Espadín, elegancia floral del Tobalá y carácter especiado del Mexicano. Notas de maguey cocido, frutos secos y un fondo mineral.',
          boca:
            'Equilibrio excepcional entre dulzura, complejidad y potencia. Entrada frutal que evoluciona hacia especias y minerales. Final largo con persistencia de maguey cocido y un toque ahumado sutil.',
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
      'Whiskey mexicano elaborado con maíces nativos y agroecológicos de Oaxaca. 85% maíz nativo libre de transgénicos y 15% cebada malteada, celebrando la biodiversidad y más de 7,000 años de historia agrícola.',
    accentColor: '#D4A017',
    products: [
      {
        id: 'sn-maiz-blanco',
        name: 'Single Barrel Maíz Blanco',
        agave: 'Maíz Blanco Nativo',
        price: 1200,
        notes: {
          vista:
            'Dorado pálido y cristalino, con reflejos luminosos que revelan su pureza.',
          nariz:
            'Delicado y sutil. Notas de maíz tostado, vainilla suave y manzana verde. Un perfil fresco y elegante con aire de altura.',
          boca:
            'Entrada suave y mantecosa. Sabores de cereales dulces, almendra y un toque de pimienta blanca. Final limpio y elegante.',
        },
      },
      {
        id: 'sn-maiz-amarillo',
        name: 'Single Barrel Maíz Amarillo',
        agave: 'Maíz Amarillo Nativo',
        price: 1200,
        notes: {
          vista:
            'Ámbar claro con reflejos dorados intensos.',
          nariz:
            'Robusto y acogedor. Palomitas de maíz tostado, caramelo, miel silvestre y un fondo de roble tostado.',
          boca:
            'Cuerpo medio y untuoso. Cereales dulces, pan horneado, canela sutil. Final seco y persistente con calidez envolvente.',
        },
      },
      {
        id: 'sn-maiz-rojo',
        name: 'Single Barrel Maíz Rojo',
        agave: 'Maíz Rojo Nativo',
        price: 1350,
        notes: {
          vista:
            'Ámbar con matices rojizos radiantes.',
          nariz:
            'Dulce y especiado. Marzapán, nuez moscada y un toque floral de hibisco.',
          boca:
            'Entrada cálida. Mermelada de frutas, regaliz suave, madera dulce. Equilibrio excelente entre dulzor y astringencia.',
        },
      },
      {
        id: 'sn-maiz-morado',
        name: 'Single Barrel Maíz Morado',
        agave: 'Maíz Morado Nativo',
        price: 1350,
        notes: {
          vista:
            'Dorado intenso con reflejos caoba profundos.',
          nariz:
            'Frutas tropicales deshidratadas, vainilla pronunciada, caramelo quemado. Perfil seductor.',
          boca:
            'Textura sedosa. Maíz dulce auténtico, melaza, confituras. Final con cáscara de cítricos confitada.',
        },
      },
      {
        id: 'sn-maiz-negro',
        name: 'Single Barrel Maíz Negro',
        agave: 'Maíz Negro Nativo',
        price: 1350,
        notes: {
          vista:
            'Ámbar profundo con matices cobrizos.',
          nariz:
            'Complejo y maduro. Frutos rojos deshidratados, chocolate negro amargo, cuero antiguo.',
          boca:
            'Estructura firme. Cacao intenso, cerezas negras, ahumado sutil de barrica. Final largo, especiado y noble.',
        },
      },
      {
        id: 'sn-maiz-arcoiris',
        name: 'Single Barrel Maíz Arcoiris',
        agave: 'Maíz Arcoiris Nativo',
        price: 1450,
        notes: {
          vista:
            'Dorado brillante con reflejos multicolor, testimonio de la diversidad de maíces.',
          nariz:
            'Complejo y multifacético. Combina notas de todos los maíces: frutas, especias, caramelo y flores.',
          boca:
            'Una experiencia única. Capas de sabor que evocan la biodiversidad de la Sierra. Final largo y memorable.',
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
