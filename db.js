import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.set('strictQuery', true);

async function dbClose() {
  await mongoose.connection.close();
  console.log('Database disconnected!');
}

// Connect to a MongoDB via Mongoose
try {
  const m = await mongoose.connect(process.env.ATLAS_DB_URL);
  console.log(
    m.connection.readyState === 1
      ? 'Mongoose connected!'
      : 'Mongoose failed to connect'
  );
} catch (err) {
  console.log(err);
}

const productsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  options: { type: Array, required: true },
});

const ProductsModel = mongoose.model('Products', productsSchema);

const cartsSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  productId: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  options: { type: Array, required: true },
  quantity: { type: Number, required: true },
});

// const cartsSchema = new mongoose.Schema({
//   uid: {
//     productId: {
//       title: { type: String, required: true },
//       price: { type: Number, required: true },
//       image: { type: String, required: true },
//       category: { type: String, required: true },
//       description: { type: String, required: true },
//       options: { type: Array, required: true },
//       quantity: { type: Number, required: true },
//     },
//   },
// });

const CartsModel = mongoose.model('Cart', cartsSchema);

export { ProductsModel, CartsModel, dbClose };
