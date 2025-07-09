import type { ProductCategory } from './config.types.ts';

export const productCatalog: ProductCategory[] = [
  {
    id: 'doors',
    title: {
      ru: 'Двери',
      kk: 'Есiктер',
    },
    collections: [
      {
        id: 'classica',
        title: {
          ru: 'CLASSICA',
          kk: 'CLASSICA',
        },
        pageTitle: {
          ru: 'Деревянные двери CLASSICA',
          kk: 'CLASSICA ағаш есіктері',
        },
        items: [
          {
            id: 'classica-iney',
            title: {
              ru: 'CLASSICA',
              kk: 'CLASSICA',

            },
            titleMob: {
              ru: 'CLASSICA, Иней',
              kk: 'CLASSICA, Иней',
            },
            description: {
              ru: 'цвет "Иней"',
              kk: 'түсі "Иней"',
            },
            images: ['/images/doors/classica/iney.webp'],
            price: 286000,
          },
          {
            id: 'classica-iney-glass',
            title: {
              ru: 'CLASSICA',
              kk: 'CLASSICA',
            },
            titleMob: {
              ru: 'CLASSICA, Иней - стекло',
              kk: 'CLASSICA, Иней - стекло',
            },
            description: {
              ru: 'Со стеклом цвет "Иней"',
              kk: 'Шынымен түсі "Иней"',
            },
            images: ['/images/doors/classica/iney-glass.webp'],
            price: 286000,
          },
          {
            id: 'classica-dub',
            title: {
              ru: 'CLASSICA',
              kk: 'CLASSICA',
            },
            titleMob: {
              ru: 'CLASSICA, Дуб',
              kk: 'CLASSICA, Дуб',
            },
            description: {
              ru: 'цвет "Дуб"',
              kk: 'түсі "Дуб"',
            },
            images: ['/images/doors/classica/dub.webp'],
            price: 286000,
          },
        ],
      },
      // другие коллекции
    ],
  },
  {
    id: 'furniture',
    title: {
      ru: 'Мебель',
      kk: 'Жиһаз',
    },
    collections: [
      {
        id: 'consoles',
        title: {
          ru: 'Консоли и тумбы',
          kk: 'Консольдар мен тумбалар',
        },
        items: [],
      },
      {
        id: 'wardrobes',
        title: {
          ru: 'Шкафы и полки',
          kk: 'Шкафтар мен сөрелер',
        },
        items: [],
      },
      {
        id: 'beds',
        title: {
          ru: 'Кровати',
          kk: 'Кереуеттер',
        },
        items: [],
      },
      {
        id: 'armchairs',
        title: {
          ru: 'Кресла',
          kk: 'Креслолар',
        },
        items: [],
      },
    ],
  },
];