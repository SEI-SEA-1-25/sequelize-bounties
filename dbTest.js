const models = require("./models");
const db = require("./models");

//////////////////////////////////////////////
/*
1. 
models.bounty.create({
  name: "Han Solo",
  wantedFor: "Owing money",
  reward: 500000,
  capture: false,
});
*/

/*
///////////////////////////////////////////
2.
models.hunter.create({
  name: "Bobba Fett",
  client: "Jabba the Hut",

  active: true,
});
*/
///////////////////////////////////////////
/*
// 3.
async function creating() {
  try {
    // simple create
    const hunter = await db.hunter.create({
      name: "Bobba Fett",
      client: "Jabba the Hut",
      active: true,
    });
    console.log(hunter);
  } catch (error) {
    console.log(error);
  }
}
creating();
*/
///////////////////////////
// 4.

/*
async function creating() {
  try {
  
    const options = {
      where: { name: "Jane" },
      defaults: { age: 35 },
    };
    const [owner, created] = await db.owner.findOrCreate(options);
    if (created == true) console.log(`${owner.name} was created!`);

    const propertyOptions = {
      where: { name: "Mesa Verde" },
      defaults: { units: 1000 },
    };
  } catch (error) {
    console.log(error);
  }
};
*/
