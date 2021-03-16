const models = require('./models')

const create1 = () => {
    await models.bounty.create({
        name: 'Han Solo',
        wantedFor: 'Owing Money',
        reward: 500000,
        captured: false
    })
}
create1()