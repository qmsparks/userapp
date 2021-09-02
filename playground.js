const {User, Pet} = require('./models');

async function createNewPet(name, species, description) {
  try {
    const user = await User.findOne({
      where: {
        id: 1
      },
      include: [Pet]
    });
    console.log(user.toJSON());
    const newPet = await user.createPet({name, species, description});
    console.log(newPet.toJSON());
  } catch (err) {
    console.log(err);
  }
}

// createNewPet('Drummer', 'dog', 'A whirligig of love and slappy paws');
// createNewPet('Chainsaw', 'cat', 'A little pile of soot and noise');
