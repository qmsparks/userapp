const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');

const app = express();

const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('Welcome to my userapp');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});