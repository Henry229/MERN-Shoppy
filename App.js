import express from 'express';
import { ProductsModel, CartsModel } from './db.js';
// import entryRoutes from './routes/entry_routes.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

// app.get('/', (request, response) => response.send({ info: 'Journal API' }));

app.get('/products', async (req, res) => res.send(await ProductsModel.find()));

app.post('/products/:id', async (req, res) => {
  try {
    const addedProduct = await ProductsModel.create(req.body);
    res.status(201).send(addedProduct);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get('/cart/:uid', async (req, res) => {
  try {
    // const inCart = await CartsModel.find();
    const inCart = await CartsModel.find({ uid: req.params.uid });
    console.log('==>In Cart: ', inCart);
    if (inCart) {
      res.send(inCart);
    } else {
      res.status(404).send({ error: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post('/carts/:uid', async (req, res) => {
  try {
    const addedCarts = await CartsModel.create(req.body);
    res.status(201).send(addedCarts);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.put('/carts/:uid', async (req, res) => {
  const { quantity, productId } = req.body;
  try {
    const updatedCarts = await CartsModel.findOneAndUpdate(
      { uid: req.params.uid, productId },
      { quantity: quantity }
    );
    res.status(201).send(updatedCarts);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// app.use('/entries', entryRoutes);

export default app;
