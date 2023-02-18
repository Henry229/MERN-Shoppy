import { ProductsModel, dbClose } from './db.js';

await ProductsModel.deleteMany();
console.log('Deleted all products');
// await CategoryModel.deleteMany();
// console.log('Deleted all categories');

const products = [
  {
    title: 'Basie OncePiece',
    price: 150,
    image:
      'http://res.cloudinary.com/ddfl8c6gu/image/upload/v1676160988/ijqu0pkr7utxazha0eov.webp',
    category: 'Women',
    description: 'descent looks for career women',
    options: ['S', 'M', 'L', 'XL'],
  },
  {
    title: 'Black Hoodie',
    price: 80,
    image:
      'http://res.cloudinary.com/ddfl8c6gu/image/upload/v1676160814/wxttajqcuu5bsh9bbhwt.webp',
    category: 'Unisex',
    description: 'good match with teenagers',
    options: ['S', 'M', 'L', 'XL'],
  },
  {
    title: 'Pink Hoodie',
    price: 80,
    image:
      'http://res.cloudinary.com/ddfl8c6gu/image/upload/v1676160047/rlwp8d2ntfi5eo5szddg.webp',
    category: 'Unisex',
    description: 'good match with teenagers',
    options: ['S', 'M', 'L', 'XL'],
  },
];

await ProductsModel.insertMany(products);
console.log('Inserted products');

// const entries = [
//   { category: cats[0], content: 'Hello!' },
//   { category: cats[1], content: 'Express is cool!' },
//   { category: cats[2], content: 'Another day at the office' },
// ];

// await EntryModel.insertMany(entries);
// console.log('Inserted entries');

dbClose();
