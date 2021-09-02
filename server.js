const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');

const {User} = require('./models');

const app = express();

const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('Welcome to my userapp');
});

app.get('/users', async (req, res) => {
  try {
    const allUsers = await User.findAll({});
    const parsedUsers = allUsers.map(u => u.toJSON());
    context = {
      users: parsedUsers
    }
    res.render('users/index', context)
  } catch (err) {
    console.log(err);
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});
