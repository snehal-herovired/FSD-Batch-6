const express = require('express');
const app = express();
app.use(express.json());

// mock data array
const products = [
  {
    id: 1,
    name: 'product_name',
    total_quantity: 12,
    type_of_product: 'shirt',
    price: 300
  },
  // add more products here
];

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Get product by id
app.get('/products/:id', (req, res) => {
  const productId = Number(req.params.id);
  const product = products.find(p => p.id === productId);
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    res.json(product);
  }
});

// Get product by name
app.get('/products/name/:name', (req, res) => {
  const productName = req.params.name;
  const product = products.find(p => p.name === productName);
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    res.json(product);
  }
});

// Add new product
app.post('/addproduct', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
