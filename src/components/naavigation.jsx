export const navigation = {
    categories: [
      {
        id: 'air-conditioners',
        name: 'Air Conditioners',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://m.media-amazon.com/images/I/71VCxuyXp0L._AC_UL640_FMwebp_QL65_.jpg',
            imageAlt: 'New Air Conditioner',
          },
          {
            name: 'Best Sellers',
            href: '/',
            imageSrc: 'https://m.media-amazon.com/images/I/81bH4t6EzBL._SX679_.jpg',
            imageAlt: 'Top selling ACs',
          },
        ],
        sections: [
          {
            id: 'types',
            name: 'Types',
            items: [
              { name: 'Split AC', id: 'split-ac' },
              { name: 'Window AC', id: 'window-ac' },
              { name: 'Portable AC', id: 'portable-ac' },
              { name: 'Inverter AC', id: 'inverter-ac' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'LG', id: 'lg-ac' },
              { name: 'Samsung', id: 'samsung-ac' },
              { name: 'Voltas', id: 'voltas-ac' },
              { name: 'Daikin', id: 'daikin-ac' },
            ],
          },
        ],
      },
      {
        id: 'coolers',
        name: 'Air Coolers',
        featured: [
          {
            name: 'Smart Coolers',
            href: '/',
            imageSrc: 'https://m.media-amazon.com/images/I/71M03uUMx2L._SX679_.jpg',
            imageAlt: 'Smart Air Coolers',
          },
          {
            name: 'Top Rated',
            href: '/',
            imageSrc: 'https://m.media-amazon.com/images/I/81c1AfKDb-L._SX679_.jpg',
            imageAlt: 'Top rated air coolers',
          },
        ],
        sections: [
          {
            id: 'types',
            name: 'Types',
            items: [
              { name: 'Desert Coolers', id: 'desert-cooler' },
              { name: 'Tower Coolers', id: 'tower-cooler' },
              { name: 'Personal Coolers', id: 'personal-cooler' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Symphony', id: 'symphony' },
              { name: 'Crompton', id: 'crompton' },
              { name: 'Bajaj', id: 'bajaj' },
              { name: 'Havells', id: 'havells' },
            ],
          },
        ],
      },
      {
        id: 'fans',
        name: 'Fans',
        featured: [
          {
            name: 'New Fans',
            href: '/',
            imageSrc: 'https://static.toiimg.com/thumb/msid-81703277,imgsize-150899,width-400,resizemode-4/81703277.jpghttps://m.media-amazon.com/images/I/7105f1NvdWL._SX679_.jpg',
            imageAlt: 'New fans in market',
          },
          {
            name: 'Atomberg Fans',
            href: '/',
            imageSrc: 'https://static.toiimg.com/thumb/msid-81703277,imgsize-150899,width-400,resizemode-4/81703277.jpg',
            imageAlt: 'Energy saving Atomberg fans',
          },
        ],
        sections: [
          {
            id: 'types',
            name: 'Types',
            items: [
              { name: 'Ceiling Fans', id: 'ceiling-fans' },
              { name: 'Table Fans', id: 'table-fans' },
              { name: 'Pedestal Fans', id: 'pedestal-fans' },
              { name: 'Wall Fans', id: 'wall-fans' },
              { name: 'Exhaust Fans', id: 'exhaust-fans' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Atomberg', id: 'atomberg' },
              { name: 'Orient', id: 'orient' },
              { name: 'Usha', id: 'usha' },
              { name: 'Havells', id: 'havells-fans' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }
  
  export default navigation;
  