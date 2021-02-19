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

// 3.
// async function creating() {
//   try {
//     // simple create
//     const hunter = await db.hunter.create({
//       name: "Dengar",
//       client: "Mercurial Swift",
//       active: false,
//     });
//     console.log(hunter);
//   } catch (error) {
//     console.log(error);
//   }
// }
// creating();

///////////////////////////
// 4.
/*
async function reading() {
  try {
    const bounties = await db.bounty.findAll();
    console.log(bounties);
  } catch (error) {
    console.log(error);
  }
}
reading();
*/

//////////////////////////////////////////////
// 5.
// async function reading() {
//   try {
//     const activeHunters = await db.hunter.findOne(
//       {
//         where: {
//           active = t,
//         }
//       }
//     );
//     console.log(activeHunters);
//   } catch (error) {
//     console.log(error);
//   }
// }
// reading();

//////////////////////////////////////////////

// 6.

// async function updating() {
//   try {
//     const numRowsUpdated = await db.bounty.update(
//       {
//         captured: true,
//       },
//       {
//         where: {
//           captured: false,
//         },
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// }

// updating();

/////////////////////////////////////////////////////

// 7.
// async function destroying() {
//   try {
//     const numOwnersDestroyed = await db.hunter.destroy({
//       where: {
//         name: "Dengar",
//       },
//     });
//     console.log(numOwnersDestroyed);
//   } catch (error) {
//     console.log(error);
//   }
// }

// destroying();
// personal notes below will remove
////////////////////////////////////////
// async function reading() {
//   try {
//     // console.log(owners);
//     // owners.forEach((owner) => {
//     //   console.log(`${owner.name} is ${owner.age}  years old`);
//     // });
//     ///////////////
//     // const owners = await db.owner.findAll();
//     // const william = await db.owner.findOne({
//     //   where: {
//     //     name: "William",
//     //   },
//     // });
//     // console.log(`found ${william.name}`);
//     //////////////////////
//     const owners = await db.owner.findAll({
//       include: db.property,
//     });

//     owners.forEach((owner) => {
//       owner.properties.forEach((property) => {
//         console.log(property);
//       });
//     });
//     // console.log(owners);
//   } catch (error) {
//     console.log(error);
//   }
// }
// reading();

////////////////////////////////////////////////////
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
