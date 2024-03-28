const express = require('express');
const router = express.Router();

// Dummy data
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];

// GET /api/users
router.get('/', (req, res) => {
  res.json(users);
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
    /* 
    #swagger.tags = ['Diary']
    #swagger.description="user get api"
    
  */
  const { id } = req.params;
  const user = users.find(u => u.id === parseInt(id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST /api/users
router.post('/', (req, res) => {
    /* 
    #swagger.tags = ['Diary']
    
  */
  // For simplicity, assume req.body contains user data
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /api/users/:id
router.put('/:id', (req, res) => {
    /* 
    #swagger.tags = ['Diary']
    
  */
  const { id } = req.params;
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  if (userIndex !== -1) {
    // For simplicity, assume req.body contains updated user data
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// DELETE /api/users/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// DELETE /api/users/:id
router.delete('prod/del/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === parseInt(id));
    if (userIndex !== -1) {
      const deletedUser = users.splice(userIndex, 1);
      res.json(deletedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });

  //produts
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 }
  ];
  
  // GET /api/products
  router.get('/prod', (req, res) => {
    res.json(products);
  });
  
  // GET /api/products/:id
  router.get('prod/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });

module.exports = router;
