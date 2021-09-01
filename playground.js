const {User} = require('./models');

// ANCHOR create
async function makeUser(firstName, lastName, age, email) {
  try {
    const newUser = await User.create({firstName, lastName, age, email});
    console.log(newUser);
  } catch (err) {
    console.log(err);
  }
}

// makeUser('Quinlan Sparks', 29, 'quinlan.sparks@generalassemb.ly');

// ANCHOR create that can also read
async function findOrCreateUser(name, age, email) {
  try {
    const [user, created] = await User.findOrCreate({
      where: {name},
      defaults: {age, email}
    });

    console.log('USER:', user); // => object
    console.log('WAS CREATED: ', created); // => true or false
  } catch (err) {
    console.log(err);
  }
}

// findOrCreateUser('Quinlan Sparks', 29, 'quinlan.sparks@generalassemb.ly');
// findOrCreateUser('Rome Bell', 33, 'rome.bell@ga.co');

// ANCHOR read
async function fetchUserByName(name) {
  try {
    const foundUser = await User.findOne({
      where: {name}
    });
    console.log(foundUser);
  } catch (err) {
    console.log(err);
  }
}

fetchUserByName('Quinlan Sparks');