export interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  photos: string[];
  description: string;
  fulldesc: string;
  category: string;
  desc: string[];
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Кроссовки NIKE Dunk Low Retro',
    price: '16 979',
    image:
      'https://img.brandshop.ru/cache/products/f/fd9749-400-0_1104x1104.webp',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.8,
    photos: [
      'https://img.brandshop.ru/cache/products/f/fd9749-400-0_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/f/fd9749-400-1_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/f/fd9749-400-2_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/f/fd9749-400-3_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/f/fd9749-400-21_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/f/fd9749-400-5_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/f/fd9749-400-9_1104x1104.webp',
    ],
    desc: [
      'Материал: Верх - кожа; Подкладка - текстиль; Низ - резина',
      'Страна-производитель: Вьетнам',
      'Верх из натуральной кожи',
      'Классическая система шнуровки',
      'Перфорация в носочной области',
      'Стабилизационная вставка в пяточной области',
      'Прочная резиновая подошва',
      'Износостойкая подметка',
      'Контрастный брендинг',
    ],
  },
  {
    id: 2,
    title: 'кроссовки Nike Air Jordan 1 High Golf Camo',
    price: '23 899',
    image:
      'https://img.brandshop.ru/cache/products/d/dq0660-300-0_1104x1104.webp',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.9,
    photos: [
      'https://img.brandshop.ru/cache/products/d/dq0660-300-0_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/d/dq0660-300-30_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/d/dq0660-300-1_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/d/dq0660-300-2_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/d/dq0660-300-3_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/d/dq0660-300-4_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/d/dq0660-300-5_1104x1104.webp',
    ],
    desc: [
      'Материал: Верх - кожа; Подкладка - текстиль; Низ - резина',
      'Страна-производитель: Китай',
    ],
  },
  {
    id: 3,
    title: 'Кроссовки Nike P-6000',
    price: '23 899',
    image:
      'https://img.brandshop.ru/cache/products/c/cn0149-001-0_1104x1104.webp',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.7,
    photos: [
      'https://img.brandshop.ru/cache/products/c/cn0149-001-0_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/c/cn0149-001-1_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/c/cn0149-001-2_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/c/cn0149-001-3_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/c/cn0149-001-4_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/c/cn0149-001-5_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/c/cn0149-001-6_1104x1104.webp',
    ],
    desc: [
      'Материал: Верх - текстиль, искусственная кожа; Подкладка - текстиль; Низ - резина',
      'Страна-производитель: Вьетнам',
      'Верх из текстиля',
      'Комбинированная система шнуровки',
      'Усиленная носочная область',
      'Стабилизационная вставка в пяточной области',
      'Промежуточная подошва из EVA Rideliner',
      'Износостойкая рельефная подметка',
      'Объемный брендинг',
    ],
  },
  {
    id: 4,
    title: 'Мужские кроссовки Cortez Leather',
    price: '14 999',
    image:
      'https://img.brandshop.ru/cache/products/d/dm4044-106-0_1104x1104.webp',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.6,
    photos: [
      'https://img.brandshop.ru/cache/products/d/dm4044-106-0_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/d/dm4044-106-1_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/d/dm4044-106-2_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/d/dm4044-106-3_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/d/dm4044-106-4_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/d/dm4044-106-5_1104x1104.webp',
    ],
    desc: [
      'Материал: Верх - кожа; Подкладка - текстиль; Низ - резина',
      'Страна-производитель: Индонезия',
      'Классическая модель',
      'Верх из натуральной кожи',
      'Классическая система шнуровки',
      'Стабилизационная вставка в пяточной области',
      'Промежуточная подошва из EVA',
      'Износостойкая рельефная подметка',
      'Контрастный брендинг',
    ],
  },
  {
    id: 5,
    title: 'Мужские New Balance кроссовки M1000F',
    price: '14 999',
    image: 'https://img.brandshop.ru/cache/products/m/m1000f-0_1104x1104.webp',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.5,
    photos: [
      'https://img.brandshop.ru/cache/products/m/m1000f-0_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/m1000f-9_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/m1000f-1_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/m1000f-2_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/m1000f-3_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/m1000f-4_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/m1000f-5_1104x1104.webp',
    ],
    desc: [
      'Материал: Верх - кожа, текстиль; Подкладка - текстиль; Низ - резина',
      'Страна-производитель: Китай',
    ],
  },
  {
    id: 6,
    title: 'Мужские кроссовки MR530SG',
    price: '14 999',
    image: 'https://img.brandshop.ru/cache/products/m/mr530sg-0_1104x1104.webp',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.4,
    photos: [
      'https://img.brandshop.ru/cache/products/m/mr530sg-0_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/mr530sg-1_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/mr530sg-2_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/mr530sg-3_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/mr530sg-4_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/mr530sg-5_1104x1104.webp',
    ],
    desc: [
      'Материал: Верх - искусственная кожа, текстиль; Подкладка - текстиль; Низ - резина',
      'Страна-производитель: Вьетнам',
      'Контрастные вставки',
      'Панели из воздухопроницаемой сетки',
      'Классическая система шнуровки',
      'Перфорация в носочной, боковой и задней области',
      'Усиленная носочная область',
      'Стабилизационная вставка в пяточной области',
      'Петля на заднике',
      'Промежуточная подошва из EVA',
    ],
  },
  {
    id: 7,
    title: 'Мужские кроссовки New Balance MR530EWB',
    price: '14 990',
    image:
      'https://img.brandshop.ru/cache/products/m/mr530ewb-0_1104x1104.webp',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.4,
    photos: [
      'https://img.brandshop.ru/cache/products/m/mr530ewb-0_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/mr530ewb-1_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/mr530ewb-2_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/mr530ewb-3_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/mr530ewb-4_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/mr530ewb-5_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/m/mr530ewb-6_1104x1104.webp',
    ],
    desc: [
      'Материал: Верх - синтетическая кожа, текстиль; Подкладка - текстиль; Низ - резина',
      'Страна-производитель: Вьетнам',
      'Панели из воздухопроницаемой сетки',
      'Классическая система шнуровки',
      'Перфорация в носочной, боковой и задней области',
      'Усиленная носочная область',
    ],
  },
  {
    id: 8,
    title: 'Мужские кроссовки New Balance BB550LEZ',
    price: '14 990',
    image:
      'https://img.brandshop.ru/cache/products/b/bb550lez-0_1104x1104.webp',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.4,
    photos: [
      'https://img.brandshop.ru/cache/products/b/bb550lez-0_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/b/bb550lez-1_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/b/bb550lez-2_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/b/bb550lez-3_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/b/bb550lez-4_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/b/bb550lez-5_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/b/bb550lez-6_1104x1104.webp',
    ],
    desc: [
      'Материал: Верх - кожа, замша; Подкладка - текстиль; Низ - резина',
      'Страна-производитель: Вьетнам',
      'Верх из натуральной кожи и замши',
      'Панели с перфорацией',
      'Классическая система шнуровки',
      'Стабилизационная вставка в пяточной области',
      'Прочная резиновая подошва',
      'Износостойкая подметка',
      'Контрастный брендинг',
    ],
  },
  {
    id: 9,
    title: 'Мужские кроссовки Adidas Superstar II',
    price: '14 990',
    image: 'https://img.brandshop.ru/cache/products/i/ih8659-0_1104x1104.webp',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.4,
    photos: [
      'https://img.brandshop.ru/cache/products/i/ih8659-0_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/i/ih8659-1_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/i/ih8659-2_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/i/ih8659-3_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/i/ih8659-4_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/i/ih8659-5_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/i/ih8659-6_1104x1104.webp',
    ],
    desc: [
      'Материал: Верх - кожа; Подкладка - текстиль; Низ - резина',
      'Страна-производитель: Индонезия',
      'Верх из натуральной кожи',
      'Низкий силуэт',
      'Классическая система шнуровки',
      'Стабилизационная вставка в пяточной области',
      'Усиленная носочная область',
      'Перфорация в боковой области',
      'Прочная резиновая подошва',
      'Износостойкая подметка',
      'Контрастный брендинг',
    ],
  },
  {
    id: 10,
    title: 'Кроссовки adidas Originals Forum Bold Stripes',
    price: '6 400',
    image: 'https://img.brandshop.ru/cache/products/i/id6843-0_1104x1104.webp',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.4,
    photos: [
      'https://img.brandshop.ru/cache/products/i/id6843-0_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/i/id6843-1_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/i/id6843-2_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/i/id6843-3_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/i/id6843-4_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/i/id6843-5_1104x1104.webp',
      'https://img.brandshop.ru/cache/products/i/id6843-6_1104x1104.webp',
    ],
    desc: [
      'Материал: Верх - кожа; Подкладка - текстиль; Низ - резина',
      'Страна-производитель: Индонезия',
      'Верх из натуральной кожи',

      'Классическая система шнуровки',
      'Стабилизационная вставка в пяточной области',
      'Перфорация в носочной и боковой области',
      'Увеличенная резиновая подошва',
      'Износостойкая подметка',
      'Объемный брендинг',
      'Фирменный патч',
    ],
  },
];

export default products;
