const  models = require('./models')

const crud1 = async () => {
 models.bounty.create( {
    name: 'Han Solo',
    wantedFor: 'Owing Money',
    reward: 500000,
    captured: false
    })

}

// crud1()

const crud2 = async () => {
    models.hunter.create({
        name: 'Bobba Fett',
        client: 'Jabba the Hutt',
        active: true
    })
}
