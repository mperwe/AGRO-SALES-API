const express = require('express');
const userRouter = require ('./routes/userRouter');
const categoriesRouter = require ('./routes/categoriesRouter');
const productsRouter = require ('./routes/productsRouter');

const server = express();
const port = 4300; 

// middleware
server.use('/api/v1/users', userRouter)
server.use('/api/v1/products', productsRouter)
server.use('/api/v1/categories', categoriesRouter)

server.get('/api/v1', (req, res) => {
  res.send('Hello, World!');
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});