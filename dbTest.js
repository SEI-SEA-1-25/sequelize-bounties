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
// Make a hunter with a name of Boba Fett, a client of Jabba the Hut, and an active of true.
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
// createDengar()

// Look up Han Solo and save him to a variable. Look up Boba Fett and assign him to a variable too. Associate the two with hanSolo.addHunters(bobaFett)
async function findHan() {
      try {
            const hanSolo = await db.bounties.findOne({
                  where: {name:'Han Solo'}
            })
            const bobaFett = await db.hunters.findOne({
                  where: {name:'Boba Fett'}
            })
            await hanSolo.addHunters(bobaFett)
      } catch (error) {
            console.log(error)
      }
}
// findHan()
// Look up Han Solo, save him to a variable. Look up his hunters with hanSolo.getHunters() and save the result to a variable, then log that variable.
async function hansHunters() {
      try {
            const hanSolo = await db.bounties.findOne({
                  where: {name:'Han Solo'}
            })
            const hansHunters = await hanSolo.getHunters({
                  where: {bountyId:1}
            })
            console.log(hansHunters)
      } catch (error) {
            console.log(error)
      }
}
// hansHunters()
// // Look up Boba Fett, save him to a variable. Look up his bounty with bobaFett.getBounty(), and log that variable.
async function findBoba() {
      try {
            const bobaFett = await db.hunters.findOne({
                  where: {name:'Boba Fett'}
            })
            const bobasBounty = await bobaFett.getBounty()
            console.log(bobasBounty.name)
      } catch (error) {
            console.log(error)
      }
}
// findBoba()
// // Add Dengar to Han's hunters, the same way we did in step 1.
async function addDengar() {
      try {
            const hanSolo = await db.bounties.findOne({
                  where: {name:'Han Solo'}
            })
            const dengar = await db.hunters.findOne({
                  where: {name:'Dengar'}
            })
            await hanSolo.addHunters(dengar)
      } catch (error) {
            console.log(error)
      }
}
// addDengar()
// // Repeat step 2, and the list should now include both Boba Fett and Dengar.
// hansHunters()

// // Repeat step 3, but with Dengar instead of Boba Fett.
async function findDengar() {
      try {
            const dengar = await db.hunters.findOne({
                  where: {name:'Dengar'}
            })
            const dengarsBounty = await dengar.getBounty()
            console.log(dengarsBounty.name)
      } catch (error) {
            console.log(error)
      }
}
findDengar()