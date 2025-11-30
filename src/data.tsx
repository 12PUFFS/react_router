export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  photos: string[];
  description: string;
  fulldesc: string;
  category: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Кроссовки NIKE Dunk Low Retro',
    price: 16.979,
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
  },
  {
    id: 2,
    title: 'кроссовки Nike Air Jordan 1 High Golf Camo',
    price: 23.899,
    image:
      'https://img.brandshop.ru/cache/products/d/dq0660-300-0_1104x1104.webp',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.9,
    photos: [
      'https://img.brandshop.ru/cache/products/d/dq0660-300-0_1104x1104.webp',
    ],
  },
  {
    id: 3,
    title: 'Кроссовки Nike P-6000',
    price: 23.899,
    image:
      'https://img.brandshop.ru/cache/products/c/cn0149-001-0_1104x1104.webp',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.7,
    photos: [
      'https://img.brandshop.ru/cache/products/c/cn0149-001-0_1104x1104.webp',
    ],
  },
  {
    id: 4,
    title: 'Кроссовки Nike Wmns Cortez',
    price: 14.999,
    image:
      'https://img.brandshop.ru/cache/products/d/dn1791-108-0_1104x1104.webp',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.6,
    photos: [
      'https://img.brandshop.ru/cache/products/d/dn1791-108-0_1104x1104.webp',
    ],
  },
  {
    id: 5,
    title: 'Мужские New Balance кроссовки M1000F',
    price: 14.999,
    image: 'https://img.brandshop.ru/cache/products/m/m1000f-0_1104x1104.webp',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.5,
    photos: [
      'https://img.brandshop.ru/cache/products/m/m1000f-0_1104x1104.webp',
    ],
  },
  {
    id: 6,
    title: 'Мужские кроссовки New Balance M1000F',
    price: 14.999,
    image: 'https://img.brandshop.ru/cache/products/m/mr530sg-0_1104x1104.webp',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.4,
    photos: [
      'https://img.brandshop.ru/cache/products/m/mr530sg-0_1104x1104.webp',
    ],
  },
  {
    id: 7,
    title: 'Мужские кроссовки New Balance MR530EWB',
    price: 14.99,
    image:
      'https://img.brandshop.ru/cache/products/m/mr530ewb-0_1104x1104.webp',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.4,
    photos: [
      'https://img.brandshop.ru/cache/products/m/mr530ewb-0_1104x1104.webp',
    ],
  },
  {
    id: 8,
    title: 'Мужские кроссовки New Balance BB550LEZ',
    price: 14.99,
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
  },
  {
    id: 9,
    title: 'Мужские кроссовки Adidas Superstar II',
    price: 14.99,
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
  },
];

export default products;
