const db = require('./models')
// const { Op } = require('sequelize')

// Make a bounty with a name of Han Solo, wantedFor of Owing Money, reward of 500000, and captured of false.
async function creating () {
    try {
        const [bounties, created] = await db.bounties.create({
            name: 'Han Solo',
            wantedFor: 'Owing Money',
            reward: 500000,
            captured: false
        })
        if(created === true) console.log("you got it!");
    } catch (error) {
        console.log(error);
    }
}
creating()


// Make a hunter with a name of Bobba Fett, a client of Jabba the Hut, and an active of true.
async function creating () {
    try {
        const [hunters, created] = await db.hunters.create({
            name: 'Bobba Fett',
            client: 'Jabba the Hut',
            active: true
        })
        if(created === true) console.log("you got it!");
    } catch (error) {
        console.log(error);
    }
}
creating()


// Make a hunter with a name of Dengar, a client of Mercurial Swift, and an active of false. 
// Try to do this using findOrCreate (knowing that there isn't one to find, and that sequelize will create it).
async function creating () {
    try {
        const options = {
            where: {
                name: 'Dengar'
            },
            default: {
                client: 'Mercurial Swift',
                active: false
            }
        }
        const [hunters, created] = await db.hunters.findOrCreate(options)
        if(created === true) console.log("you got it!");
    } catch (error) {
        console.log(error);
    }
}
creating()
    

// Find all bounties, assign them to a variable, and console.log them.
async function reading () {
    try {
        const allBounties = await db.bounties.findAll()
            allBounties.forEach(bounties => {
              console.log(`The name of bounty: ${bounties.name}`)
            })
    } catch (error) {
        console.log(error);
    }
}
reading()


// Find all hunters with active = true, assign them to a variable, and console.log them.
async function reading () {
    try {
        const allHunters = await db.hunters.findAll({ 
            where: active = true 
        })
            allHunters.forEach(hunters => {
              console.log(`The name of bounty: ${hunters.name}`)
            })
    } catch (error) {
        console.log(error);
    }
}
reading()


// Modify Han Solo to have a captured of true.
async function updating () {
    try {
        const [updateBounty, temp] = await db.bounties.update({
            captured: true
        }, {
            where: {
                name: "Han Solo"
            }
        })
        if (temp === true) console.log("you got it");
    } catch (error) {
        console.log(error);
    }
}
updating()


// Delete Dengar. Nobody remembers this guy anyway.
async function destroy () {
    try {
        const destroyHunter = await db.hunters.destroy({
            where: {
                name: "Dengar"
            }
        })
        console.log(destroyHunter);
    } catch (error) {
        console.log(error);
    }
}
destroy()

// Ok recreate Dengar. The deletion was just for practice. We'll actually need him later.
async function creating () {
    try {

        const options = {
            where: {
                name: 'Dengar',
                client: 'Mercurial Swift',
                active: false
            }
        }
        const [hunters, created] = await db.hunters.findOrCreate(options)
        if(created === true) console.log("you got it!");
    } catch (error) {
        console.log(error);
    }
}
creating()


/*------------------------------------------------------------------------------------------------------------------------------------*/
// Look up Han Solo and save him to a variable. Look up Bobba Fett and assign him to a variable too. Associate the two with hanSolo.addHunters(bobbaFett)
// Look up Han Solo, save him to a variable. Look up his hunters with hanSolo.getHunters() and save the result to a variable, then log that variable.
async function readingAndCreate () {
    try {
        const lookUpBounty = await db.bounties.findOne({
            where: {
                name: 'Han Solo'
            }
        })
        const lookUpHunter = await db.hunters.findOne({
            where: {
                name: 'Bobba Fett'
            }
        })
        lookUpBounty.addHunters(lookUpHunter)
        const hanSolo = await db.bounties.findOne({
            where: {
                name: 'Han Solo'
            }
        })
        const result = hanSolo.getHunters()
        console.log(result);

// // Look up Bobba Fett, save him to a variable. Look up his bounty with bobbaFett.getBounty(), and log that variable.
        const lookUpName = await db.hunters.findOne({
            where: {
                name: 'Bobba Fett'
            }
        })
        const lookUpBobbaBounty = lookUpName.getBounty()
        console.log(lookUpBobbaBounty)
    } catch (error) {
        console.log(error);
    }
}
readingAndCreate()


// Add Dengar to Han's hunters, the same way we did in step 1.
async function readingAndCreate () {
    try {
        const lookUpHunter = await db.hunters.findOne({
            where: {
                name: 'Dengar'
            }
        })
        const hanSolo = await db.bounties.findOne({
                where: {
                    name: 'Han Solo'
                }
        })
        hanSolo.getHunters(lookUpHunter)

// Repeat step 2, and the list should now include both Bobba Fett and Dengar.
// Repeat step 3, but with Dengar instead of Bobba Fett.

        const allBounties = await db.bounties.findAll({
                where: {
                    name: 'Han Solo'
                }
        })
        const resultBounties = allBounties.getBounty()
        console.log(resultBounties);

        const allHunters = await db.hunters.findAll({
                where: {
                    name: 'Dengar'
                }
        })
            const resultHunters = allHunters.getHunters()
            console.log(resultHunters);
    } catch (error) {
        console.log(error);
    }
}
readingAndCreate()