const faker = require('faker');

const seedArray = [];
for (let i = 0; i < 1000; i++) {
  const newObj = {
    name: faker.name.findName(),
    age: 30,
    email: faker.internet.email(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  seedArray.push(newObj);
}

console.log(seedArray);