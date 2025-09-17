import type { ProductCategory } from './config.types.ts';

export const productCatalog: ProductCategory[] = [{
    id         : 'doors',
    title      : {
        ru: 'Двери',
        kk: 'Есiктер',
    },
    collections: [
        {
        id       : 'classica',
        title    : {
            ru: 'CLASSICA',
            kk: 'CLASSICA',
        },
        pageTitle: {
            ru: 'Деревянные двери CLASSICA',
            kk: 'CLASSICA ағаш есіктері',
        },
        items    : [{
            id         : 'classica-iney',
            title      : {
                ru: 'CLASSICA',
                kk: 'CLASSICA',

            },
            titleMob   : {
                ru: 'CLASSICA, Иней',
                kk: 'CLASSICA, Иней',
            },
            description: {
                ru: 'цвет "Иней"',
                kk: 'түсі "Иней"',
            },
            shortName  : {
                ru: 'Дверь',
                kk: 'Есік',
            },
            images     : ['/images/doors/classica/iney.webp'],
            price      : 330000,
            alt        : 'Межкомнатная белая деревянная дверь из массива на заказ в Алматы, покрытие белое масло'
        }, {
            id         : 'classica-iney-glass',
            title      : {
                ru: 'CLASSICA',
                kk: 'CLASSICA',
            },
            titleMob   : {
                ru: 'CLASSICA, Иней - стекло',
                kk: 'CLASSICA, Иней - стекло',
            },
            description: {
                ru: 'Со стеклом цвет "Иней"',
                kk: 'Шынымен түсі "Иней"',
            },
            shortName  : {
                ru: 'Дверь',
                kk: 'Есік',
            },
            images     : ['/images/doors/classica/iney-glass.webp'],
            price      : 330000,
            alt        : 'Межкомнатная белая деревянная дверь со стеклом из массивана заказ в Алматы, покрытие белое масло',
        }, {
            id         : 'classica-dub',
            title      : {
                ru: 'CLASSICA',
                kk: 'CLASSICA',
            },
            titleMob   : {
                ru: 'CLASSICA, Дуб',
                kk: 'CLASSICA, Дуб',
            },
            description: {
                ru: 'цвет "Дуб"',
                kk: 'түсі "Дуб"',
            },
            shortName  : {
                ru: 'Дверь',
                kk: 'Есік',
            },
            images     : ['/images/doors/classica/dub.webp'],
            price      : 330000,
            alt        : 'Межкомнатная деревянная дверь из массива на заказ в Алматы, покрытие маслом цвета дуб'
        },],
    },
        {
        id       : 'cabinet',
        title    : {
            ru: 'CABINET',
            kk: 'CABINET',
        },
        pageTitle: {
            ru: 'Деревянные двери CABINET',
            kk: 'Деревянные двери CABINET',
        },
        items    : [{
            id         : 'cabinet-scandi',
            title      : {
                ru: 'CABINET',
                kk: 'CABINET',

            },
            titleMob   : {
                ru: 'CABINET, Scandi',
                kk: 'CABINET, Scandi',
            },
            description: {
                ru: 'Scandi',
                kk: 'Scandi',
            },
            shortName  : {
                ru: 'Дверь',
                kk: 'Есік',
            },
            images     : ['/images/doors/cabinet/scandinavia.webp'],
            price      : 330000,
            alt        : 'Фрезированная деревянная межкомнатная дверь из карельской сосны в скандинавском стиле'
        }, {
            id         : 'cabinet-chester',
            title      : {
                ru: 'CABINET',
                kk: 'CABINET',
            },
            titleMob   : {
                ru: 'CABINET, Chester',
                kk: 'CABINET, Chester',
            },
            description: {
                ru: 'Chester',
                kk: 'Chester',
            },
            shortName  : {
                ru: 'Дверь',
                kk: 'Есік',
            },
            images     : ['/images/doors/cabinet/europe.webp'],
            price      : 750000,
            alt        : 'Межкомнатная  дверь из массива дуба или других элитных пород'
        }, {
            id         : 'cabinet-hanoi',
            title      : {
                ru: 'CABINET',
                kk: 'CABINET',
            },
            titleMob   : {
                ru: 'CABINET, Hanoi',
                kk: 'CABINET, Hanoi',
            },
            description: {
                ru: 'Hanoi',
                kk: 'Hanoi',
            },
            shortName  : {
                ru: 'Дверь',
                kk: 'Есік',
            },
            images     : ['/images/doors/cabinet/ethiopia.webp'],
            price      : 330000,
            alt        : 'Фрезированная межкомнатная дверь из массива сосны, цвет морёный дуб'
        }, {
            id         : 'cabinet-paris',
            title      : {
                ru: 'CABINET',
                kk: 'CABINET',
            },
            titleMob   : {
                ru: 'CABINET, Paris',
                kk: 'CABINET, Paris',
            },
            description: {
                ru: 'Paris',
                kk: 'Paris',
            },
            shortName  : {
                ru: 'Дверь',
                kk: 'Есік',
            },
            images     : ['/images/doors/cabinet/versailles.webp'],
            price      : 349000,
            alt        : 'Межкомнатная белая деревянная дверь из массива на заказ в Алматы, акриловое покрытие'
        }, {
            id         : 'cabinet-paris-duo',
            title      : {
                ru: 'CABINET',
                kk: 'CABINET',
            },
            titleMob   : {
                ru: 'CABINET, Paris, двойная',
                kk: 'CABINET, Paris, Дуо',
            },
            description: {
                ru: 'Paris  двойная',
                kk: 'Paris Дуо',
            },
            shortName  : {
                ru: 'Дверь',
                kk: 'Есік',
            },
            images     : ['/images/doors/cabinet/versailles-duo.webp'],
            price      : 558000,
            alt        : 'Межкомнатная белая двойная деревянная дверь из массива на заказ в Алматы, акриловое покрытие'
        },],
    },
        {
        id       : 'exclusive',
        title    : {
            ru: 'ЭКСКЛЮЗИВНЫЕ ДВЕРИ',
            kk: 'ЭКСКЛЮЗИВ ЕСІКТЕР',
        },
        pageTitle: {
            ru: 'ЭКСКЛЮЗИВНЫЕ ДВЕРИ ИЗ МАССИВА',
            kk: 'МАССИВТЕН ЭКСКЛЮЗИВ АҒАШ ЕСІКТЕРІ',
        },
        items    : [{
            id         : 'exclusive-shato',
            title      : {
                ru: 'Эксклюзивная',
                kk: 'Эксклюзив',

            },
            titleMob   : {
                ru: 'Эксклюзивная, Shato',
                kk: 'Эксклюзивная, Shato',
            },
            description: {
                ru: 'Дверь Shato',
                kk: 'Есік Shato',
            },
            shortName  : {
                ru: 'Дверь',
                kk: 'Есік',
            },
            images     : ['/images/doors/exclusive/exclusive-big.webp'],
            price      : 880000,
            alt        : 'Эксклюзивная деревянная дверь с открыванием "книжка" на белом фоне'
        }, {
            id         : 'exclusive-arch',
            title      : {
                ru: 'Эксклюзивная',
                kk: 'Эксклюзив',
            },
            titleMob   : {
                ru: 'Эксклюзивная, ARCH',
                kk: 'Эксклюзивная, ARCH',
            },
            description: {
                ru: 'Дверь ARCH',
                kk: 'Есік ARCH',
            },
            shortName  : {
                ru: 'Дверь',
                kk: 'Есік',
            },
            images     : ['/images/doors/exclusive/exclusive-small.webp'],
            price      : 580000,
            alt        : 'Эксклюзивная деревянная дверь полукруглой формы из массива на белом фоне, цвет дуб'
        },],
    },
        {
            id       : 'nova',
            title    : {
                ru: 'NOVA',
                kk: 'NOVA',
            },
            pageTitle: {
                ru: 'Деревянные двери NOVA',
                kk: 'NOVA ағаш есіктері',
            },
            items    : [{
                id         : 'nova-iney',
                title      : {
                    ru: 'NOVA',
                    kk: 'NOVA',

                },
                titleMob   : {
                    ru: 'NOVA, Иней',
                    kk: 'NOVA, Қырау',
                },
                description: {
                    ru: 'цвет "Иней"',
                    kk: 'түсі "Қырау"',
                },
                shortName  : {
                    ru: 'Дверь',
                    kk: 'Есік',
                },
                images     : ['/images/doors/nova/nova.webp'],
                price      : 250000,
                alt        : 'Деревянная дверь из массива для современного минималистичного интерьера'
            },],
        },
        {
            id       : 'rustic',
            title    : {
                ru: 'RUSTIC',
                kk: 'RUSTIC',
            },
            pageTitle: {
                ru: 'Деревянная дверь RUSTIC',
                kk: 'RUSTIC АҒАШ ЕСІГІ',
            },
            items    : [{
                id         : 'rustic-ethno',
                title      : {
                    ru: 'RUSTIC',
                    kk: 'RUSTIC',

                },
                titleMob   : {
                    ru: 'RUSTIC, этно',
                    kk: 'RUSTIC, этно',
                },
                description: {
                    ru: 'этно',
                    kk: 'этно',
                },
                shortName  : {
                    ru: 'Дверь',
                    kk: 'Есік',
                },
                images     : ['/images/doors/rustic/rustic-arched.webp'],
                price      : 310000,
                alt        : 'Деревянная дверь из досок полукруглой формы с декоративной дверкой на белом фоне, цвет "злотой дуб" в Алматы'
            }, {
                id         : 'rustic-ethno2',
                title      : {
                    ru: 'RUSTIC',
                    kk: 'RUSTIC',
                },
                titleMob   : {
                    ru: 'RUSTIC, этно 2',
                    kk: 'RUSTIC, этно 2',
                },
                description: {
                    ru: 'этно 2',
                    kk: 'этно 2',
                },
                shortName  : {
                    ru: 'Дверь',
                    kk: 'Есік',
                },
                images     : ['/images/doors/rustic/rustic-simple.webp'],
                price      : 310000,
                alt        : 'Деревянная дверь из досок в этническом стиле на белом фоне, цвет "злотой дуб" в Алматы'
            },

        ],
    },
        {
            id       : 'balcony',
            title    : {
                ru: 'БАЛКОННАЯ ДВЕРЬ',
                kk: 'БАЛКОН ЕСІГІ',
            },
            pageTitle: {
                ru: 'ДЕРЕВЯННАЯ БАЛКОННАЯ ДВЕРЬ ',
                kk: 'АҒАШ БАЛКОН ЕСІГІ',
            },
            items    : [{
                id         : 'balcony-teak',
                title      : {
                    ru: 'Balcony',
                    kk: 'Balcony',

                },
                titleMob   : {
                    ru: 'Balcony, цвет "Тик"',
                    kk: 'Balcony, түсі "Тик"',
                },
                description: {
                    ru: 'цвет "Тик"',
                    kk: 'түсі "Тик"',
                },
                shortName  : {
                    ru: 'Дверь',
                    kk: 'Есік',
                },
                images     : ['/images/doors/balcony/balcony-dark.webp'],
                price      : 340000,
                alt        : 'Деревянная балконная дверь со стеклопакетом из массива сосны, цвет "тик"'
            },

       ],
        },
        {
            id       : 'loft',
            title    : {
                ru: 'LOFT',
                kk: 'LOFT',
            },
            pageTitle: {
                ru: 'Комбинированные двери LOFT',
                kk: 'LOFT ҚҰРАМДАСТЫРЫЛҒАН ЕСІГІ',
            },
            items    : [{
                id         : 'loft-teak',
                title      : {
                    ru: 'LOFT',
                    kk: 'LOFT',

                },
                titleMob   : {
                    ru: 'LOFT, Тик',
                    kk: 'LOFT, Тик',
                },
                description: {
                    ru: 'цвет "Тик"',
                    kk: 'түсі "Тик"',
                },
                shortName  : {
                    ru: 'Дверь',
                    kk: 'Есік',
                },
                images     : ['/images/doors/loft/teak.webp'],
                price      : 190000,
                alt        : 'межкомнатная деревянная дверь в стиле LOFT на белом фоне'
            }, {
                id         : 'loft-teak-duo',
                title      : {
                    ru: 'LOFT',
                    kk: 'LOFT',
                },
                titleMob   : {
                    ru: 'LOFT, Тик, двойная',
                    kk: 'LOFT, Тик, Дуо',
                },
                description: {
                    ru: 'Цвет "Тик", двойная',
                    kk: 'Цвет "Тик", Дуо',
                },
                shortName  : {
                    ru: 'Дверь',
                    kk: 'Есік',
                },
                images     : ['/images/doors/loft/teak-duo.webp'],
                price      : 315000,
                alt        : 'межкомнатная двойная деревянная дверь в стиле LOFT на белом фоне'
            },
            ],
        },
        {
            id       : 'deco',
            title    : {
                ru: 'DECO',
                kk: 'DECO',
            },
            pageTitle: {
                ru: 'Деревянная дверь DECO',
                kk: 'DECO АҒАШ ЕСІГІ',
            },
            items    : [{
                id         : 'deco-oak',
                title      : {
                    ru: 'DECO',
                    kk: 'DECO',

                },
                titleMob   : {
                    ru: 'DECO, Дуб',
                    kk: 'DECO, Дуб',
                },
                description: {
                    ru: 'цвет "Дуб"',
                    kk: 'түсі "Дуб"',
                },
                shortName  : {
                    ru: 'Дверь',
                    kk: 'Есік',
                },
                images     : ['/images/doors/deco/deco.webp'],
                price      : 369000,
                alt        : 'Деревянная дверь с рельефной филёнкой из массива, цвет покрытия "золотисный дуб"'
            }, {
                id         : 'deco-oak-duo',
                title      : {
                    ru: 'DECO',
                    kk: 'DECO',
                },
                titleMob   : {
                    ru: 'DECO, Дуб, двойная',
                    kk: 'DECO, Дуб, Дуо',
                },
                description: {
                    ru: 'Цвет "Дуб", двойная',
                    kk: 'Цвет "Дуб", Дуо',
                },
                shortName  : {
                    ru: 'Дверь',
                    kk: 'Есік',
                },
                images     : ['/images/doors/deco/deco-duo.webp'],
                price      : 580000,
                alt        : 'Двойная деревянная дверь с рельефной филёнкой из массива, цвет покрытия "золотисный дуб"'
            },
            ],
        },
    ],
}, {
    id         : 'furniture',
    title      : {
        ru: 'Мебель',
        kk: 'Жиһаз',
    },
    collections: [
        {
        id   : 'consoles',
        title: {
            ru: 'Консоли и тумбы',
            kk: 'Консольдар мен тумбалар',
        },
        items: [{
            id        : 'provance',
            title     : {
                ru: 'Provance',
                kk: 'Provance',

            },
            pageHeader: {
                ru: 'Консоль из массива Provance',
                kk: 'Provance табиғи ағаш консольі',
            },
            shortName : {
                ru: 'Консоль',
                kk: 'Консоль',
            },
            images    : ['/images/furniture/consoles/provance.webp', '/images/furniture/consoles/provance-add1.webp', '/images/furniture/consoles/provance-add2.webp', '/images/furniture/consoles/provance-add3.webp'],
            price     : 329000,
            time      : 10,
            alt       : 'Деревянная  консоль в стиле прованс на заказ в Алматы',
            sizes     : {
                width : 180,
                height: 88,
                depth : 40,
            }
        }, {
            id        : 'iberia',
            title     : {
                ru: 'Iberia',
                kk: 'Iberia',

            },
            pageHeader: {
                ru: 'Консоль для ванной ',
                kk: 'Ваннаға арналған консоль',
            },
            shortName : {
                ru: 'Консоль для ванной',
                kk: 'Консоль',
            },
            images    : ['/images/furniture/consoles/iberia.webp', '/images/furniture/consoles/iberia-add1.webp', '/images/furniture/consoles/iberia-add2.webp', '/images/furniture/consoles/iberia-add3.webp'],
            price     : 180000,
            time      : 10,
            alt       : 'Деревянная  консоль для ванной с керамической столешницей на белом фоне в Алматы',
            sizes     : {
                width : 90,
                height: 80,
                depth : 40,
            }
        }, {
            id        : 'mona',
            title     : {
                ru: 'Mona',
                kk: 'Mona',
            },
            pageHeader: {
                ru: 'Консоль в прихожую Mona',
                kk: 'Mona кіреберіс консольі',
            },
            shortName : {
                ru: 'Консоль навеснаяя',
                kk: 'Консоль навеснаяя',
            },
            images    : ['/images/furniture/consoles/mona.webp', '/images/furniture/consoles/mona-add1.webp', '/images/furniture/consoles/mona-add2.webp', '/images/furniture/consoles/mona-add3.webp'],
            price     : 145000,
            time      : 10,
            alt       : 'Деревянная подвесная консоль в стиле минимализм',
            sizes     : {
                width : 80,
                height: 30,
                depth : 26,
            }
        }, {
            id        : 'country',
            title     : {
                ru: 'Country',
                kk: 'Country',
            },
            pageHeader: {
                ru: 'Деревянная тумбочка для спальни',
                kk: 'Жатын бөлмеге арналған ағаш тумба',
            },
            shortName : {
                ru: 'Тумбочка',
                kk: 'Тумбочка',
            },
            images    : ['/images/furniture/consoles/country.webp', '/images/furniture/consoles/country-add1.webp', '/images/furniture/consoles/country-add2.webp', '/images/furniture/consoles/country-add3.webp'],
            price     : 139000,
            time      : 10,
            alt       : 'Деревянная тумбочка на высоких ножках с одним ящиком в стиле Country',
            sizes     : {
                width : 50,
                height: 65,
                depth : 40,
            }
        }, {
            id        : 'pine',
            title     : {
                ru: 'Pine',
                kk: 'Pine',
            },
            pageHeader: {
                ru: 'Деревянная тумба под раковину PINE',
                kk: 'Деревянная тумба под раковину PINE',
            },
            shortName : {
                ru: 'Тумба под раковину',
                kk: 'Тумба под раковину',
            },
            images    : ['/images/furniture/consoles/pino.webp', '/images/furniture/consoles/pino-add1.webp', '/images/furniture/consoles/pino-add2.webp'],
            price     : 328000,
            time      : 10,
            alt       : 'Тумба под раковину из натуральной сосны в санузел отеля, кафе, ресторана',
            sizes     : {
                width : 150,
                height: 80,
                depth : 50,
            }
        },],
    },
        {
        id   : 'wardrobes',
        title: {
            ru: 'Шкафы и полки',
            kk: 'Шкафтар мен сөрелер',
        },
        items: [{
            id        : 'siam',
            title     : {
                ru: 'Siam',
                kk: 'Siam',

            },
            pageHeader: {
                ru: 'Полка для книг Siam ',
                kk: 'Siam кітап сөресі',
            },
            shortName : {
                ru: 'Полка навесная',
                kk: 'Полка навесная',
            },
            images    : ['/images/furniture/wardrobes/siam.webp', '/images/furniture/wardrobes/siam-add1.webp', '/images/furniture/wardrobes/siam-add2.webp', '/images/furniture/wardrobes/siam-add3.webp'],
            price     : 129000,
            time      : 10,
            alt       : 'Навесная деревянная полка для книг из бука в стиле  мид сентури',
            sizes     : {
                width : 90,
                height: 44,
                depth : 16,
            }
        }, {
            id        : 'mini',
            title     : {
                ru: 'Mini',
                kk: 'Mini',

            },
            pageHeader: {
                ru: 'Полка Mini',
                kk: 'Полка Mini',
            },
            shortName : {
                ru: 'Полка настенная',
                kk: 'Полка настенная',
            },
            images    : ['/images/furniture/wardrobes/mini.webp', '/images/furniture/wardrobes/mini-add1.webp', '/images/furniture/wardrobes/mini-add2.webp'],
            price     : 38000,
            time      : 10,
            alt       : 'Деревянная полка для гостинной, кухни, над комодом',
            sizes     : {
                width : 60,
                height: 27,
                depth : 21,
            }
        }, {
            id        : 'retro',
            title     : {
                ru: 'Retro',
                kk: 'Retro',

            },
            pageHeader: {
                ru: 'Деревянная витрина Retro',
                kk: 'Деревянная витрина Retro',
            },
            shortName : {
                ru: 'Витрина',
                kk: 'Витрина',
            },
            images    : ['/images/furniture/wardrobes/retro.webp', '/images/furniture/wardrobes/retro-add1.webp', '/images/furniture/wardrobes/retro-add2.webp', '/images/furniture/wardrobes/retro-add3.webp'],
            price     : 192000,
            time      : 20,
            alt       : 'Деревяная витрина для посуды в ретро стиле для кухни или гостинной',
            sizes     : {
                width : 73,
                height: 75,
                depth : 29,
            }
        }, {
            id        : 'deco-cabinet',
            title     : {
                ru: 'Deco Cabinet',
                kk: 'Deco Cabinet',

            },
            pageHeader: {
                ru: 'Шкаф для одежды Deco Cabinet',
                kk: 'Шкаф для одежды Deco Cabinet',
            },
            shortName : {
                ru: 'Шкаф',
                kk: 'Шкаф',
            },
            images    : ['/images/furniture/wardrobes/duo.webp', '/images/furniture/wardrobes/duo-add1.webp'],
            price     : 630000,
            time      : 20,
            alt       : 'Деревянный шкаф для спальни или детской 120х60х210 см из натурального дерева с рельефными деревянными фасадами',
            sizes     : {
                width : 120,
                height: 210,
                depth : 60,
            }
        },],
    },
        {
        id   : 'exclusive-furniture',
        title: {
            ru: 'Эксклюзивная мебель',
            kk: 'Эксклюзив жиһазы',
        },
        items: [{
            id        : 'luther',
            title     : {
                ru: 'Luther',
                kk: 'Luther',

            },
            pageHeader: {
                ru: 'Шкаф дубовый Luther',
                kk: 'Шкаф дубовый Luther',
            },
            shortName : {
                ru: 'Шкаф дубовый',
                kk: 'Шкаф дубовый',
            },
            images    : ['/images/furniture/exclusive-fur/luther.webp', '/images/furniture/exclusive-fur/luther-add1.webp', '/images/furniture/exclusive-fur/luther-add2.webp', '/images/furniture/exclusive-fur/luther-add3.webp'],
            price     : 2500000,
            time      : 20,
            alt       : 'Деревянный шкаф с резьбой в спальню на заказ',
            material  : {
                ru: 'дуба',
                kk: 'емен',
            },
            sizes     : {
                width : 160,
                height: 245,
                depth : 60,
            }
        },],
    },
        {
        id   : 'beds',
        title: {
            ru: 'Кровати',
            kk: 'Кереуеттер',
        },
        items: [{
            id        : 'tatami-hard',
            title     : {
                ru: 'Tatami Hard',
                kk: 'Tatami Hard',

            },
            pageHeader: {
                ru: 'Деревянная кровать в японском стиле Tatami Hard',
                kk: 'Жапон стиліндегі ағаш төсек Tatami Hard',
            },
            shortName : {
                ru: 'Кровать',
                kk: 'Кровать',
            },
            images    : ['/images/furniture/beds/tatami.webp', '/images/furniture/beds/tatami-add1.webp', '/images/furniture/beds/tatami-add2.webp'],
            price     : 530000,
            time      : 10,
            alt       : 'Японская деревянная двуспальная кровать c держателем под матрас из досок ',
            sizes     : {
                width : 220,
                height: 21,
                depth : 200,
            }
        }, {
            id        : 'tatami-light',
            title     : {
                ru: 'Tatami Light',
                kk: 'Tatami Light',

            },
            pageHeader: {
                ru: 'Деревянная кровать в японском стиле Tatami Light',
                kk: 'Жапон стиліндегі ағаш төсек Tatami Light',
            },
            shortName : {
                ru: 'Кровать',
                kk: 'Кровать',
            },
            images    : ['/images/furniture/beds/tatami-light.webp', '/images/furniture/beds/tatami-light-add1.webp', '/images/furniture/beds/tatami-light-add2.webp'],
            price     : 490000,
            time      : 10,
            alt       : 'Японская деревянная двуспальная кровать c держателем под матрас из досок ',
            sizes     : {
                width : 180,
                height: 21,
                depth : 200,
            }
        }, {
            id        : 'asia',
            title     : {
                ru: 'Asia',
                kk: 'Asia',

            },
            pageHeader: {
                ru: 'Тахта раздвижная Asia',
                kk: 'Тахта раздвижная Asia',
            },
            shortName : {
                ru: 'Тахта раздвижная',
                kk: 'Тахта раздвижная',
            },
            images    : ['/images/furniture/beds/asia.webp', '/images/furniture/beds/asia-add1.webp', '/images/furniture/beds/asia-add2.webp'],
            price     : 432000,
            time      : 10,
            alt       : 'Деревянная раздвижная кровать трансформер в собранном виде',
            sizes     : {
                width : 200,
                height: 32,
                depth : 180,
            }
        },],
    },
        {
            id   : 'tables',
            title: {
                ru: 'Столы и комплекты',
                kk: 'Столы и комплекты',
            },
            items: [{
                id        : 'zhetysu',
                title     : {
                    ru: 'Zhetysu',
                    kk: 'Zhetysu',

                },
                pageHeader: {
                    ru: 'Обеденный раздвижной стол ZHETYSU',
                    kk: 'Обеденный раздвижной стол ZHETYSU',
                },
                shortName : {
                    ru: 'Обеденный стол',
                    kk: 'Обеденный стол',
                },
                images    : ['/images/furniture/tables/zhetysu.webp', '/images/furniture/tables/zhetysu-add1.webp', '/images/furniture/tables/zhetysu-add2.webp', '/images/furniture/tables/zhetysu-add3.webp'],
                price     : 630000,
                time      : 10,
                alt       : 'Деревянный разборный стол из массива натурального дерева в собранном положении 120х120х76 см',
                material  : {
                    ru: 'карагача',
                    kk: 'карағаш',
                },
                sizes     : {
                    width : 120,
                    height: 76,
                    depth : 120,
                }
            }, {
                id        : 'larch',
                title     : {
                    ru: 'Larch',
                    kk: 'Larch',

                },
                pageHeader: {
                    ru: 'Барный стол и табуреты для террасы LARCH',
                    kk: 'Барный стол и табуреты для террасы LARCH',
                },
                shortName : {
                    ru: 'Комплект для террасы',
                    kk: 'Комплект для террасы',
                },
                images    : ['/images/furniture/tables/larch.webp', '/images/furniture/tables/larch-add1.webp', '/images/furniture/tables/larch-add2.webp', '/images/furniture/tables/larch-add3.webp'],
                price     : 560000,
                time      : 10,
                alt       : 'Барный стол и четыре табурета для террасы из влагостойкой древесины лиственницы, производство на заказ',
                material  : {
                    ru: 'лиственницы',
                    kk: 'балқарағай',
                },
                set       : {
                    ru: ['Стол', 'Табурет'],
                    kk: ['Үстел', 'Нәжіс']
                },
                sizes     : {
                    width : [170, 35],
                    height: [92, 60],
                    depth : [45, 35],
                }
            },],
        },
        {
        id   : 'chairs',
        title: {
            ru: 'Кресла',
            kk: 'Креслолар',
        },
        items: [{
            id        : 'alma-ata',
            title     : {
                ru: 'Alma-Ata',
                kk: 'Alma-Ata',

            },
            pageHeader: {
                ru: 'Кресло Alma-Ata',
                kk: 'Алма-Ата креслосы',
            },
            shortName : {
                ru: 'Кресло',
                kk: 'Кресло',
            },
            images    : ['/images/furniture/chairs/alma-ata.webp', '/images/furniture/chairs/alma-ata-add1.webp', '/images/furniture/chairs/alma-ata-add2.webp', '/images/furniture/chairs/alma-ata-add3.webp'],
            price     : 118000,
            time      : 10,
            alt       : 'Серое деревянное кресло в стиле ретро из бука',
            sizes     : {
                width : 150,
                height: 150,
                depth : 150,
            }
        },],
    },
        ],
},];