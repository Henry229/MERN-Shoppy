import { ProductsModel, CartsModel, dbClose } from './db.js';

await ProductsModel.deleteMany();
console.log('Deleted all products');
await CartsModel.deleteMany();
console.log('Deleted all carts');

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

const carts = [
  {
    title: 'Basie OncePiece',
    price: 150,
    image:
      'http://res.cloudinary.com/ddfl8c6gu/image/upload/v1676160988/ijqu0pkr7utxazha0eov.webp',
    category: 'Women',
    description: 'descent looks for career women',
    options: 'M',
    quantity: 1,
    uid: '3zwWVNDMjsWT3LtpqTaHmIZ2LM32',
    productId: '63eb6a97eef6c2b200c34341',
  },
];

await CartsModel.insertMany(carts);
console.log('Inserted carts');

dbClose();
