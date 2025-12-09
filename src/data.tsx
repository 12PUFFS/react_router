export interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  photos: string[];
  description: string;
  fulldesc: string;
  category: string;
  models: string;
  desc: string[];
  rating: number;
  availableSizes: number[];
  variants: [string, string] | [];
  selectedSize?: number | null;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Кроссовки Nike Dunk Low Retro',
    price: '13 490',
    image: 'https://ir.ozone.ru/s3/multimedia-1-t/wc1000/7695221033.jpg',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.5,
    photos: [
      'https://ir.ozone.ru/s3/multimedia-1-t/wc1000/7695221033.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-4/wc1000/7695221116.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-1/wc1000/7695221041.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-o/wc1000/7695221028.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-5/wc1000/7695221009.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-c/wc1000/7695221016.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-f/wc1000/7695221019.jpg',
    ],
    desc: [
      'Материал: Композиционная кожа',
      'Страна-производитель: Вьетнам',
      'Материал стельки - ЭВА (вспененный полимер)+искусственная кожа+текстиль',
      'Материал подошвы обуви - Искусственные материалы',
      'Спортивное назначение - Фитнес, Бег, Автоспорт, Волейбол',
      'Сезон - На любой сезон',
    ],
    variants: [
      'https://ir.ozone.ru/s3/multimedia-1-t/wc1000/7695221033.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-k/wc1000/7435891604.jpg',
    ],
    availableSizes: [38, 39, 40, 41, 42, 43, 45],
    models: 'dunk',
  },

  {
    id: 2,
    title: 'Кроссовки Nike Dunk Low Retro',
    price: '13 490',
    image: 'https://ir.ozone.ru/s3/multimedia-1-k/wc1000/7435891604.jpg',
    description: 'Классические кроссовки в ретро-стиле с удобной амортизацией',
    category: 'shoes',
    fulldesc:
      'Кроссовки Nike Dunk Low Retro - это стильная и универсальная модель...',
    rating: 4.4,
    photos: [
      'https://ir.ozone.ru/s3/multimedia-1-k/wc1000/7435891604.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-4/wc1000/7695221116.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-1/wc1000/7695221041.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-o/wc1000/7695221028.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-5/wc1000/7695221009.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-c/wc1000/7695221016.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-f/wc1000/7695221019.jpg',
    ],
    desc: [
      'Материал - Кожа',
      'Материал стельки - Вспененный полиуретан+микрофибра',
      'Материал подошвы обуви - Искусственный каучук',
      'Сезон - На любой сезон',
      'Бренд в одежде и обуви - Nike',
    ],
    variants: [
      'https://ir.ozone.ru/s3/multimedia-1-k/wc1000/7435891604.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-4/wc1000/7695221116.jpg',
    ],
    availableSizes: [38, 39, 40, 41],
    models: 'dunk',
  },
];

export default products;
