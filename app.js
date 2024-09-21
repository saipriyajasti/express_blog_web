const express = require('express');
const path = require('path');
const reviewsRouter = require('./routes/reviews');

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// View engine
app.set('view engine', 'ejs');

// Routes
app.use('/reviews', reviewsRouter);

app.get('/', (req, res) => {
  res.redirect('/reviews');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
