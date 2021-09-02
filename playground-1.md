```
const {User} = require('./models');

// ANCHOR create
async function makeUser(firstName, lastName, age, email) {
  try {
    const newUser = await User.create({firstName, lastName, age, email});
    console.log(newUser.toJSON());
  } catch (err) {
    console.log(err);
  }
}

// makeUser('Kasai', 'Avery', 18, 'sai.avery@ga.co');

// ANCHOR create that can also read
async function findOrCreateUser(firstName, lastName, age, email) {
  try {
    const [user, created] = await User.findOrCreate({
      where: {firstName, lastName},
      defaults: {age, email}
    });

    console.log('USER:', user.toJSON()); // => object
    console.log('WAS CREATED: ', created); // => true or false
  } catch (err) {
    console.log(err);
  }
}

// findOrCreateUser('Quinlan', 'Sparks', 29, 'quinlan.sparks@generalassemb.ly');
// findOrCreateUser('Rome', 'Bell', 33, 'rome.bell@ga.co');

// ANCHOR read (show)
async function fetchUserByName(firstName, lastName) {
  try {
    const foundUser = await User.findOne({
      where: {firstName, lastName}
    });
    console.log(foundUser.toJSON());
  } catch (err) {
    console.log(err);
  }
}

// fetchUserByName('Quinlan', 'Sparks');

// ANCHOR read (index)
async function fetchAllUsers() {
  try {
      const allUsers = await User.findAll();
      const users = allUsers.map(u => u.toJSON())
      console.log(users);
  } catch (err) {
      console.log(err);
  }
} 
// fetchAllUsers();

// ANCHOR update
async function updateUser(firstName, lastName, email, age) {
  try {
    const numberOfRowsUpdated = await User.update({email, age}, {
      where: {firstName, lastName}
    });
    console.log(numberOfRowsUpdated)
  } catch (err) {
    console.log(err);
  }
}

// updateUser('Brick', 'Sparks', 'quinlan.sparks@generalassemb.ly', 29);

// ANCHOR delete
async function deleteUser(email) {
  try {
    const deletedUserData = await User.destroy({
      where: {email}
    });
    console.log(deletedUserData);
  } catch (err) {
    console.log(err);
  }
}

// deleteUser('sai.avery@ga.co');
```