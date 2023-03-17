export const products = [
  {
    id: '59ada78b367c010023bc3bee',
    slug: 'sapphire',
    image:
      'https://shared.winelivery.com/images/products/59ada78b367c010023bc3bee.jpeg',
    category: 'traditional',
    characteristic: 'balanced',
  },
  {
    id: '6177f488479a730067687c94',
    slug: 'premier',
    image:
      'https://shared.winelivery.com/images/products/6177f488479a730067687c94.jpeg',
    category: 'traditional',
    characteristic: 'round',
  },
  {
    id: '63f8d8d6f3bab2006c43f383',
    slug: 'presse',
    image:
      'https://shared.winelivery.com/images/products/63f8d8d6f3bab2006c43f383.jpeg',
    category: 'flavored',
    characteristic: 'light',
  },
  {
    id: '60801e427de2c50013d51b12',
    slug: 'sunset',
    image:
      'https://shared.winelivery.com/images/products/60801e427de2c50013d51b12.jpeg',
    category: 'flavored',
    characteristic: 'spicy',
  },
];

export const categories = [
  {
    slug: 'traditional',
    image: '',
  },
  {
    slug: 'flavored',
    image: '',
  },
];

export const characteristics = [
  {
    slug: 'balanced',
    image: '',
  },
  {
    slug: 'round',
    image: '',
  },
  {
    slug: 'light',
    image: '',
  },
  {
    slug: 'spicy',
    image: '',
  },
];

export function findCategories() {
  const productChars = products.map((product) => product.category);
  return categories.filter((c) => productChars.includes(c.slug));
}

export function findCharacteristics(params: { category?: string } = {}) {
  const productChars = products
    .filter((product) =>
      params.category ? product.category === params.category : true
    )
    .map((product) => product.characteristic);

  return characteristics.filter((c) => productChars.includes(c.slug));
}

export function findProduct(params: {
  category: string;
  characteristic: string;
}) {
  return products.find(
    (p) =>
      p.category === params.category &&
      p.characteristic === params.characteristic
  );
}
