const models = require('./models')

const crud1 = async() => {
    console.log(models.bounty)
    models.bounty.create({
        name:'Han Solo',
        wantedFor: 'Owing Money',
        reward: 500000,
        captured: false
    })

}
//crud1()

const crud2 =  async() => {
    models.hunter.findOrCreate({
        where: {
        name: 'Boba Fett',
        client: 'Jabba the Hutt',
        active:true
        }
    })
}
//crud2()

const crud3 = async() => {
    models.hunter.findOrCreate({
        where: {
            name: 'Dengar',
            client: 'Mercurial Swift',
            active: false
        }
    })
}

crud3()

const crud4 = async() => {
    try {
    const allBounties = await models.bounty.findAll()
    console.log(allBounties)}
    catch(err){
        console.log(err)
    }
}
crud4()

const crud5 = async () => {
    try{
    const activeHunters = await models.hunter.findAll({
        where: {
            active:true
        }
    })
    console.log(activeHunters)
        }
catch(err){
    console.log(err)
    }
}
crud5()

// const crud6 = async() => {
//     try{
//         models.bounty.update({
//             captured:true
//             where
//         })
//     }
// }