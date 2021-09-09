const {User, Pet, Toy} = require('./models');

async function createNewPet(name, species, description) {
  try {
    const user = await User.findOne({
      where: {
        id: 1
      },
      include: [Pet]
    });
    console.log(user.toJSON());
    const newPet = await user.createPet({name, species, description}); //sequelize made this method for us thanks to the associations set in the models
    console.log(newPet.toJSON());
  } catch (err) {
    console.log(err);
  }
}

// createNewPet('Drummer', 'dog', 'A whirligig of love and slappy paws');
// createNewPet('Chainsaw', 'cat', 'A little pile of soot and noise');

async function makeOneToy(type, color) {
  try {
    const newToy = await Toy.create({type, color});
    console.log(newToy.toJSON());
  } catch (err) {
    console.log(err)
  }
}

// makeOneToy('kong', 'red');

async function associateToy() {
  try {
    const foundPet = await Pet.findOne({
      where: {id: 3},
      include: [Toy]
    });

    const foundToy = await Toy.findOne({
      where: {id: 1}
    });

    const result = await foundPet.addToy(foundToy); //sequelize made this method for us because of the M:M association
    console.log(result);

  } catch (err) {
    console.log(err);
  }
}

// associateToy()

async function findFirstPetWithToy() {
  try {
    const foundPet = await Pet.findOne({
      where: {id: 1},
      include: [Toy]
    });
    console.log(foundPet.toJSON());
  } catch (err) {
    console.log(err);
  }
}

findFirstPetWithToy();