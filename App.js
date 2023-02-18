import express from 'express';
import { ProductsModel } from './db.js';
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

// app.use('/entries', entryRoutes);

export default app;
