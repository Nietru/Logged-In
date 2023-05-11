const connection = require("../config/connection");
const User = require("../models/users");

const userSeed = [
  {
    username: "bob",
    email: "bob@email.com",
  },
];

connection.once("open", async () => {
  //resetting the user table by deleting any previous information
  await User.deleteMany({});

  //seeding the table with information
  await User.insertMany(userSeed);

  //ending the process once everything is seeded
  process.exit(0);
});
