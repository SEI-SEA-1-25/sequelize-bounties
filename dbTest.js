const bounty_hunters_db = require("./models");

///create Bounty Files
async function createBounty() {
  try {
    // create returns the row that was created
    const createdBounty = await bounty_hunters_db.bounty.create({
      name: "Han Solo",
      reward: 500000,
      wantedFor: "Owing Money",
      captured: false,
    });
    console.log(`created new bounty: ${createdBounty.name}`);
  } catch (error) {
    console.log("🔥🔥🔥", error);
  }
}
// createBounty();

///create Hunter Files
async function createHunter() {
  try {
    // create returns the row that was created
    const createdHunter = await bounty_hunters_db.hunter.create({
      name: "Dengar",
      client: "Mercurial Swift",
      active: false,
    });
    console.log(`created new hunter: ${createdHunter.name}`);
  } catch (error) {
    console.log("🔥🔥🔥", error);
  }
}
createHunter();

///Find all Bounties
async function findAllBounties() {
  try {
    // findAll returns an iterable
    const bounties = await bounty_hunters_db.bounty.findAll();

    // log the names of each bounty
    bounties.forEach((bounty) => {
      console.log(bounty.name);
    });
  } catch (error) {
    console.log("🔥🔥🔥", error);
  }
}
// findAllBounties();

///Find all Hunters
async function findAllActiveHunters() {
  try {
    const options = {
      where: {
        active: true,
      },
    };
    // findAll returns an iterable
    const hunters = await bounty_hunters_db.hunter.findAll();

    // log the names of each hunter
    hunters.forEach((hunter) => {
      console.log(hunter.name, hunter.active);
    });
  } catch (error) {
    console.log("🔥🔥🔥", error);
  }
}
// findAllActiveHunters();

//Change Hon Solo to caught
async function updateBounty() {
  try {
    // what to update
    const update = {
      captured: true,
    };
    // where to updated
    const options = {
      where: {
        name: "Han Solo",
      },
    };
    // takes the columns to update as first argument
    // update returns the number of rows that where updated
    const rowsUpdated = await bounty_hunters_db.bounty.update(update, options);
    console.log(`number of rows changed: ${rowsUpdated}`);
  } catch (error) {
    console.log("🔥🔥🔥", error);
  }
}
// updateBounty();

///Remove Hunter
async function removeHunter() {
  try {
    // returns the number of rows deleted from the db
    const numRowsDeleted = await bounty_hunters_db.hunter.destroy({
      where: {
        name: "Dengar",
      },
    });
    console.log(`${numRowsDeleted} removed from the db`);
  } catch (error) {
    console.log(error);
  }
}
// removeHunter();
