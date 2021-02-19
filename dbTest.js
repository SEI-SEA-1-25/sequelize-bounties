const db = require('./models')


async function creating (){
    try{
    
    // PROB 1
    // const newBountyHan = await db.bounty.create({
    //     name: 'Han Solo',
    //     wantedFor: 'Owing Money',
    //     reward: 500000,
    //     captured: false
    // })
    
    // PROB 2
    // const newHunterBobba = await db.hunter.create({
    //     name: 'Bobba Fett',
    //     client: 'Jabba the Hut',
    //     active: true
    // })
    
    // PROB 3 & PROB 7
    const huntersForC = {
        where: {name: 'Dengar'},
        defaults: {client: 'Murcurial Swift', active: false}
    }
    const [hunter, created] = await db.hunter.findOrCreate(huntersForC)
    if(created === true) console.log(`${hunter.name} was created!`)


    }catch(error){
     console.log(error);
    }

}

creating ();


async function reading () {
    try {
    
    //PROB 4
    const allBounties = await db.bounty.findAll()
    //console.log(allBounties)

    //PROB 5
    const allHunters = await db.hunter.findAll()
    //console.log(allHunters)

    //PROB 6
    const activeHunters = await db.hunter.findAll({
        where: {
            active: true
        }
    })
    // console.log(activeHunters)
    

    }catch(error){
     console.log(error)   
    }
}

// reading ();

// PROB 6
async function updating () {
    try{

    const updateBounty = await db.bounty.update({ 
        captured: true 
    }, {
        where: {
            name: "Han Solo"
        }
    })
    console.log(updateBounty)
    }catch(error){
    }
}

// updating(); 


//PROB 7

async function destroying () {
    try {
     
    const destroyHunter = await db.hunter.destroy({
        where: {
            name: "Dengar"
        }
    })
    console.log(destroyHunter)
    }catch(error){
     console.log(error)
    }
}

// destroying();