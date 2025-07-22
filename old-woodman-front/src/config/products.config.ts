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
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
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
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
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
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
            },
            images: ['/images/doors/classica/dub.webp'],
            price: 286000,
          },
        ],
      },
      {
        id: 'loft',
        title: {
          ru: 'LOFT',
          kk: 'LOFT',
        },
        pageTitle: {
          ru: 'Комбинированные двери LOFT',
          kk: 'LOFT ҚҰРАМДАСТЫРЫЛҒАН ЕСІГІ',
        },
        items: [
          {
            id: 'loft-teak',
            title: {
              ru: 'LOFT',
              kk: 'LOFT',

            },
            titleMob: {
              ru: 'LOFT, Тик',
              kk: 'LOFT, Тик',
            },
            description: {
              ru: 'цвет "Тик"',
              kk: 'түсі "Тик"',
            },
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
            },
            images: ['/images/doors/loft/teak.webp'],
            price: 286000,
          },
          {
            id: 'loft-teak-duo',
            title: {
              ru: 'LOFT',
              kk: 'LOFT',
            },
            titleMob: {
              ru: 'LOFT, Тик, Дуо',
              kk: 'LOFT, Тик, Дуо',
            },
            description: {
              ru: 'Цвет "Тик", Дуо',
              kk: 'Цвет "Тик", Дуо',
            },
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
            },
            images: ['/images/doors/loft/teak-duo.webp'],
            price: 540000,
          },
        ],
      },
      {
        id: 'deco',
        title: {
          ru: 'DECO',
          kk: 'DECO',
        },
        pageTitle: {
          ru: 'Деревянная дверь DECO',
          kk: 'DECO АҒАШ ЕСІГІ',
        },
        items: [
          {
            id: 'deco-oak',
            title: {
              ru: 'DECO',
              kk: 'DECO',

            },
            titleMob: {
              ru: 'DECO, Дуб',
              kk: 'DECO, Дуб',
            },
            description: {
              ru: 'цвет "Дуб"',
              kk: 'түсі "Дуб"',
            },
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
            },
            images: ['/images/doors/deco/deco.webp'],
            price: 286000,
          },
          {
            id: 'deco-oak-duo',
            title: {
              ru: 'DECO',
              kk: 'DECO',
            },
            titleMob: {
              ru: 'DECO, Дуб, Дуо',
              kk: 'DECO, Дуб, Дуо',
            },
            description: {
              ru: 'Цвет "Дуб", Дуо',
              kk: 'Цвет "Дуб", Дуо',
            },
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
            },
            images: ['/images/doors/deco/deco-duo.webp'],
            price: 540000,
          },
        ],
      },
      {
        id: 'rustic',
        title: {
          ru: 'RUSTIC',
          kk: 'RUSTIC',
        },
        pageTitle: {
          ru: 'Деревянная дверь RUSTIC',
          kk: 'RUSTIC АҒАШ ЕСІГІ',
        },
        items: [
          {
            id: 'rustic-arched',
            title: {
              ru: 'RUSTIC',
              kk: 'RUSTIC',

            },
            titleMob: {
              ru: 'RUSTIC, оригинальная',
              kk: 'RUSTIC, оригинальная',
            },
            description: {
              ru: 'оригинальная',
              kk: 'оригинальная',
            },
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
            },
            images: ['/images/doors/rustic/rustic-arched.webp'],
            price: 286000,
          },
          {
            id: 'rustic-simple',
            title: {
              ru: 'RUSTIC',
              kk: 'RUSTIC',
            },
            titleMob: {
              ru: 'RUSTIC, простая',
              kk: 'RUSTIC, простая',
            },
            description: {
              ru: 'простая',
              kk: 'простая',
            },
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
            },
            images: ['/images/doors/rustic/rustic-simple.webp'],
            price: 286000,
          },
        ],
      },
      {
        id: 'cabinet',
        title: {
          ru: 'CABINET',
          kk: 'CABINET',
        },
        pageTitle: {
          ru: 'Деревянные двери CABINET',
          kk: 'Деревянные двери CABINET',
        },
        items: [
          {
            id: 'cabinet-scandinavia',
            title: {
              ru: 'CABINET',
              kk: 'CABINET',

            },
            titleMob: {
              ru: 'CABINET, Скандинавия',
              kk: 'CABINET, Скандинавия',
            },
            description: {
              ru: 'Скандинавия',
              kk: 'Скандинавия',
            },
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
            },
            images: ['/images/doors/cabinet/scandinavia.webp'],
            price: 286000,
          },
          {
            id: 'cabinet-europe',
            title: {
              ru: 'CABINET',
              kk: 'CABINET',
            },
            titleMob: {
              ru: 'CABINET, Европа',
              kk: 'CABINET, Европа',
            },
            description: {
              ru: 'Европа',
              kk: 'Европа',
            },
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
            },
            images: ['/images/doors/cabinet/europe.webp'],
            price: 286000,
          },
          {
            id: 'cabinet-ethiopia',
            title: {
              ru: 'CABINET',
              kk: 'CABINET',
            },
            titleMob: {
              ru: 'CABINET, Эфиопия',
              kk: 'CABINET, Эфиопия',
            },
            description: {
              ru: 'Эфиопия',
              kk: 'Эфиопия',
            },
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
            },
            images: ['/images/doors/cabinet/ethiopia.webp'],
            price: 286000,
          },
          {
            id: 'cabinet-versailles',
            title: {
              ru: 'CABINET',
              kk: 'CABINET',
            },
            titleMob: {
              ru: 'CABINET, Версаль',
              kk: 'CABINET, Версаль',
            },
            description: {
              ru: 'Версаль',
              kk: 'Версаль',
            },
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
            },
            images: ['/images/doors/cabinet/versailles.webp'],
            price: 286000,
          },
          {
            id: 'cabinet-versailles-duo',
            title: {
              ru: 'CABINET',
              kk: 'CABINET',
            },
            titleMob: {
              ru: 'CABINET, Версаль, Дуо',
              kk: 'CABINET, Версаль, Дуо',
            },
            description: {
              ru: 'Версаль Дуо',
              kk: 'Версаль Дуо',
            },
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
            },
            images: ['/images/doors/cabinet/versailles-duo.webp'],
            price: 540000,
          },
        ],
      },
      {
        id: 'exclusive',
        title: {
          ru: 'ЭКСКЛЮЗИВНЫЕ ДВЕРИ',
          kk: 'ЭКСКЛЮЗИВ ЕСІКТЕР',
        },
        pageTitle: {
          ru: 'ЭКСКЛЮЗИВНЫЕ ДВЕРИ ИЗ МАССИВА',
          kk: 'МАССИВТЕН ЭКСКЛЮЗИВ АҒАШ ЕСІКТЕРІ',
        },
        items: [
          {
            id: 'exclusive-folding',
            title: {
              ru: 'Exclusive',
              kk: 'Exclusive',

            },
            titleMob: {
              ru: 'Exclusive, стильная',
              kk: 'Exclusive, стильная',
            },
            description: {
              ru: 'Стильная',
              kk: 'Стильная',
            },
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
            },
            images: ['/images/doors/exclusive/exclusive-big.webp'],
            price: 0,
          },
          {
            id: 'exclusive-strict',
            title: {
              ru: 'Exclusive',
              kk: 'Exclusive',
            },
            titleMob: {
              ru: 'Exclusive, строгая',
              kk: 'Exclusive, строгая',
            },
            description: {
              ru: 'Строгая',
              kk: 'Строгая',
            },
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
            },
            images: ['/images/doors/exclusive/exclusive-small.webp'],
            price: 0,
          },
        ],
      },
      {
        id: 'balcony',
        title: {
          ru: 'БАЛКОННАЯ ДВЕРЬ',
          kk: 'БАЛКОН ЕСІГІ',
        },
        pageTitle: {
          ru: 'ДЕРЕВЯННАЯ БАЛКОННАЯ ДВЕРЬ ',
          kk: 'АҒАШ БАЛКОН ЕСІГІ',
        },
        items: [
          {
            id: 'balcony-dark',
            title: {
              ru: 'Balcony',
              kk: 'Balcony',

            },
            titleMob: {
              ru: 'Balcony, темная',
              kk: 'Balcony, темная',
            },
            description: {
              ru: 'Темная',
              kk: 'Темная',
            },
            shortName: {
              ru: 'Дверь',
              kk: 'Есік',
            },
            images: ['/images/doors/balcony/balcony-dark.webp'],
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