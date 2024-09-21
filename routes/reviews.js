const express = require('express');
const router = express.Router();

const reviews = [];

// Show all reviews
router.get('/', (req, res) => {
  res.render('index', { reviews });
});

// Form to add a new review
router.get('/new', (req, res) => {
  res.render('new');
});

// Post a new review
router.post('/', (req, res) => {
  const { title, product, content } = req.body;
  reviews.push({ title, product, content });
  res.redirect('/reviews');
});

module.exports = router;
