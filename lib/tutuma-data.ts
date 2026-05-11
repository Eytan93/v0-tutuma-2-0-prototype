export interface Product {
  id: string
  name: string
  year?: string
  price: number
  vista: string
  nariz: string
  boca: string
}

export interface Brand {
  id: string
  name: string
  region: string
  state: string
  description: string
  color: string
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
    color: '#6B7F5E',
    products: [
      {
        id: 'rajabule-arroqueno-2019',
        name: 'Arroqueño',
        year: '2019',
        price: 1450,
        vista: 'Cristalino de grueso aperlado.',
        nariz: 'Notas de cacahuate, flores blancas, naranja, madera y tierra húmeda.',
        boca: 'Maguey cocido, amargor tenue, humo suave, mango y mantequilla.',
      },
      {
        id: 'rajabule-tobala-2022',
        name: 'Tobalá',
        year: '2022',
        price: 1680,
        vista: 'Cristalino brillante.',
        nariz: 'Tierra húmeda del terruño Solteco, notas frutales dulces.',
        boca: 'Gran cuerpo, dulzor intenso y retrogusto floral persistente.',
      },
      {
        id: 'rajabule-mexicano-2022',
        name: 'Mexicano',
        year: '2022',
        price: 1550,
        vista: 'Cristalino.',
        nariz: 'Notas minerales y herbales frescas, penca asada.',
        boca: 'Carácter indomable, fuerza mineral, final seco y terroso.',
      },
      {
        id: 'rajabule-espadin-2016',
        name: 'Espadín',
        year: '2016',
        price: 980,
        vista: 'Transparente y limpio.',
        nariz: 'Cítricos frescos, ahumado elegante y equilibrado.',
        boca: 'Suave, dulzor sutil de agave maduro, persistencia media.',
      },
      {
        id: 'rajabule-ensamble-em-2016',
        name: 'Ensamble Espadín | Mexicano',
        year: '2016',
        price: 1150,
        vista: 'Cristalino luminoso.',
        nariz: 'Equilibrio cítrico-mineral, notas de campo después de la lluvia.',
        boca: 'Dulzor inicial de espadín que evoluciona a la robustez del mexicano.',
      },
      {
        id: 'rajabule-ensamble-etm-2016',
        name: 'Ensamble Espadín | Tobasiche | Mexicano',
        year: '2016',
        price: 1380,
        vista: 'Cristalino con destellos plata.',
        nariz: 'Madera húmeda, agave tostado y matices herbáceos.',
        boca: 'Evolución en tres tiempos; entrada dulce, medio herbal y final persistente.',
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
    color: '#8B6E4E',
    products: [
      {
        id: '400l-tepeztate',
        name: 'Tepeztate',
        price: 1950,
        vista: 'Cristalino de fino aperlado.',
        nariz: 'Complejo y potente, aromas herbales, limón, azahar y frambuesa.',
        boca: 'Maguey cocido, raíces, frutos rojos, cítricos y cacahuate.',
      },
      {
        id: '400l-sierrudo',
        name: 'Sierrudo',
        price: 1780,
        vista: 'Cristalino con perlado grueso.',
        nariz: 'Grosella, manzana, tierra seca y matices florales.',
        boca: 'Dulzor de maguey, caramelo, té de limón, menta y tierra seca.',
      },
      {
        id: '400l-madrecuishe',
        name: 'Madrecuishe',
        price: 1650,
        vista: 'Cristalino de fino aperlado.',
        nariz: 'Tierra seca (petricor), herbal, maguey cocido y frutos tropicales.',
        boca: 'Manzana, membrillo, flores blancas y final mineral.',
      },
      {
        id: '400l-cucharillo',
        name: 'Cucharillo',
        price: 1420,
        vista: 'Transparente brillante.',
        nariz: 'Pasto recién cortado, hierbas silvestres y frescura mineral.',
        boca: 'Perfil vegetal pronunciado, fresco, con un final seco y limpio.',
      },
      {
        id: '400l-ensamble-3agaves',
        name: 'Ensamble 3 Agaves',
        price: 1580,
        vista: 'Cristalino, lágrimas lentas.',
        nariz: 'Amalgama de tierra, humo ligero y flores de campo.',
        boca: 'Sedoso, equilibrio de agaves capón, final prolongado y elegante.',
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
    color: '#C27B3E',
    products: [
      {
        id: 'mg-espadin-joven',
        name: 'Espadín Joven',
        price: 750,
        vista: 'Transparente.',
        nariz: 'Cítricos frescos y agave limpio.',
        boca: 'Suave y agradable, con final refrescante.',
      },
      {
        id: 'mg-espadin-gusano',
        name: 'Espadín con Gusano',
        price: 890,
        vista: 'Tonos dorados sutiles.',
        nariz: 'Salinidad característica y agave maduro.',
        boca: 'Umami terroso, profundidad inusual.',
      },
      {
        id: 'mg-espadin-reposado',
        name: 'Espadín Reposado',
        price: 980,
        vista: 'Ámbar claro dorado.',
        nariz: 'Vainilla, caramelo y madera dulce.',
        boca: 'Frutos secos, equilibrio entre agave y roble.',
      },
      {
        id: 'mg-espadin-anejo',
        name: 'Espadín Añejo',
        price: 1250,
        vista: 'Cobrizo profundo.',
        nariz: 'Chocolate oscuro y tabaco curado.',
        boca: 'Profundidad de barrica, largo y sedoso.',
      },
      {
        id: 'mg-espadin-48-capon',
        name: 'Espadín 48% Capón',
        price: 1050,
        vista: 'Cristalino brillante.',
        nariz: 'Ahumado ligero, agave asado, mineral.',
        boca: 'Fuerza equilibrada, persistencia larga y seca.',
      },
      {
        id: 'mg-tepeztate-tobala',
        name: 'Tepeztate / Tobalá',
        price: 1650,
        vista: 'Cristalino de fino aperlado.',
        nariz: 'Notas silvestres, florales e intensas típicas de Matatlán.',
        boca: 'Carácter silvestre pronunciado, retrogusto persistente.',
      },
      {
        id: 'mg-pan-muerto',
        name: 'Ed. Especial Pan de Muerto / Cempasúchil',
        price: 1400,
        vista: 'Cristalino ceremonial.',
        nariz: 'Azahar, notas tostadas y cempasúchil.',
        boca: 'Ritualidad y especias, homenaje a la tradición.',
      },
    ],
  },
  {
    id: 'sierranorte',
    name: 'Sierra Norte',
    region: 'Sierra Juárez',
    state: 'Oaxaca',
    description:
      'Whiskey de maíz oaxaqueño, elaborado con variedades nativas de la Sierra Juárez. Cada color, un carácter distinto.',
    color: '#D4A017',
    products: [
      {
        id: 'sn-maiz-blanco',
        name: 'Maíz Blanco',
        price: 1200,
        vista: 'Paja claro y luminoso.',
        nariz: 'Manzana verde, vainilla fresca y maíz cocido.',
        boca: 'Dulzura luminosa, suave y accesible.',
      },
      {
        id: 'sn-maiz-amarillo',
        name: 'Maíz Amarillo',
        price: 1200,
        vista: 'Dorado brillante.',
        nariz: 'Miel de abeja, mantequilla y cereales tostados.',
        boca: 'Redondo y armónico, persistencia agradable.',
      },
      {
        id: 'sn-maiz-morado',
        name: 'Maíz Morado',
        price: 1350,
        vista: 'Ámbar profundo con destellos violáceos.',
        nariz: 'Maíz tostado, ciruela y frutos silvestres.',
        boca: 'Riqueza frutal, estructura compleja.',
      },
      {
        id: 'sn-maiz-negro',
        name: 'Maíz Negro',
        price: 1350,
        vista: 'Cobre oscuro intenso.',
        nariz: 'Café de olla y cacao amargo.',
        boca: 'Elegancia tostada, final largo y sofisticado.',
      },
      {
        id: 'sn-maiz-rojo',
        name: 'Maíz Rojo',
        price: 1350,
        vista: 'Cobrizo cálido.',
        nariz: 'Canela, clavo y fruta roja madura.',
        boca: 'Estructura especiada, cálida y persistente.',
      },
      {
        id: 'sn-maiz-arcoiris',
        name: 'Maíz Arcoíris',
        price: 1500,
        vista: 'Dorado brillante multimatices.',
        nariz: 'Complejidad de múltiples granos nativos.',
        boca: 'Vibrante y expresivo, el alma de la Sierra.',
      },
    ],
  },
]

export const allProducts = brands.flatMap((brand) =>
  brand.products.map((product) => ({
    ...product,
    brandName: brand.name,
    brandId: brand.id,
  }))
)
