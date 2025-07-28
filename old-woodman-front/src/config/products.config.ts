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
            alt:'Межкомнатная белая деревянная дверь из массива на заказ в Алматы, покрытие белое масло'
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
            alt:'Межкомнатная белая деревянная дверь со стеклом из массивана заказ в Алматы, покрытие белое масло',
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
            alt:'Межкомнатная деревянная дверь из массива на заказ в Алматы, покрытие маслом цвета дуб'
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
            alt: 'межкомнатная деревянная дверь в стиле LOFT на белом фоне'
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
            alt: 'межкомнатная двойная деревянная дверь в стиле LOFT на белом фоне'
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
            alt: 'Деревянная дверь с рельефной филёнкой из массива, цвет покрытия "золотисный дуб"'
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
            alt: 'Двойная деревянная дверь с рельефной филёнкой из массива, цвет покрытия "золотисный дуб"'
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
            alt: 'Деревянная дверь из досок полукруглой формы с декоративной дверкой на белом фоне, цвет "злотой дуб" в Алматы'
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
            alt: 'Деревянная дверь из досок в этническом стиле на белом фоне, цвет "злотой дуб" в Алматы'
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
            alt: 'Фрезированная деревянная межкомнатная дверь из карельской сосны в скандинавском стиле'
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
            alt: 'Межкомнатная  дверь из массива дуба или других элитных пород'
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
            alt: 'Фрезированная межкомнатная дверь из массива сосны, цвет морёный дуб'
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
            alt: 'Межкомнатная белая деревянная дверь из массива на заказ в Алматы, акриловое покрытие'
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
            alt: 'Межкомнатная белая двойная деревянная дверь из массива на заказ в Алматы, акриловое покрытие'
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
            alt: 'Эксклюзивная деревянная дверь с открыванием "книжка" на белом фоне'
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
            alt: 'Эксклюзивная деревянная дверь полукруглой формы из массива на белом фоне, цвет дуб'
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
            alt: 'Деревянная балконная дверь со стеклопакетом из массива сосны, цвет "тик"'
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
        items: [
          {
            id: 'provance',
            title: {
              ru: 'Provance',
              kk: 'Provance',

            },
            pageHeader: {
              ru: 'Консоль из массива Provance',
              kk: 'Provance табиғи ағаш консольі',
            },
            shortName: {
              ru: 'Консоль',
              kk: 'Консоль',
            },
            images: ['/images/furniture/consoles/provance.webp'],
            price: 286000,
            time: 10,
            alt:'Деревянная  консоль в стиле прованс на заказ в Алматы'
          },
          {
            id: 'iberia',
            title: {
              ru: 'Iberia',
              kk: 'Iberia',

            },
            pageHeader: {
              ru: 'Консоль для ванной ',
              kk: 'Ваннаға арналған консоль',
            },
            shortName: {
              ru: 'Консоль приставная',
              kk: 'Консоль приставная',
            },
            images: ['/images/furniture/consoles/iberia.webp'],
            price: 286000,
            time: 10,
            alt:'Деревянная  консоль для ванной с керамической столешницей на белом фоне в Алматы'
          },
          {
            id: 'mona',
            title: {
              ru: 'Mona',
              kk: 'Mona',
            },
            pageHeader: {
              ru: 'Консоль в прихожую Mona',
              kk: 'Mona кіреберіс консольі',
            },
            shortName: {
              ru: 'Консоль навеснаяя',
              kk: 'Консоль навеснаяя',
            },
            images: ['/images/furniture/consoles/mona.webp'],
            price: 286000,
            time: 10,
            alt: 'Деревянная подвесная консоль в стиле минимализм'
          },
          {
            id: 'country',
            title: {
              ru: 'Country',
              kk: 'Country',
            },
            pageHeader: {
              ru: 'Деревянная тумбочка для спальни',
              kk: 'Жатын бөлмеге арналған ағаш тумба',
            },
            shortName: {
              ru: 'Тумба',
              kk: 'Тумба',
            },
            images: ['/images/furniture/consoles/country.webp', '/images/furniture/consoles/country.webp', '/images/furniture/consoles/country.webp', '/images/furniture/consoles/country.webp'],
            price: 286000,
            time: 10,
            alt:'Деревянная тумбочка на высоких ножках с одним ящиком в стиле Country '
          },
        ],
      },
      {
        id: 'wardrobes',
        title: {
          ru: 'Шкафы и полки',
          kk: 'Шкафтар мен сөрелер',
        },
        items: [
          {
            id: 'siam',
            title: {
              ru: 'Siam',
              kk: 'Siam',

            },
            pageHeader: {
              ru: 'Полка для книг Siam ',
              kk: 'Siam кітап сөресі',
            },
            shortName: {
              ru: 'Полка навесная',
              kk: 'Полка навесная',
            },
            images: ['/images/furniture/wardrobes/siam-1.webp'],
            price: 239000,
            time: 10,
            alt: 'Навесная деревянная полка для книг из бука в стиле  мид сентури'
          },
          {
            id: 'mini',
            title: {
              ru: 'Mini',
              kk: 'Mini',

            },
            pageHeader: {
              ru: 'Полка навесная Mini',
              kk: 'Полка навесная Mini',
            },
            shortName: {
              ru: 'Полка настенная',
              kk: 'Полка настенная',
            },
            images: ['/images/furniture/wardrobes/mini.webp'],
            price: 239000,
            time: 10,
            alt: 'Деревянная полка для гостинной, кухни, над комодом'
          },
          {
            id: 'retro',
            title: {
              ru: 'Retro',
              kk: 'Retro',

            },
            pageHeader: {
              ru: 'Шкаф навесной Retro',
              kk: 'Шкаф навесной Retro',
            },
            shortName: {
              ru: 'Витрина',
              kk: 'Витрина',
            },
            images: ['/images/furniture/wardrobes/retro.webp'],
            price: 300000,
            time: 20,
            alt: 'Деревяная витрина для посуды в ретро стиле для кухни или гостинной'
          },

        ],
      },
      {
        id: 'beds',
        title: {
          ru: 'Кровати',
          kk: 'Кереуеттер',
        },
        items: [
          {
            id: 'tatami',
            title: {
              ru: 'Tatami',
              kk: 'Tatami',

            },
            pageHeader: {
              ru: 'Деревянная кровать в японском стиле',
              kk: 'Жапон стиліндегі ағаш төсек',
            },
            shortName: {
              ru: 'Кровать',
              kk: 'Кровать',
            },
            images: ['/images/furniture/beds/tatami.webp'],
            price: 200000,
            time: 20,
            alt: 'Японская деревянная двуспальная кровать c держателем под матрас из досок '
          },
        ],
      },
      {
        id: 'chairs',
        title: {
          ru: 'Кресла',
          kk: 'Креслолар',
        },
        items: [
          {
            id: 'alma-ata',
            title: {
              ru: 'Alma-Ata',
              kk: 'Alma-Ata',

            },
            pageHeader: {
              ru: 'Кресло Alma-Ata',
              kk: 'Алма-Ата креслосы',
            },
            shortName: {
              ru: 'Кресло',
              kk: 'Кресло',
            },
            images: ['/images/furniture/chairs/alma-ata.webp'],
            price: 200000,
            time: 20,
            alt: 'Серое деревянное кресло в стиле ретро из бука'
          },
        ],
      },
    ],
  },
];