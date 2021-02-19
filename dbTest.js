const db = require('./models')

// Make a bounty with a name of Han Solo, wantedFor of Owing Money, reward of 500000, and captured of false.
async function createBounty() {
      try {
            await db.bounties.create({
                 name: 'Han Solo',
                  wantedFor: 'Owing Money',
                  reward: 500000,
                  captured: false
            }) 
      } catch (error) {
            console.log(error)
      }
}
// createBounty()
// Make a hunter with a name of Bobba Fett, a client of Jabba the Hut, and an active of true.
async function createHunter() {
      try {
            await db.hunters.create({
                  name: 'Boba Fett',
                  client: 'Jabba the Hut',
                  active: true
            })
      } catch (error) {
            console.log(error)
      }
}
// createHunter()

// Make a hunter with a name of Dengar, a client of Mercurial Swift, and an active of false. Try to do this using findOrCreate (knowing that there isn't one to find, and that sequelize will create it).
async function createDengar() {
      try {
            const options = {
                  where: {
                        name: 'Dengar',
                        client: 'Mercurial Swift',
                        active: false
                  }
            }
            await db.hunters.findOrCreate(options)
      } catch (error) {
            console.log(error)
      }
}
// createDengar()

// Find all bounties, assign them to a variable, and console.log them.
async function findBounties() {
      try {
            const allBounties = await db.bounties.findAll()
            allBounties.forEach(bounties => {
            console.log(`The current bounties are ${bounties.name}`)
            })
      } catch (error) {
            console.log(error)
      }
}
// findBounties()

// Find all hunters with active = true, assign them to a variable, and console.log them.
async function findHunters() {
      try {
            const activeHunters = await db.hunters.findAll({
                  where: {active:true}
            })
            activeHunters.forEach(hunters => {
                  console.log(`${hunters.name} is an active hunter.`)
            })
      } catch (error) {
            console.log(error)
      }
}
// findHunters()

// Modify Han Solo to have a captured of true.
async function updateSolo() {
      try {
            await db.bounties.update({
                  captured: true},
                  {where: {name:'Han Solo'}
            })
      } catch (error) {
            console.log(error)
      }
}
// updateSolo()

// Delete Dengar. Nobody remembers this guy anyway.
async function deleteDengar() {
      try {
            await db.hunters.destroy({
                  where: {name:'Dengar'}
            })
      } catch (error) {
            console.log(error)
      }
}
// deleteDengar()

// Ok recreate Dengar. The deletion was just for practice. We'll actually need him later.
createDengar()