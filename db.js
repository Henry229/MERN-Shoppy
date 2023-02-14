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
  options: { type: String, required: true },
});

const ProductsModel = mongoose.model('products', productsSchema);

export { ProductsModel, dbClose };
