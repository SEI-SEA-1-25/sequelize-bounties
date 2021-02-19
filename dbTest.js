const models = require('./models')

const crud1 = async () => {
    models.bounty.create({
        name: 'Han Solo',
        wantedFor: 'Owing Money',
        reward: 500000,
        captured: false
    })
}
// crud1()

const crud2 = async () =>{
    // models.hunter.create({
    //     name: 'Bobba Fett',
    //     client: 'Jaba the Hutt',
    //     active: true
    // })
    models.hunter.findOrCreate ({
        where: {
            name: 'Bobba Fett',
            client: 'Jaba the Hutt',
            active: true
        }
    })
}
// crud2()
const crud3 = async () =>{
     models.hunter.findOrCreate({
        where: {
            name: 'Dengar',
            client: 'Mercurial Swift',
            active: false
        }
    })
    
}
// crud3()

const crud4 = async () =>{
    try{
        const allBounties = await models.bounty.findAll() 
        console.log(allBounties)
    } catch (error) {
        console.log(error)
    }
}

const crud5 = async () =>{
    try{ const activeHunters = await models.hunter.findAll({
        where: {
            active: true
        }
        })
    } catch (error){
        console.log(error)
    }
    
}

const crud6 = async () => {
    try {
        models.bounty.update({
            captured: true
        }), {
            where: {
                name: 'Han Solo'
            }
        }
    } catch (error){
        console.log(error)
    }
}


const crud6 = async () => {
    try {
        models

    } catch (error){
        console.log(error)
    }
}