import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 5001; 

// Middleware
app.use(cors());
app.use(express.json());

// Definir rutas directamente
const productRouter = express.Router();

productRouter.get('/mercadolibre-products', async (req, res) => {
  try {
    const accessToken = process.env.ACCESS_TOKEN;
    const userId = '227249460'; 

    if (!accessToken) {
      return res.status(500).json({ message: 'ACCESS_TOKEN no definido en las variables de entorno' });
    }

    // Obtener IDs de los productos del usuario
    const response = await axios.get(`https://api.mercadolibre.com/users/${userId}/items/search`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const productIds = response.data.results;

    // Obtener detalles de cada producto
    const productDetails = await Promise.all(
      productIds.map(async (productId) => {
        const productResponse = await axios.get(`https://api.mercadolibre.com/items/${productId}`);
        return {
          id: productResponse.data.id,
          name: productResponse.data.title,
          price: productResponse.data.price,
          imageUrl: productResponse.data.thumbnail,
          permalink: productResponse.data.permalink,
        };
      })
    );

    res.json(productDetails);
  } catch (error) {
    console.error('Error al obtener productos:', error.response?.data || error.message);
    res.status(500).json({ message: 'Error al obtener los productos de Mercado Libre' });
  }
});

// Registrar rutas
app.use("/api/products", productRouter);

// Ruta para manejar 404
app.use("*", (req, res) => {
  res.status(404).send("404 - Not Found!");
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`✅ Server is running on https://promarketconnect.com or http://localhost:${port}`);
});
