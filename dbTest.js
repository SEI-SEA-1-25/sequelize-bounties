// npm init -y
// npm install sequelize pg
// echo node_modules >> .gitignore
// sequelize init
// createdb sequelize_bounties 
// sequelize model:generate --name=bounty --attributes name:text,wantedFor:text,reward:integer,captured:boolean
// sequelize model:generate --name=hunter --attributes name:text,client:text,active:boolean

const db = require('./models')

// CREATING

async function creatingBounty() {
    try{
        const options = {
            where: { name: "Han Solo" },
            defaults: { 
                wantedFor: "Owing money",
                reward: 500000,
                captured: false
             }
        }
        const [bounty, created]  = await db.bounty.findOrCreate(options)
        if(created === true) console.log(`${bounty.name} was created`)

        const hunterOptions = {
            where: { name: "Dengar" },
            defaults: {
                client: "Mercurial Swift",
                active: false
            }
        }
        const[hunter, whatever] = await db.hunter.findOrCreate(hunterOptions)
        if(whatever === true) console.log(`${hunter.name} was created`)

    } catch (err) {
        console.log(error)
    }
}

creatingBounty()

// READING

async function readingBounties() {
    try {
        // const bounties = await db.bounty.findAll()
        // bounties.forEach(bounty => {
        //     console.log(bounty.name)
        // })
        const hunters = await db.hunter.findAll({
            where: {
                active: true
            }
        })
        console.log(hunters)
    } catch (err) {
        console.log(err)
    }
}

// readingBounties()

// UPDATING

async function updating() {
    try {
        bountyUpdate = await db.bounty.update({
            captured: true
        }, {
            where: {
                name: "Han Solo"
            }
        })
        console.log(bountyUpdate)
    } catch (err) {
        console.log(err)
    }
}

// updating()

// DESTROYING

async function destroying () {
    try {
        const numHunterDestroyed = await db.hunter.destroy({
            where: {
                name: "Dengar"
            }
        })
        console.log(numHunterDestroyed)
    } catch (err) {
        console.log(err)
    }
}

// destroying()